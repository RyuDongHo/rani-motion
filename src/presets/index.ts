import { 
  AnimationPresetType, 
  HoverPresetType, 
  CustomAnimation, 
  CustomHoverAnimation,
  ClickPresetType,
  CustomClickAnimation
} from '../types';

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
    initial: { opacity: 0, transform: 'scale(0.8) translateY(30px)' },
    animate: { opacity: 1, transform: 'scale(1) translateY(0)' }
  },
  zoomIn: {
    initial: { opacity: 0, transform: 'scale(0.3)' },
    animate: { opacity: 1, transform: 'scale(1)' }
  },
  rotateIn: {
    initial: { opacity: 0, transform: 'rotate(-180deg) scale(0.8)' },
    animate: { opacity: 1, transform: 'rotate(0deg) scale(1)' }
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
    initial: { opacity: 0, transform: 'perspective(400px) rotateX(-90deg)' },
    animate: { opacity: 1, transform: 'perspective(400px) rotateX(0deg)' }
  },
  flipInY: {
    initial: { opacity: 0, transform: 'perspective(400px) rotateY(-90deg)' },
    animate: { opacity: 1, transform: 'perspective(400px) rotateY(0deg)' }
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

export const hoverPresets: Record<HoverPresetType, CustomHoverAnimation> = {
  scale: {
    default: { transform: 'scale(1)' },
    hover: { transform: 'scale(1.05)' }
  },
  scaleDown: {
    default: { transform: 'scale(1)' },
    hover: { transform: 'scale(0.95)' }
  },
  lift: {
    default: { transform: 'translateY(0)', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' },
    hover: { transform: 'translateY(-5px)', boxShadow: '0 10px 25px rgba(0,0,0,0.15)' }
  },
  rotate: {
    default: { transform: 'rotate(0deg)' },
    hover: { transform: 'rotate(5deg)' }
  },
  skew: {
    default: { transform: 'skew(0deg)' },
    hover: { transform: 'skew(-2deg)' }
  },
  glow: {
    default: { boxShadow: '0 0 0px rgba(59, 130, 246, 0)', transform: 'scale(1)' },
    hover: { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)', transform: 'scale(1.02)' }
  },
  bounce: {
    default: { transform: 'translateY(0) scale(1)' },
    hover: { transform: 'translateY(-10px) scale(1.02)' }
  },
  wobble: {
    default: { transform: 'rotate(0deg)' },
    hover: { transform: 'rotate(-5deg)' }
  }
};

export const clickPresets: Record<ClickPresetType, CustomClickAnimation> = {
  pulse: {
    default: { transform: 'scale(1)' },
    active: { transform: 'scale(0.95)' }
  },
  shake: {
    default: { transform: 'translateX(0)' },
    active: { transform: 'translateX(-2px)' }
  },
  ripple: { 
    default: { position: 'relative', overflow: 'hidden' },
    active: { position: 'relative', overflow: 'hidden' }
  }
};
