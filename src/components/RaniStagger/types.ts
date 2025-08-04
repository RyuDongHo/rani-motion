import { CSSProperties, ReactNode } from 'react';
import { AnimationPresetType, CustomAnimation } from '../../types';

export interface RaniStaggerProps {
  children: ReactNode[];
  staggerDelay?: number;
  animation?: AnimationPresetType;
  customAnimation?: CustomAnimation;
  duration?: number;
  className?: string;
  style?: CSSProperties;
}
