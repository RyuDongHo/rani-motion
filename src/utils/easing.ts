import { EasingFunction, EasingType } from '../types';

export const easingFunctions: Record<EasingType, EasingFunction> = {
  linear: (t: number): number => t,
  easeIn: (t: number): number => t * t,
  easeOut: (t: number): number => 1 - Math.pow(1 - t, 2),
  easeInOut: (t: number): number => 
    t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2,
  easeOutQuart: (t: number): number => 1 - Math.pow(1 - t, 4),
  easeInOutCubic: (t: number): number => 
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
  easeOutBounce: (t: number): number => {
    const n1 = 7.5625;
    const d1 = 2.75;
    if (t < 1 / d1) return n1 * t * t;
    else if (t < 2 / d1) return n1 * (t -= 1.5 / d1) * t + 0.75;
    else if (t < 2.5 / d1) return n1 * (t -= 2.25 / d1) * t + 0.9375;
    else return n1 * (t -= 2.625 / d1) * t + 0.984375;
  },
  easeOutElastic: (t: number): number => {
    const c4 = (2 * Math.PI) / 3;
    return t === 0 ? 0 : t === 1 ? 1 : 
      Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
  }
};
