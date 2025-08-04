import { CSSProperties, ReactNode } from 'react';

export type EasingFunction = (t: number) => number;

export type EasingType = 
  | 'linear'
  | 'easeIn'
  | 'easeOut'
  | 'easeInOut'
  | 'easeOutQuart'
  | 'easeInOutCubic'
  | 'easeOutBounce'
  | 'easeOutElastic';

export type AnimationPresetType = 
  | 'fadeIn'
  | 'fadeInUp'
  | 'fadeInDown'
  | 'fadeInLeft'
  | 'fadeInRight'
  | 'slideInUp'
  | 'slideInDown'
  | 'slideInLeft'
  | 'slideInRight'
  | 'scaleIn'
  | 'scaleInUp'
  | 'zoomIn'
  | 'rotateIn'
  | 'rotateInLeft'
  | 'rotateInRight'
  | 'bounceIn'
  | 'bounceInUp'
  | 'flipInX'
  | 'flipInY'
  | 'lightSpeedIn'
  | 'rollIn';

export type HoverPresetType = 
  | 'scale'
  | 'scaleDown'
  | 'lift'
  | 'rotate'
  | 'skew'
  | 'glow'
  | 'bounce'
  | 'wobble';

export type ClickPresetType = 
  | 'pulse'
  | 'ripple'
  | 'shake';

export interface AnimationState {
  opacity?: number;
  transform?: string;
  filter?: string;
  boxShadow?: string;
  borderRadius?: string;
  [key: string]: string | number | undefined;
}

export interface CustomAnimation {
  initial: AnimationState;
  animate: AnimationState;
}

export interface CustomHoverAnimation {
  default: AnimationState;
  hover: AnimationState;
}

export interface CustomClickAnimation {
  default: AnimationState;
  active: AnimationState;
}

export interface BaseAnimationProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export interface RaniOnViewProps extends BaseAnimationProps {
  animation?: AnimationPresetType;
  customAnimation?: CustomAnimation;
  duration?: number;
  delay?: number;
  easing?: EasingType;
  triggerOnce?: boolean;
  threshold?: number;
}

export interface RaniHoverProps extends BaseAnimationProps {
  animation?: HoverPresetType;
  customAnimation?: CustomHoverAnimation;
  duration?: number;
}

export interface RaniClickProps extends BaseAnimationProps {
  animation?: ClickPresetType;
  customAnimation?: CustomClickAnimation;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export interface RaniStaggerProps extends Omit<BaseAnimationProps, 'children'> {
  children: ReactNode[];
  staggerDelay?: number;
  animation?: AnimationPresetType;
  customAnimation?: CustomAnimation;
  duration?: number;
}

export interface AnimationContextType {
  globalDuration: number;
  globalEasing: EasingType;
  globalDelay: number;
  reducedMotion: boolean;
}

export interface RaniProviderProps {
  children: ReactNode;
  globalDuration?: number;
  globalEasing?: EasingType;
  globalDelay?: number;
  reducedMotion?: boolean;
}
// Export presets as new aliases
export type AnimationPreset = AnimationPresetType;
  