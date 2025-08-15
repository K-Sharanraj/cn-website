'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

export interface TabConfig {
  id: string;
  label: string;
  ref: React.RefObject<HTMLElement>;
}

interface UseStickyTabsOptions {
  tabs: TabConfig[];
  rootMargin?: string;
  threshold?: number;
  offset?: number; // Offset for sticky positioning
}

export const useStickyTabs = ({
  tabs,
  rootMargin = '-20% 0px -60% 0px',
  threshold = 0.3,
  offset = 100
}: UseStickyTabsOptions) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.id || '');
  const [isSticky, setIsSticky] = useState(false);
  const tabBarRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const stickyObserverRef = useRef<IntersectionObserver | null>(null);
  const isScrollingToTab = useRef(false);

  // Handle manual tab clicks
  const handleTabClick = useCallback((tabId: string) => {
    const tab = tabs.find(t => t.id === tabId);
    if (tab?.ref.current) {
      isScrollingToTab.current = true;
      setActiveTab(tabId);
      
      // Calculate scroll position with offset for sticky header
      const element = tab.ref.current;
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementTop - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Reset the flag after scrolling completes
      setTimeout(() => {
        isScrollingToTab.current = false;
      }, 1000);
    }
  }, [tabs, offset]);

  // Set up intersection observer for section visibility
  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (isScrollingToTab.current) return;

        // Create a map to store intersection ratios for all sections
        const visibleSections = new Map<string, number>();

        entries.forEach((entry) => {
          const tabId = entry.target.getAttribute('data-tab-id');
          if (tabId) {
            if (entry.isIntersecting) {
              visibleSections.set(tabId, entry.intersectionRatio);
            } else {
              visibleSections.set(tabId, 0);
            }
          }
        });

        // Find the section with the highest intersection ratio
        let maxRatio = 0;
        let mostVisibleTab = '';

        visibleSections.forEach((ratio, tabId) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            mostVisibleTab = tabId;
          }
        });

        // If no section is significantly visible, check which section is closest to the top
        if (maxRatio < 0.1) {
          let closestToTop = '';
          let minDistance = Infinity;

          tabs.forEach((tab) => {
            if (tab.ref.current) {
              const rect = tab.ref.current.getBoundingClientRect();
              const distance = Math.abs(rect.top - offset);
              if (distance < minDistance) {
                minDistance = distance;
                closestToTop = tab.id;
              }
            }
          });

          if (closestToTop) {
            mostVisibleTab = closestToTop;
          }
        }

        if (mostVisibleTab && mostVisibleTab !== activeTab) {
          setActiveTab(mostVisibleTab);
        }
      },
      {
        rootMargin,
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
      }
    );

    // Observe all tab sections
    tabs.forEach((tab) => {
      if (tab.ref.current) {
        tab.ref.current.setAttribute('data-tab-id', tab.id);
        observerRef.current?.observe(tab.ref.current);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [tabs, activeTab, rootMargin, offset]);

  // Set up intersection observer for sticky behavior
  useEffect(() => {
    if (!tabBarRef.current) return;

    if (stickyObserverRef.current) {
      stickyObserverRef.current.disconnect();
    }

    // Observe the tab bar itself to determine when it should become sticky
    stickyObserverRef.current = new IntersectionObserver(
      ([entry]) => {
        // When the tab bar is not intersecting with the top of the viewport, make it sticky
        setIsSticky(!entry.isIntersecting);
      },
      {
        rootMargin: `-${offset}px 0px 0px 0px`,
        threshold: 0
      }
    );

    stickyObserverRef.current.observe(tabBarRef.current);

    return () => {
      stickyObserverRef.current?.disconnect();
    };
  }, [offset]);

  return {
    activeTab,
    isSticky,
    tabBarRef,
    handleTabClick
  };
};