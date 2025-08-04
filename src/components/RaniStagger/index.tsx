import React from 'react';
import { RaniStaggerProps } from './types';
import RaniOnView from '../RaniOnView';

const RaniStagger: React.FC<RaniStaggerProps> = ({ 
  children, 
  staggerDelay = 100,
  animation = 'fadeInUp',
  customAnimation,
  duration = 600,
  ...props
}) => {
  return (
    <div {...props}>
      {children.map((child, index) => (
        <RaniOnView
          key={index}
          animation={animation}
          customAnimation={customAnimation}
          duration={duration}
          delay={index * staggerDelay}
        >
          {child}
        </RaniOnView>
      ))}
    </div>
  );
};

export default RaniStagger;
