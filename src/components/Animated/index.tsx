import React, { useState, useEffect, CSSProperties, useRef, MutableRefObject } from 'react';
import { animationPresets } from '../../presets';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { AnimationPreset, CustomAnimation, EasingType } from '../../types';

// 애니메이션 속성 타입
interface AnimationProps {
  animation?: AnimationPreset;
  customAnimation?: CustomAnimation;
  duration?: number;
  delay?: number;
  easing?: EasingType;
  triggerOnce?: boolean;
  threshold?: number;
}

// HTML 태그별 타입과 애니메이션 속성을 결합
type AnimatedElementProps<T extends keyof JSX.IntrinsicElements> = 
  JSX.IntrinsicElements[T] & AnimationProps;

// 애니메이션 로직을 담은 컴포넌트 생성 함수
function createAnimatedElement<T extends keyof JSX.IntrinsicElements>(tag: T) {
  const Component = React.forwardRef<HTMLElement, AnimatedElementProps<T>>((props, ref) => {
    const {
      animation = 'fadeInUp',
      customAnimation,
      duration = 600,
      delay = 0,
      easing = 'easeOutQuart',
      triggerOnce = true,
      threshold = 0.1,
      style = {},
      children,
      ...htmlProps
    } = props;

    const [isVisible, setIsVisible] = useState<boolean>(false);
    const prefersReducedMotion = useReducedMotion();
    const internalRef = useRef<HTMLElement>(null);
    
    const { elementRef, isIntersecting } = useIntersectionObserver({
      threshold,
      triggerOnce
    });

    useEffect(() => {
      if (isIntersecting) {
        setTimeout(() => {
          setIsVisible(true);
        }, delay);
      } else if (!triggerOnce) {
        setIsVisible(false);
      }
    }, [isIntersecting, delay, triggerOnce]);

    const getAnimationStyle = (): CSSProperties => {
      const selectedAnimation = customAnimation || animationPresets[animation] || animationPresets.fadeInUp;
      const currentStyle = isVisible ? selectedAnimation.animate : selectedAnimation.initial;

      const finalDuration = prefersReducedMotion ? Math.min(duration, 200) : duration;

      return {
        ...currentStyle,
        transition: `all ${finalDuration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
        willChange: prefersReducedMotion ? 'opacity' : 'transform, opacity'
      } as CSSProperties;
    };

    return React.createElement(
      tag,
      {
        ref: (el: HTMLElement) => {
          // intersection observer ref 설정
          (elementRef as MutableRefObject<HTMLElement>).current = el;
          
          // 내부 ref 설정
          (internalRef as MutableRefObject<HTMLElement>).current = el;
          
          // 외부 ref 설정
          if (ref) {
            if (typeof ref === 'function') {
              ref(el);
            } else {
              (ref as MutableRefObject<HTMLElement>).current = el;
            }
          }
        },
        style: { ...getAnimationStyle(), ...style },
        ...htmlProps
      },
      children
    );
  });

  Component.displayName = `animated.${String(tag)}`;
  return Component;
}

// animated 객체 생성 (타입 체크 우회)
const animated = {
  div: createAnimatedElement('div'),
  span: createAnimatedElement('span'),
  section: createAnimatedElement('section'),
  article: createAnimatedElement('article'),
  header: createAnimatedElement('header'),
  footer: createAnimatedElement('footer'),
  main: createAnimatedElement('main'),
  nav: createAnimatedElement('nav'),
  h1: createAnimatedElement('h1'),
  h2: createAnimatedElement('h2'),
  h3: createAnimatedElement('h3'),
  h4: createAnimatedElement('h4'),
  h5: createAnimatedElement('h5'),
  h6: createAnimatedElement('h6'),
  p: createAnimatedElement('p'),
  a: createAnimatedElement('a'),
  button: createAnimatedElement('button'),
  img: createAnimatedElement('img'),
  ul: createAnimatedElement('ul'),
  ol: createAnimatedElement('ol'),
  li: createAnimatedElement('li')
};

export default animated;
export type { AnimatedElementProps, AnimationProps };
