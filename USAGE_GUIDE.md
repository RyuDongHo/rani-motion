# Rani 애니메이션 라이브러리 사용 가이드

## 🚀 설치

```bash
npm install rani
# 또는
yarn add rani
```

## 📦 패키지 구조

```
rani/
├── src/
│   ├── components/           # React 컴포넌트들
│   │   ├── RaniOnView/         # 스크롤 애니메이션
│   │   ├── RaniHover/          # 호버 애니메이션
│   │   ├── RaniClick/          # 클릭 애니메이션
│   │   ├── RaniStagger/        # 순차 애니메이션
│   │   ├── RaniProvider/       # 전역 설정
│   │   └── Animated/           # animated.div 스타일 컴포넌트
│   ├── hooks/               # 커스텀 훅들
│   │   ├── useReducedMotion.ts
│   │   └── useIntersectionObserver.ts
│   ├── presets/             # 미리 정의된 애니메이션들
│   ├── types/               # TypeScript 타입 정의
│   └── utils/               # 유틸리티 함수들
├── dist/                    # 빌드된 파일들 (배포용)
├── examples/                # 예제 파일들
└── demo.html               # 브라우저 데모
```

## 🎨 기본 사용법

### 방법 1: animated.div 스타일 (권장)

가장 직관적이고 깔끔한 방법입니다:

```tsx
import { animated } from 'rani';

function MyComponent() {
  return (
    <animated.div 
      animation="fadeInUp" 
      duration={800}
      delay={200}
    >
      스크롤하면 나타나는 요소
    </animated.div>
  );
}
```

### 방법 2: Rani 컴포넌트 래퍼

```tsx
import { RaniOnView } from 'rani';

function MyComponent() {
  return (
    <RaniOnView 
      animation="fadeInUp" 
      duration={800}
      delay={200}
    >
      <div>스크롤하면 나타나는 요소</div>
    </RaniOnView>
  );
}
```

### 다양한 HTML 요소 애니메이션

```tsx
import { animated } from 'rani';

function AnimatedElements() {
  return (
    <div>
      <animated.h1 animation="bounceIn" duration={1000}>
        제목 애니메이션
      </animated.h1>
      
      <animated.section animation="slideInLeft" delay={200}>
        섹션 내용
      </animated.section>
      
      <animated.button 
        animation="scaleIn"
        onClick={() => console.log('클릭!')}
      >
        인터랙티브 버튼
      </animated.button>
      
      <animated.img 
        src="/image.jpg" 
        animation="fadeInRight"
        alt="애니메이션 이미지" 
      />
    </div>
  );
}
```

### 호버 애니메이션

```tsx
import { RaniHover } from 'rani';

function HoverCard() {
  return (
    <RaniHover animation="scale" duration={300}>
      <div className="card">
        마우스를 올려보세요!
      </div>
    </RaniHover>
  );
}
```

### 클릭 애니메이션

```tsx
import { RaniClick } from 'rani';

function ClickButton() {
  return (
    <RaniClick 
      animation="ripple"
      onClick={() => console.log('클릭됨!')}
    >
      <button>클릭해보세요!</button>
    </RaniClick>
  );
}
```

### 순차 애니메이션

```tsx
import { RaniStagger, animated } from 'rani';

function StaggerDemo() {
  const items = ['항목 1', '항목 2', '항목 3', '항목 4'];
  
  return (
    <RaniStagger 
      staggerDelay={100} 
      animation="scaleIn"
    >
      {items.map(item => (
        <animated.div key={item} className="item">
          {item}
        </animated.div>
      ))}
    </RaniStagger>
  );
}
```

## 🛠️ 커스텀 애니메이션

### animated.div로 커스텀 애니메이션

```tsx
import { animated, CustomAnimation } from 'rani';

const customAnim: CustomAnimation = {
  initial: { 
    opacity: 0, 
    transform: 'translateY(50px) rotate(-10deg)' 
  },
  animate: { 
    opacity: 1, 
    transform: 'translateY(0px) rotate(0deg)' 
  }
};

function CustomAnimatedComponent() {
  return (
    <animated.div customAnimation={customAnim}>
      커스텀 애니메이션!
    </animated.div>
  );
}
```

### Rani 컴포넌트로 커스텀 애니메이션

```tsx
import { RaniOnView, CustomAnimation } from 'rani';

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

function CustomComponent() {
  return (
    <RaniOnView customAnimation={slideRotateAnim}>
      <div>복잡한 커스텀 애니메이션</div>
    </RaniOnView>
  );
}
```

### 커스텀 호버 애니메이션

