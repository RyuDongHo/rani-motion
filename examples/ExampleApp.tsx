import React from 'react';
import { 
  AnimateOnView, 
  HoverAnimate, 
  ClickAnimate, 
  StaggerChildren,
  AnimationProvider,
  CustomAnimation,
  CustomHoverAnimation 
} from 'react-smooth-animations';

// 커스텀 애니메이션 예제
const customFadeRotate: CustomAnimation = {
  initial: { 
    opacity: 0, 
    transform: 'translateY(50px) rotate(-15deg) scale(0.9)' 
  },
  animate: { 
    opacity: 1, 
    transform: 'translateY(0px) rotate(0deg) scale(1)' 
  }
};

const glowHover: CustomHoverAnimation = {
  default: { 
    transform: 'scale(1)',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)' 
  },
  hover: { 
    transform: 'scale(1.05)',
    boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)' 
  }
};

const ExampleApp: React.FC = () => {
  const items = [
    'First Item',
    'Second Item', 
    'Third Item',
    'Fourth Item'
  ];

  return (
    <AnimationProvider globalDuration={800} globalEasing="easeOutBounce">
      <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        
        {/* 기본 스크롤 애니메이션 */}
        <AnimateOnView animation="fadeInUp" duration={600}>
          <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
            React Smooth Animations Demo
          </h1>
        </AnimateOnView>

        {/* 커스텀 애니메이션 */}
        <AnimateOnView customAnimation={customFadeRotate} duration={1000} delay={200}>
          <div style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '2rem',
            borderRadius: '10px',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            <h2>Custom Animation Example</h2>
            <p>This uses a custom fade + rotate + scale animation</p>
          </div>
        </AnimateOnView>

        {/* Stagger 애니메이션 */}
        <AnimateOnView animation="slideInLeft" delay={400}>
          <h3 style={{ marginBottom: '1rem' }}>Stagger Animation:</h3>
        </AnimateOnView>
        
        <StaggerChildren 
          staggerDelay={150} 
          animation="scaleIn"
          duration={600}
          style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}
        >
          {items.map(item => (
            <div key={item} style={{
              background: '#f8f9fa',
              padding: '1rem',
              borderRadius: '8px',
              border: '1px solid #e9ecef',
              textAlign: 'center'
            }}>
              {item}
            </div>
          ))}
        </StaggerChildren>

        {/* 호버 애니메이션 */}
        <AnimateOnView animation="fadeInRight" delay={600}>
          <h3 style={{ marginBottom: '1rem' }}>Hover Animations:</h3>
        </AnimateOnView>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <HoverAnimate animation="scale">
            <div style={{
              background: '#28a745',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>
              Scale Effect
            </div>
          </HoverAnimate>

          <HoverAnimate animation="lift">
            <div style={{
              background: '#007bff',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>
              Lift Effect
            </div>
          </HoverAnimate>

          <HoverAnimate customAnimation={glowHover}>
            <div style={{
              background: '#6f42c1',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>
              Custom Glow
            </div>
          </HoverAnimate>
        </div>

        {/* 클릭 애니메이션 */}
        <AnimateOnView animation="bounceIn" delay={800}>
          <h3 style={{ marginBottom: '1rem' }}>Click Animations:</h3>
        </AnimateOnView>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <ClickAnimate animation="pulse" onClick={() => alert('Pulse clicked!')}>
            <button style={{
              background: '#dc3545',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px'
            }}>
              Pulse Click
            </button>
          </ClickAnimate>

          <ClickAnimate animation="ripple" onClick={() => alert('Ripple clicked!')}>
            <button style={{
              background: '#20c997',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px'
            }}>
              Ripple Effect
            </button>
          </ClickAnimate>

          <ClickAnimate animation="shake" onClick={() => alert('Shake clicked!')}>
            <button style={{
              background: '#fd7e14',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px'
            }}>
              Shake Effect
            </button>
          </ClickAnimate>
        </div>

        {/* 복합 애니메이션 예제 */}
        <AnimateOnView animation="zoomIn" delay={1000}>
          <div style={{
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            color: 'white',
            padding: '2rem',
            borderRadius: '10px',
            textAlign: 'center',
            marginTop: '2rem'
          }}>
            <h3>Complex Animation Example</h3>
            <p>Combining multiple animation components for rich interactions</p>
            
            <HoverAnimate animation="bounce">
              <ClickAnimate animation="pulse">
                <button style={{
                  background: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  border: '2px solid white',
                  padding: '0.8rem 1.5rem',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  marginTop: '1rem'
                }}>
                  Hover + Click Me!
                </button>
              </ClickAnimate>
            </HoverAnimate>
          </div>
        </AnimateOnView>

      </div>
    </AnimationProvider>
  );
};

export default ExampleApp;
