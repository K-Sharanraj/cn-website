'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useStickyTabs, TabConfig } from '@/hooks/useStickyTabs';
import styles from '@/app/tech-trio/sticky-tabs.module.css';

interface StickyTabBarProps {
  tabs: TabConfig[];
  className?: string;
  tabClassName?: string;
  activeTabClassName?: string;
  stickyOffset?: number;
  rootMargin?: string;
  threshold?: number;
}

export const StickyTabBar: React.FC<StickyTabBarProps> = ({
  tabs,
  className,
  tabClassName,
  activeTabClassName,
  stickyOffset = 100,
  rootMargin = '-20% 0px -60% 0px',
  threshold = 0.3
}) => {
  const { activeTab, isSticky, tabBarRef, handleTabClick } = useStickyTabs({
    tabs,
    rootMargin,
    threshold,
    offset: stickyOffset
  });

  return (
    <div
      ref={tabBarRef}
      className={cn(
        'bg-white shadow-md rounded-lg',
        styles.tabBar,
        isSticky ? styles.sticky : styles.normal,
        className
      )}
    >
      <div className="flex items-center h-16 px-4">
        <ul className={cn("flex w-full justify-start overflow-x-auto scroll-smooth space-x-4 lg:space-x-8 font-semibold", styles.tabsContainer)}>
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => handleTabClick(tab.id)}
                className={cn(
                  'py-2 px-3 lg:px-4 text-center text-sm rounded-md transition-all duration-300 whitespace-nowrap hover:bg-gray-100',
                  activeTab === tab.id
                    ? cn(styles.activeTab, activeTabClassName)
                    : 'text-gray-600',
                  tabClassName
                )}
                aria-current={activeTab === tab.id ? 'page' : undefined}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StickyTabBar;