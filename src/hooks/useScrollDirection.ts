'use client';

import { useState, useEffect, useRef } from 'react';

interface ScrollDirectionOptions {
  threshold?: number;
  tresholdPixels?: number;
  scroller?: HTMLElement | Window | null;
  axis?: 'y' | 'x';
  scrollUp?: string;
  scrollDown?: string;
  still?: string;
}

export function useScrollDirection(options: ScrollDirectionOptions = {}) {
  const {
    threshold = 0,
    tresholdPixels = 0,
    scroller = typeof window !== 'undefined' ? window : null,
    axis = 'y',
    scrollUp = 'up',
    scrollDown = 'down',
    still = 'still',
  } = options;

  const [scrollDir, setScrollDir] = useState(still);
  const blocked = useRef(false);
  const prevScrollY = useRef(0);
  const prevScrollX = useRef(0);

  useEffect(() => {
    if (!scroller) return;

    const updateScrollDir = () => {
      const scrollY = axis === 'y' 
        ? (scroller instanceof Window ? window.pageYOffset : scroller.scrollTop)
        : (scroller instanceof Window ? window.pageXOffset : scroller.scrollLeft);

      if (Math.abs(scrollY - prevScrollY.current) >= tresholdPixels) {
        const newScrollDir =
          scrollY > prevScrollY.current ? scrollDown : scrollUp;

        setScrollDir(newScrollDir);
        prevScrollY.current = scrollY > 0 ? scrollY : 0;
      }

      blocked.current = false;
    };

    const onScroll = () => {
      if (!blocked.current) {
        blocked.current = true;
        window.requestAnimationFrame(updateScrollDir);
      }
    };

    scroller.addEventListener('scroll', onScroll);

    return () => {
      scroller.removeEventListener('scroll', onScroll);
    };
  }, [scroller, threshold, tresholdPixels, axis, scrollUp, scrollDown]);

  return scrollDir;
}
