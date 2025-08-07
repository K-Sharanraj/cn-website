'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface ScrollAnimationState {
  scrollY: number;
  scrollProgress: number;
  isScrolled: boolean;
  opacity: number;
  scale: number;
  blur: number;
  height: number;
  translateY: number;
}

interface SmoothScrollOptions {
  maxScroll?: number;
  minOpacity?: number;
  maxOpacity?: number;
  minScale?: number;
  maxScale?: number;
  minBlur?: number;
  maxBlur?: number;
  minHeight?: number;
  maxHeight?: number;
  scrollThreshold?: number;
  hideThreshold?: number;
  hideDirection?: 'up' | 'down';
  animationStartThreshold?: number; // New: When to start animations
  disableHiding?: boolean; // New: Option to disable hiding
}

export function useSmoothScrollAnimation(options: SmoothScrollOptions = {}) {
  const {
    maxScroll = 200,
    minOpacity = 0.8,
    maxOpacity = 1,
    minScale = 0.95,
    maxScale = 1,
    minBlur = 8,
    maxBlur = 16,
    minHeight = 60,
    maxHeight = 80,
    scrollThreshold = 10,
    hideThreshold = 150,
    hideDirection = 'down',
    animationStartThreshold = 0, // New: Default to start immediately
    disableHiding = false // New: Default to allow hiding
  } = options;

  const [animationState, setAnimationState] = useState<ScrollAnimationState>({
    scrollY: 0,
    scrollProgress: 0,
    isScrolled: false,
    opacity: maxOpacity,
    scale: maxScale,
    blur: minBlur,
    height: maxHeight,
    translateY: 0
  });

  const lastScrollY = useRef(0);
  const scrollDirection = useRef<'up' | 'down' | 'still'>('still');
  const ticking = useRef(false);

  // Interpolation utility function
  const lerp = useCallback((start: number, end: number, progress: number): number => {
    return start + (end - start) * Math.min(Math.max(progress, 0), 1);
  }, []);

  // Calculate animation values based on scroll position
  const calculateAnimationValues = useCallback((scrollY: number) => {
    // Check if we should start animations based on threshold
    const shouldAnimate = scrollY >= animationStartThreshold;
    
    // Calculate progress only after animation start threshold
    const adjustedScrollY = Math.max(0, scrollY - animationStartThreshold);
    const progress = shouldAnimate ? Math.min(adjustedScrollY / maxScroll, 1) : 0;
    const isScrolled = scrollY > scrollThreshold;
    
    // Determine scroll direction
    const currentDirection = scrollY > lastScrollY.current ? 'down' : 
                           scrollY < lastScrollY.current ? 'up' : 'still';
    scrollDirection.current = currentDirection;
    
    // Calculate hide/show based on direction and threshold (only if hiding is enabled)
    const shouldHide = !disableHiding && shouldAnimate && (
      hideDirection === 'down' 
        ? currentDirection === 'down' && scrollY > hideThreshold
        : currentDirection === 'up' && scrollY > hideThreshold
    );

    // Apply animations only if we're past the start threshold
    const opacity = shouldHide ? 0 : (shouldAnimate ? lerp(maxOpacity, minOpacity, progress) : maxOpacity);
    const scale = shouldAnimate ? lerp(maxScale, minScale, progress) : maxScale;
    const blur = shouldAnimate ? lerp(minBlur, maxBlur, progress) : minBlur;
    const height = shouldAnimate ? lerp(maxHeight, minHeight, progress) : maxHeight;
    const translateY = shouldHide ? -100 : 0;

    return {
      scrollY,
      scrollProgress: progress,
      isScrolled,
      opacity,
      scale,
      blur,
      height,
      translateY
    };
  }, [maxScroll, scrollThreshold, hideThreshold, hideDirection, animationStartThreshold, disableHiding, lerp, minOpacity, maxOpacity, minScale, maxScale, minBlur, maxBlur, minHeight, maxHeight]);

  // Smooth scroll handler with requestAnimationFrame
  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(() => {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        const newState = calculateAnimationValues(scrollY);
        
        setAnimationState(newState);
        lastScrollY.current = scrollY;
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, [calculateAnimationValues]);

  useEffect(() => {
    // Initial calculation
    const initialScrollY = window.pageYOffset || document.documentElement.scrollTop;
    setAnimationState(calculateAnimationValues(initialScrollY));
    lastScrollY.current = initialScrollY;

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, calculateAnimationValues]);

  return {
    ...animationState,
    scrollDirection: scrollDirection.current
  };
}