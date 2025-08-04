# Rani

A simple and powerful React animation library with TypeScript support, presets, and custom animations.

## Installation

```bash
npm install rani-motion
# or
yarn add rani-motion
```

## Quick Start

### Method 1: Using animated.div (Recommended)
```tsx
import { animated } from 'rani';

function App() {
  return (
    <div>
      {/* Basic scroll-triggered animation */}
      <animated.div animation="fadeInUp" duration={800}>
        <h1>This will fade in from bottom when scrolled into view</h1>
      </animated.div>

      {/* Different HTML elements */}
      <animated.section animation="slideInLeft" delay={200}>
        <p>This section slides in from left with a delay</p>
      </animated.section>

      <animated.h1 animation="bounceIn" duration={1000}>
        Bouncing Heading!
      </animated.h1>

      <animated.button 
        animation="scaleIn"
        onClick={() => console.log('Clicked!')}
      >
        Interactive Button
      </animated.button>
    </div>
  );
}
```

### Method 2: Using Component Wrappers
```tsx
import { RaniOnView, RaniHover, RaniClick } from 'rani';

function App() {
  return (
    <div>
      {/* Basic scroll-triggered animation */}
      <RaniOnView animation="fadeInUp" duration={800}>
        <div>This will fade in from bottom when scrolled into view</div>
      </RaniOnView>

      {/* Hover animation */}
      <RaniHover animation="scale">
        <button>Hover me!</button>
      </RaniHover>

      {/* Click animation */}
      <RaniClick animation="ripple">
        <button>Click for ripple effect</button>
      </RaniClick>
    </div>
  );
}
```

## TypeScript Support

Full TypeScript support with comprehensive type definitions:

```tsx
import { 
  RaniOnView, 
  AnimationPreset, 
  CustomAnimation 
} from 'rani';

const customAnim: CustomAnimation = {
  initial: { opacity: 0, transform: 'scale(0.8)' },
  animate: { opacity: 1, transform: 'scale(1)' }
};

const MyComponent: React.FC = () => {
  return (
    <RaniOnView 
      animation="fadeInUp" // Type-safe preset names
      customAnimation={customAnim} // Type-safe custom animations
    >
      <div>Fully typed animations!</div>
    </RaniOnView>
  );
};
```

## Available Animations

### Scroll Animations (RaniOnView / animated.*)
- **Fade**: `fadeIn`, `fadeInUp`, `fadeInDown`, `fadeInLeft`, `fadeInRight`
- **Slide**: `slideInUp`, `slideInDown`, `slideInLeft`, `slideInRight`
- **Scale**: `scaleIn`, `scaleInUp`, `zoomIn`
- **Rotate**: `rotateIn`, `rotateInLeft`, `rotateInRight`
- **Bounce**: `bounceIn`, `bounceInUp`
- **Flip**: `flipInX`, `flipInY`
- **Special**: `lightSpeedIn`, `rollIn`

### Hover Animations (RaniHover)
- `scale`, `scaleDown`, `lift`, `rotate`, `skew`, `glow`, `bounce`, `wobble`

### Click Animations (RaniClick)
- `pulse`, `ripple`, `shake`

## Advanced Usage

### Animated HTML Elements

The `animated` object provides animated versions of common HTML elements:

```tsx
import { animated } from 'rani';

// All these elements support the same animation props
<animated.div animation="fadeInUp" duration={600} />
<animated.span animation="slideInLeft" delay={200} />
<animated.section animation="bounceIn" />
<animated.article animation="rotateIn" />
<animated.header animation="fadeInDown" />
<animated.footer animation="slideInUp" />
<animated.main animation="zoomIn" />
<animated.nav animation="fadeInRight" />
<animated.h1 animation="scaleIn" />
<animated.h2 animation="flipInX" />
<animated.h3 animation="lightSpeedIn" />
<animated.p animation="rollIn" />
<animated.a animation="fadeIn" />
<animated.button animation="bounceInUp" />
<animated.img animation="fadeInLeft" />
<animated.ul animation="slideInDown" />
<animated.ol animation="slideInRight" />
<animated.li animation="fadeInUp" />
```

### Custom Animations with TypeScript

```tsx
import { animated, CustomAnimation } from 'rani';

// Define custom animation
const slideRotateAnim: CustomAnimation = {
  initial: { 
    opacity: 0, 
    transform: 'translateX(-100px) rotate(-90deg)' 
  },
  animate: { 
    opacity: 1, 
    transform: 'translateX(0px) rotate(0deg)' 
  }
};

// Use with animated.div
<animated.div 
  customAnimation={slideRotateAnim}
  duration={1200}
>
  <h2>Custom slide + rotate animation!</h2>
</animated.div>

// Or with component wrapper
<RaniOnView customAnimation={slideRotateAnim}>
  <div>Same custom animation</div>
</RaniOnView>
```

### Hover Animations

```tsx
import { RaniHover, CustomHoverAnimation } from 'rani';

const glowHover: CustomHoverAnimation = {
  default: { 
    transform: 'scale(1)',
    filter: 'brightness(1) blur(0px)',
    boxShadow: '0 0 0px rgba(59, 130, 246, 0)'
  },
  hover: { 
    transform: 'scale(1.05)',
    filter: 'brightness(1.2) blur(1px)',
    boxShadow: '0 0 25px rgba(59, 130, 246, 0.6)'
  }
};
```

