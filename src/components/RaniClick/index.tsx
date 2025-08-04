import React, { useState, useEffect, useRef, CSSProperties } from 'react';
import { RaniClickProps } from './types';
import { clickPresets } from '../../presets';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const RaniClick: React.FC<RaniClickProps> = ({ 
  children, 
  animation = 'ripple',
  customAnimation,
  className = '',
  style = {},
  onClick,
  ...props
}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!prefersReducedMotion) {
      setIsClicked(true);
      
      if (animation === 'ripple' && elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        const ripple = document.createElement('div');
        ripple.style.cssText = `
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.6);
          transform: scale(0);
          animation: ripple-animation 0.6s linear;
          left: ${x}px;
          top: ${y}px;
          width: ${size}px;
          height: ${size}px;
          pointer-events: none;
        `;
        
        elementRef.current.appendChild(ripple);
        
        setTimeout(() => {
          if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
          }
        }, 600);
      }
      
      setTimeout(() => setIsClicked(false), 200);
    }
    
    if (onClick) onClick(e);
  };

  const getClickStyle = (): CSSProperties => {
    const selectedAnimation = customAnimation || clickPresets[animation] || clickPresets.pulse;
    const currentStyle = isClicked ? selectedAnimation.active : selectedAnimation.default;

    return {
      ...currentStyle,
      transition: 'transform 0.1s ease',
      cursor: 'pointer'
    } as CSSProperties;
  };

  useEffect(() => {
    if (!document.querySelector('#ripple-keyframes')) {
      const style = document.createElement('style');
      style.id = 'ripple-keyframes';
      style.textContent = `
        @keyframes ripple-animation {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{ ...getClickStyle(), ...style }}
      onClick={handleClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default RaniClick;
