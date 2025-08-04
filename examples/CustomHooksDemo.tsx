import React from 'react';
import { 
  AnimateOnView, 
  useReducedMotion, 
  useIntersectionObserver 
} from 'react-smooth-animations';

// 1. useReducedMotion 훅 사용 예제
function AccessibleComponent() {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <AnimateOnView 
      animation={prefersReducedMotion ? 'fadeIn' : 'bounceInUp'}
      duration={prefersReducedMotion ? 200 : 800}
    >
      <div style={{ 
        padding: '2rem', 
        background: '#f0f8ff', 
        borderRadius: '8px',
        margin: '1rem 0'
      }}>
        <h3>접근성을 고려한 애니메이션</h3>
        <p>
          {prefersReducedMotion 
            ? '사용자가 모션 감소를 선호합니다 - 간단한 페이드만 사용' 
            : '일반 애니메이션 - 바운스 효과 사용'
          }
        </p>
      </div>
    </AnimateOnView>
  );
}

// 2. useIntersectionObserver 훅 직접 사용 예제
function CustomScrollComponent() {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: false  // 반복 애니메이션
  });

  return (
    <div 
      ref={elementRef}
      style={{
        padding: '2rem',
        background: isIntersecting ? '#e8f5e8' : '#f5f5f5',
        borderRadius: '8px',
        margin: '1rem 0',
        transform: isIntersecting ? 'scale(1.02)' : 'scale(1)',
        transition: 'all 0.5s ease',
        border: isIntersecting ? '2px solid #4CAF50' : '2px solid #ccc'
      }}
    >
      <h3>커스텀 스크롤 감지 컴포넌트</h3>
      <p>
        현재 상태: <strong>{isIntersecting ? '화면에 보임' : '화면에서 숨김'}</strong>
      </p>
      <p>30% 이상 보일 때 색상이 바뀝니다. 스크롤해보세요!</p>
    </div>
  );
}

// 3. 두 훅을 함께 사용하는 예제
function SmartAnimatedCard({ children, title }) {
  const prefersReducedMotion = useReducedMotion();
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true
  });

  // 접근성과 스크롤 감지를 모두 고려한 스타일
  const cardStyle = {
    padding: '2rem',
    background: 'white',
    borderRadius: '12px',
    boxShadow: isIntersecting 
      ? '0 10px 30px rgba(0,0,0,0.15)' 
      : '0 2px 10px rgba(0,0,0,0.08)',
    transform: isIntersecting 
      ? (prefersReducedMotion ? 'none' : 'translateY(0px)')
      : (prefersReducedMotion ? 'none' : 'translateY(20px)'),
    opacity: isIntersecting ? 1 : 0.7,
    transition: prefersReducedMotion 
      ? 'opacity 0.2s ease' 
      : 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    margin: '1rem 0'
  };

  return (
    <div ref={elementRef} style={cardStyle}>
      <h3 style={{ color: '#333', marginBottom: '1rem' }}>{title}</h3>
      {children}
    </div>
  );
}

// 4. 실제 사용 데모
function CustomHooksDemo() {
  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '2rem',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        🎣 커스텀 훅 사용 예제
      </h1>

      <AccessibleComponent />
      
      <CustomScrollComponent />
      
      <SmartAnimatedCard title="스마트 카드 1">
        <p>이 카드는 useReducedMotion과 useIntersectionObserver를 모두 사용합니다.</p>
        <p>사용자의 접근성 설정을 자동으로 감지하고 적절한 애니메이션을 적용합니다.</p>
      </SmartAnimatedCard>
      
      <SmartAnimatedCard title="스마트 카드 2">
        <p>각 카드는 20% 이상 화면에 보일 때 애니메이션이 시작됩니다.</p>
        <p>모션 감소 설정이 활성화된 경우 변형 애니메이션은 비활성화되고 투명도만 변경됩니다.</p>
      </SmartAnimatedCard>

      <div style={{ 
        background: '#f8f9fa', 
        padding: '2rem', 
        borderRadius: '8px',
        marginTop: '2rem' 
      }}>
        <h3>💡 테스트 방법</h3>
        <ol>
          <li><strong>스크롤 테스트:</strong> 페이지를 위아래로 스크롤해보세요</li>
          <li><strong>접근성 테스트:</strong> 시스템 설정에서 "모션 감소" 옵션을 켜고 새로고침해보세요</li>
          <li><strong>반응형 테스트:</strong> 창 크기를 조절해보세요</li>
        </ol>
      </div>
      
      {/* 스크롤을 위한 추가 공간 */}
      <div style={{ height: '100vh', background: '#f0f0f0', marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>
          스크롤 테스트를 위한 공간 📜
        </p>
      </div>
    </div>
  );
}

export default CustomHooksDemo;
