import { ReactNode } from 'react';
import { AnimationContextType, EasingType } from '../../types';

export interface RaniProviderProps {
  children: ReactNode;
  globalDuration?: number;
  globalEasing?: EasingType;
  globalDelay?: number;
  reducedMotion?: boolean;
}

export type { AnimationContextType };
