
import { useState, useEffect, useRef } from 'react';

interface UseStickyTabsProps {
  sectionRefs: React.RefObject<HTMLElement>[];
  sentinelRef: React.RefObject<HTMLDivElement>;
}

export const useStickyTabs = ({ sectionRefs, sentinelRef }: UseStickyTabsProps) => {
  const [activeTab, setActiveTab] = useState('');
  const [isFixed, setIsFixed] = useState(false);
  const tabContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sentinel = sentinelRef.current;
    if (sentinel) {
      const stickyObserver = new IntersectionObserver(
        ([entry]) => {
          setIsFixed(!entry.isIntersecting);
        },
        { rootMargin: '-1px 0px 0px 0px' }
      );
      stickyObserver.observe(sentinel);
    }

    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
      if (sentinel) {
        const stickyObserver = new IntersectionObserver(() => {});
        stickyObserver.observe(sentinel);
        stickyObserver.disconnect();
      }
    };
  }, [sectionRefs, sentinelRef]);

  return { activeTab, isFixed, tabContainerRef };
};
