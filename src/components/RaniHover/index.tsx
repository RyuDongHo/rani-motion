import React, { useState, CSSProperties } from 'react';
import { RaniHoverProps } from './types';
import { hoverPresets } from '../../presets';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const RaniHover: React.FC<RaniHoverProps> = ({ 
  children, 
  animation = 'scale',
  customAnimation,
  duration = 300,
  className = '',
  style = {},
  ...props
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const prefersReducedMotion = useReducedMotion();

  const getHoverStyle = (): CSSProperties => {
    const selectedAnimation = customAnimation || hoverPresets[animation] || hoverPresets.scale;
    const currentStyle = isHovered ? selectedAnimation.hover : selectedAnimation.default;

    // 접근성 고려: 모션 감소 시 애니메이션 최소화
    const finalDuration = prefersReducedMotion ? Math.min(duration, 150) : duration;

    return {
      ...currentStyle,
      transition: `all ${finalDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
      cursor: 'pointer'
    } as CSSProperties;
  };

  return (
    <div
      className={className}
      style={{ ...getHoverStyle(), ...style }}
      onMouseEnter={() => !prefersReducedMotion && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </div>
  );
};

export default RaniHover;
