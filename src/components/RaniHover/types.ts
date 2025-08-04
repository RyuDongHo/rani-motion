import { CSSProperties, ReactNode } from 'react';
import { HoverPresetType, CustomHoverAnimation } from '../../types';

export interface RaniHoverProps {
  children: ReactNode;
  animation?: HoverPresetType;
  customAnimation?: CustomHoverAnimation;
  duration?: number;
  className?: string;
  style?: CSSProperties;
}
