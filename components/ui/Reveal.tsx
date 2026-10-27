'use client';

import { useEffect, useRef, useState } from 'react';
import { RevealProps } from '@/types/templates.types';

export const Reveal = ({ children, direction = 'up', delay = 0, fade = true }: RevealProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const revealHashTarget = () => {
      const target = window.location.hash ? document.querySelector(window.location.hash) : null;
      if (target && element.contains(target)) {
        setIsVisible(true);
        return true;
      }
      return false;
    };

    if (!revealHashTarget() && !window.matchMedia('(prefers-reduced-motion: reduce)').matches && element.getBoundingClientRect().top > window.innerHeight) {
      setIsVisible(false);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(element);
    window.addEventListener('hashchange', revealHashTarget);
    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', revealHashTarget);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
      className={`${isVisible ? 'translate-x-0 translate-y-0 scale-100' : direction === 'left' ? '-translate-x-6' : direction === 'right' ? 'translate-x-6' : direction === 'scale' ? 'scale-[0.98]' : 'translate-y-8'} ${isVisible || !fade ? 'opacity-100' : 'opacity-0'} h-full transform-gpu transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:opacity-100 motion-reduce:transition-none`}
    >
      {children}
    </div>
  );
};
