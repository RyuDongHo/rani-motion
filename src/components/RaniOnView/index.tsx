import React, { useState, useEffect, CSSProperties } from 'react';
import { RaniOnViewProps } from './types';
import { animationPresets } from '../../presets';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const RaniOnView: React.FC<RaniOnViewProps> = ({ 
  children, 
  animation = 'fadeInUp',
  customAnimation,
  duration = 600,
  delay = 0,
  easing = 'easeOutQuart',
  triggerOnce = true,
  threshold = 0.1,
  className = '',
  style = {},
  ...props
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const prefersReducedMotion = useReducedMotion();
  
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold,
    triggerOnce
  });

  useEffect(() => {
    if (isIntersecting) {
      setTimeout(() => {
        setIsVisible(true);
      }, delay);
    } else if (!triggerOnce) {
      setIsVisible(false);
    }
  }, [isIntersecting, delay, triggerOnce]);

  const getAnimationStyle = (): CSSProperties => {
    const selectedAnimation = customAnimation || animationPresets[animation] || animationPresets.fadeInUp;
    const currentStyle = isVisible ? selectedAnimation.animate : selectedAnimation.initial;

    // 접근성 고려: 사용자가 모션 감소를 선호하면 애니메이션 최소화
    const finalDuration = prefersReducedMotion ? Math.min(duration, 200) : duration;
    const finalAnimation = prefersReducedMotion ? 'fadeIn' : animation;

    return {
      ...currentStyle,
      transition: `all ${finalDuration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
      willChange: prefersReducedMotion ? 'opacity' : 'transform, opacity'
    } as CSSProperties;
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={{ ...getAnimationStyle(), ...style }}
      {...props}
    >
      {children}
    </div>
  );
};

export default RaniOnView;
