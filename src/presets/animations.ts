import { AnimationPresetType, CustomAnimation } from '../types';

export const animationPresets: Record<AnimationPresetType, CustomAnimation> = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
  },
  fadeInUp: {
    initial: { opacity: 0, transform: 'translateY(30px)' },
    animate: { opacity: 1, transform: 'translateY(0)' }
  },
  fadeInDown: {
    initial: { opacity: 0, transform: 'translateY(-30px)' },
    animate: { opacity: 1, transform: 'translateY(0)' }
  },
  fadeInLeft: {
    initial: { opacity: 0, transform: 'translateX(-30px)' },
    animate: { opacity: 1, transform: 'translateX(0)' }
  },
  fadeInRight: {
    initial: { opacity: 0, transform: 'translateX(30px)' },
    animate: { opacity: 1, transform: 'translateX(0)' }
  },
  slideInUp: {
    initial: { transform: 'translateY(100%)' },
    animate: { transform: 'translateY(0)' }
  },
  slideInDown: {
    initial: { transform: 'translateY(-100%)' },
    animate: { transform: 'translateY(0)' }
  },
  slideInLeft: {
    initial: { transform: 'translateX(-100%)' },
    animate: { transform: 'translateX(0)' }
  },
  slideInRight: {
    initial: { transform: 'translateX(100%)' },
    animate: { transform: 'translateX(0)' }
  },
  scaleIn: {
    initial: { opacity: 0, transform: 'scale(0.8)' },
    animate: { opacity: 1, transform: 'scale(1)' }
  },
  scaleInUp: {
    initial: { opacity: 0, transform: 'scale(0.8) translateY(20px)' },
    animate: { opacity: 1, transform: 'scale(1) translateY(0)' }
  },
  zoomIn: {
    initial: { opacity: 0, transform: 'scale(0.3)' },
    animate: { opacity: 1, transform: 'scale(1)' }
  },
  rotateIn: {
    initial: { opacity: 0, transform: 'rotate(-180deg)' },
    animate: { opacity: 1, transform: 'rotate(0deg)' }
  },
  rotateInLeft: {
    initial: { opacity: 0, transform: 'rotate(-90deg)' },
    animate: { opacity: 1, transform: 'rotate(0deg)' }
  },
  rotateInRight: {
    initial: { opacity: 0, transform: 'rotate(90deg)' },
    animate: { opacity: 1, transform: 'rotate(0deg)' }
  },
  bounceIn: {
    initial: { opacity: 0, transform: 'scale(0.3)' },
    animate: { opacity: 1, transform: 'scale(1)' }
  },
  bounceInUp: {
    initial: { opacity: 0, transform: 'translateY(100px)' },
    animate: { opacity: 1, transform: 'translateY(0)' }
  },
  flipInX: {
    initial: { opacity: 0, transform: 'rotateX(-90deg)' },
    animate: { opacity: 1, transform: 'rotateX(0deg)' }
  },
  flipInY: {
    initial: { opacity: 0, transform: 'rotateY(-90deg)' },
    animate: { opacity: 1, transform: 'rotateY(0deg)' }
  },
  lightSpeedIn: {
    initial: { opacity: 0, transform: 'translateX(100%) skewX(-30deg)' },
    animate: { opacity: 1, transform: 'translateX(0) skewX(0deg)' }
  },
  rollIn: {
    initial: { opacity: 0, transform: 'translateX(-100%) rotate(-120deg)' },
    animate: { opacity: 1, transform: 'translateX(0) rotate(0deg)' }
  }
};