### Stagger Animations

```tsx
import { RaniStagger } from 'rani';

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

<RaniStagger 
  staggerDelay={150} 
  animation="scaleIn"
  duration={600}
>
  {items.map(item => (
    <div key={item} className="card">{item}</div>
  ))}
</RaniStagger>
```

### Animation Provider & Context

```tsx
import { RaniProvider, useRaniAnimation } from 'rani';

function App() {
  return (
    <RaniProvider 
      globalDuration={800}
      globalEasing="easeOutBounce"
      reducedMotion={false}
    >
      <MyAnimatedApp />
    </RaniProvider>
  );
}

function MyAnimatedApp() {
  const { globalDuration, reducedMotion } = useRaniAnimation();
  
  return (
    <RaniOnView duration={globalDuration}>
      <div>Uses global settings</div>
    </RaniOnView>
  );
}
```

### Accessibility & Reduced Motion

```tsx
import { useReducedMotion } from 'rani';

function AccessibleAnimation() {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <RaniOnView 
      animation={prefersReducedMotion ? 'fadeIn' : 'bounceInUp'}
      duration={prefersReducedMotion ? 200 : 800}
    >
      <div>Respects user motion preferences</div>
    </RaniOnView>
  );
}
```

### Custom Hooks

```tsx
import { useIntersectionObserver, useReducedMotion } from 'rani';

function CustomAnimatedComponent() {
  // 접근성 고려
  const prefersReducedMotion = useReducedMotion();
  
  // 스크롤 감지
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <div 
      ref={elementRef}
      style={{
        opacity: isIntersecting ? 1 : 0,
        transform: isIntersecting 
          ? 'translateY(0)' 
          : 'translateY(20px)',
        transition: prefersReducedMotion 
          ? 'opacity 0.2s ease' 
          : 'all 0.6s ease'
      }}
    >
      Custom intersection observer usage with accessibility
    </div>
  );
}
```

## Props Reference

### RaniOnViewProps
```tsx
interface RaniOnViewProps {
  children: ReactNode;
  animation?: AnimationPreset;
  customAnimation?: CustomAnimation;
  duration?: number;          // default: 600
  delay?: number;             // default: 0
  easing?: EasingType;        // default: 'easeOutQuart'
  triggerOnce?: boolean;      // default: true
  threshold?: number;         // default: 0.1
  className?: string;
  style?: CSSProperties;
}
```

### RaniHoverProps
```tsx
interface RaniHoverProps {
  children: ReactNode;
  animation?: HoverPresetType;
  customAnimation?: CustomHoverAnimation;
  duration?: number;          // default: 300
  className?: string;
  style?: CSSProperties;
}
```

### RaniClickProps
```tsx
interface RaniClickProps {
  children: ReactNode;
  animation?: ClickPresetType;
  customAnimation?: CustomClickAnimation;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  className?: string;
  style?: CSSProperties;
}
```

### RaniStaggerProps
```tsx
interface RaniStaggerProps {
  children: ReactNode[];
  staggerDelay?: number;      // default: 100
  animation?: AnimationPreset;
  customAnimation?: CustomAnimation;
  duration?: number;          // default: 600
  className?: string;
  style?: CSSProperties;
}
```

## Type Definitions

### Animation Types
```tsx
type AnimationPreset = 
  | 'fadeIn' | 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight'
  | 'slideInUp' | 'slideInDown' | 'slideInLeft' | 'slideInRight'
  | 'scaleIn' | 'scaleInUp' | 'zoomIn'
  | 'rotateIn' | 'rotateInLeft' | 'rotateInRight'
  | 'bounceIn' | 'bounceInUp'
  | 'flipInX' | 'flipInY'
  | 'lightSpeedIn' | 'rollIn';

type EasingType = 
  | 'linear' | 'easeIn' | 'easeOut' | 'easeInOut'
  | 'easeOutQuart' | 'easeInOutCubic' 
  | 'easeOutBounce' | 'easeOutElastic';
```

### Custom Animation Interfaces
```tsx
interface AnimationState {
  opacity?: number;
  transform?: string;
  filter?: string;
  boxShadow?: string;
  borderRadius?: string;
  [key: string]: string | number | undefined;
}

interface CustomAnimation {
  initial: AnimationState;
  animate: AnimationState;
}

interface CustomHoverAnimation {
  default: AnimationState;
  hover: AnimationState;
}
```

## Features

- 🚀 **TypeScript First**: Full type safety and IntelliSense support
- 🎨 **20+ Preset Animations**: Ready-to-use animations for common use cases
- 🛠️ **Custom Animations**: Define your own animations with full type safety
- 📱 **Responsive**: Works perfectly on all screen sizes
- ♿ **Accessible**: Respects `prefers-reduced-motion` settings
- 🔧 **Highly Configurable**: Customize duration, delay, easing, and more
- 📦 **Tree Shakeable**: Import only what you need
- 🎯 **Performance Optimized**: Uses Intersection Observer for efficient scroll detection
- 🎪 **Zero Dependencies**: No external animation libraries required

## Browser Support

- Chrome >= 60
- Firefox >= 55
- Safari >= 12
- Edge >= 79

## License

MIT © Rani Animation Library

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Rani** - Simple, powerful, and accessible React animations 🎪
