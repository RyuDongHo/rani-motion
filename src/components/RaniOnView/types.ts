import {
  BaseAnimationProps,
  AnimationPresetType,
  CustomAnimation,
  EasingType,
} from "../../types";
export interface RaniOnViewProps extends BaseAnimationProps {
  animation?: AnimationPresetType;
  customAnimation?: CustomAnimation;
  duration?: number;
  delay?: number;
  easing?: EasingType;
  triggerOnce?: boolean;
  threshold?: number;
}