```tsx
import { RaniHover, CustomHoverAnimation } from 'rani';

const glowEffect: CustomHoverAnimation = {
  default: { 
    transform: 'scale(1)',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    filter: 'brightness(1)'
  },
  hover: { 
    transform: 'scale(1.05)',
    boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)',
    filter: 'brightness(1.2)'
  }
};

function GlowCard() {
  return (
    <RaniHover customAnimation={glowEffect}>
      <div className="glow-card">
        빛나는 카드
      </div>
    </RaniHover>
  );
}
```

## 🌐 전역 설정 (RaniProvider)

```tsx
import { RaniProvider } from 'rani';

function App() {
  return (
    <RaniProvider 
      globalDuration={800}
      globalEasing="easeOutBounce"
      reducedMotion={false}
    >
      <YourApp />
    </RaniProvider>
  );
}
```

## ♿ 접근성 (Accessibility)

```tsx
import { useReducedMotion, animated } from 'rani';

function AccessibleComponent() {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <animated.div 
      animation={prefersReducedMotion ? 'fadeIn' : 'bounceInUp'}
      duration={prefersReducedMotion ? 200 : 800}
    >
      접근성을 고려한 애니메이션
    </animated.div>
  );
}
```

## 🔧 고급 사용법

### Intersection Observer 커스텀 훅

```tsx
import { useIntersectionObserver } from 'rani';

function CustomScrollComponent() {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <div 
      ref={elementRef}
      style={{
        opacity: isIntersecting ? 1 : 0,
        transform: isIntersecting ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.6s ease'
      }}
    >
      커스텀 스크롤 애니메이션
    </div>
  );
}
```

### 복합 애니메이션 조합

```tsx
import { RaniOnView, RaniHover, RaniClick } from 'rani';

function ComplexAnimation() {
  return (
    <RaniOnView animation="zoomIn" delay={200}>
      <RaniHover animation="lift">
        <RaniClick animation="pulse">
          <div className="complex-card">
            스크롤 + 호버 + 클릭 애니메이션
          </div>
        </RaniClick>
      </RaniHover>
    </RaniOnView>
  );
}
```

### animated 요소들의 조합

```tsx
import { animated, RaniHover } from 'rani';

function AnimatedCombo() {
  return (
    <animated.section animation="fadeInUp" delay={100}>
      <animated.h2 animation="slideInLeft" delay={200}>
        제목
      </animated.h2>
      
      <RaniHover animation="scale">
        <animated.div className="card">
          <animated.p animation="fadeIn" delay={300}>
            설명 텍스트
          </animated.p>
        </animated.div>
      </RaniHover>
    </animated.section>
  );
}
```

## 📱 실제 프로젝트 예제

### 1. 제품 카드 (animated.div 방식)

```tsx
import { animated, RaniHover, RaniClick } from 'rani';

const ProductCard = ({ product }) => {
  return (
    <animated.div animation="fadeInUp" delay={100}>
      <RaniHover animation="lift">
        <div className="product-card">
          <animated.img 
            src={product.image} 
            alt={product.name}
            animation="scaleIn"
            delay={200}
          />
          <animated.h3 animation="slideInLeft" delay={300}>
            {product.name}
          </animated.h3>
          <animated.p animation="fadeIn" delay={400}>
            {product.price}
          </animated.p>
          <RaniClick animation="pulse">
            <button onClick={() => addToCart(product)}>
              장바구니에 추가
            </button>
          </RaniClick>
        </div>
      </RaniHover>
    </animated.div>
  );
};
```

### 2. 히어로 섹션

```tsx
import { RaniStagger, animated } from 'rani';

const HeroSection = () => {
  return (
    <animated.section className="hero" animation="fadeIn">
      <RaniStagger 
        staggerDelay={200}
        animation="slideInUp"
        duration={800}
      >
        <animated.h1>우리 사이트에 오신 것을 환영합니다</animated.h1>
        <animated.p>놀라운 제품들이 여러분을 기다립니다</animated.p>
        <animated.button className="cta-button">시작하기</animated.button>
      </RaniStagger>
    </animated.section>
  );
};
```

### 3. 네비게이션 메뉴

```tsx
import { animated, RaniHover } from 'rani';

const Navigation = () => {
  const menuItems = ['홈', '제품', '서비스', '연락처'];
  
  return (
    <animated.nav animation="slideInDown">
      <animated.ul style={{ display: 'flex', listStyle: 'none' }}>
        {menuItems.map((item, index) => (
          <animated.li 
            key={item}
            animation="fadeInUp"
            delay={index * 100}
          >
            <RaniHover animation="scale">
              <a href={`/${item.toLowerCase()}`}>{item}</a>
            </RaniHover>
          </animated.li>
        ))}
      </animated.ul>
    </animated.nav>
  );
};
```

### 4. 카드 그리드 레이아웃

```tsx
import { animated, RaniStagger, RaniHover } from 'rani';

const CardGrid = ({ cards }) => {
  return (
    <animated.section className="card-grid" animation="fadeInUp">
      <RaniStagger staggerDelay={150} animation="scaleIn">
        {cards.map((card, index) => (
          <RaniHover key={card.id} animation="lift">
            <animated.article className="card">
              <animated.img 
                src={card.image} 
                animation="zoomIn"
                delay={100}
              />
              <animated.div className="card-content">
                <animated.h3 animation="slideInUp" delay={200}>
                  {card.title}
                </animated.h3>
                <animated.p animation="fadeIn" delay={300}>
                  {card.description}
                </animated.p>
              </animated.div>
            </animated.article>
          </RaniHover>
        ))}
      </RaniStagger>
    </animated.section>
  );
};
```

## 🎭 사용 가능한 애니메이션 목록

### 스크롤 애니메이션 (animated.* / RaniOnView)
- `fadeIn`, `fadeInUp`, `fadeInDown`, `fadeInLeft`, `fadeInRight`
- `slideInUp`, `slideInDown`, `slideInLeft`, `slideInRight`
- `scaleIn`, `scaleInUp`, `zoomIn`
- `rotateIn`, `rotateInLeft`, `rotateInRight`
- `bounceIn`, `bounceInUp`
- `flipInX`, `flipInY`
- `lightSpeedIn`, `rollIn`

### 호버 애니메이션 (RaniHover)
- `scale`, `scaleDown`, `lift`, `rotate`, `skew`
- `glow`, `bounce`, `wobble`

### 클릭 애니메이션 (RaniClick)
- `pulse`, `ripple`, `shake`

## 🌟 animated 요소 전체 목록

```tsx
import { animated } from 'rani';

// 모든 animated 요소들
<animated.div />         // 가장 많이 사용
<animated.span />        // 인라인 텍스트
<animated.section />     // 섹션 구분
<animated.article />     // 아티클/카드
<animated.header />      // 헤더 영역
<animated.footer />      // 푸터 영역
<animated.main />        // 메인 콘텐츠
<animated.nav />         // 네비게이션
<animated.h1 />          // 제목들
<animated.h2 />
<animated.h3 />
<animated.h4 />
<animated.h5 />
<animated.h6 />
<animated.p />           // 문단
<animated.a />           // 링크
<animated.button />      // 버튼
<animated.img />         // 이미지
<animated.ul />          // 순서없는 리스트
<animated.ol />          // 순서있는 리스트
<animated.li />          // 리스트 아이템
```

## 💡 팁과 권장사항

### 1. animated.div vs Rani 컴포넌트 선택 가이드

**animated.div를 사용하세요 (권장):**
- 단순한 스크롤 애니메이션이 필요할 때
- HTML 시맨틱을 유지하고 싶을 때
- 더 깔끔하고 직관적인 코드를 원할 때

```tsx
// 권장 방식 ✅
<animated.h1 animation="fadeInUp">제목</animated.h1>
<animated.p animation="slideInLeft">설명</animated.p>
```

**Rani 컴포넌트를 사용하세요:**
- 호버나 클릭 애니메이션이 필요할 때
- 복잡한 상호작용이 필요할 때
- 순차 애니메이션을 구현할 때

```tsx
// 적절한 사용 ✅
<RaniHover animation="scale">
  <animated.div>호버 효과가 있는 요소</animated.div>
</RaniHover>
```

### 2. 성능 최적화
- 많은 요소에 애니메이션을 적용할 때는 `transform`과 `opacity`만 사용하세요
- `will-change` 속성이 자동으로 적용됩니다
- 애니메이션이 끝나면 `will-change`가 자동으로 제거됩니다

### 3. 접근성
- 항상 `useReducedMotion` 훅을 고려하세요
- 사용자가 모션 감소를 선호하면 애니메이션이 단순화됩니다

### 4. 타이밍 가이드
- **빠른 피드백**: 200-300ms (버튼 클릭, 호버)
- **일반적인 전환**: 400-600ms (페이지 요소 등장)
- **큰 변화**: 800-1200ms (페이지 전환, 복잡한 애니메이션)

### 5. 일관성 유지
- 프로젝트 전체에서 일관된 duration과 easing을 사용하세요
- `RaniProvider`로 전역 설정을 관리하세요

```tsx
<RaniProvider globalDuration={600} globalEasing="easeOutQuart">
  <App />
</RaniProvider>
```

## 🚀 배포하기

패키지를 npm에 배포하려면:

```bash
# 빌드
npm run build

# 테스트
npm test

# 배포 (npm 계정 필요)
npm publish
```

## 🤝 기여하기

1. 저장소를 포크하세요
2. 기능 브랜치를 생성하세요 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋하세요 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시하세요 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성하세요

## 📄 라이선스

MIT © Rani Animation Library

---

**Rani** - 간단하고 강력한 React 애니메이션 라이브러리 🎪✨
