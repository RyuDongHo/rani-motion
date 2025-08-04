import React from 'react';
import { animated, RaniProvider } from '../src';

// animated.div 사용 예제
function AnimatedDemo() {
  return (
    <RaniProvider globalDuration={800}>
      <div style={{ padding: '50px' }}>
        <h1>Rani Animated Components Demo</h1>
        
        {/* animated.div 사용 */}
        <animated.div 
          animation="fadeInUp" 
          duration={600}
          style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#f0f0f0' }}
        >
          <h2>animated.div with fadeInUp</h2>
          <p>This div will fade in and slide up when it comes into view!</p>
        </animated.div>

        {/* animated.section 사용 */}
        <animated.section 
          animation="slideInLeft" 
          duration={800}
          delay={200}
          style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#e0f7fa' }}
        >
          <h3>animated.section with slideInLeft</h3>
          <p>This section slides in from the left with a delay!</p>
        </animated.section>

        {/* animated.h1 사용 */}
        <animated.h1 
          animation="bounceIn"
          duration={1000}
          style={{ color: '#2196f3', textAlign: 'center' }}
        >
          Bouncing Heading!
        </animated.h1>

        {/* animated.p 사용 */}
        <animated.p 
          animation="rotateIn"
          duration={700}
          threshold={0.8}
          style={{ fontSize: '18px', textAlign: 'center', margin: '40px 0' }}
        >
          This paragraph rotates in when 80% is visible
        </animated.p>

        {/* animated.button 사용 */}
        <animated.button
          animation="scaleIn"
          duration={500}
          style={{
            padding: '15px 30px',
            fontSize: '16px',
            backgroundColor: '#4caf50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            display: 'block',
            margin: '20px auto'
          }}
          onClick={() => alert('Animated button clicked!')}
        >
          Click me! (animated.button)
        </animated.button>

        {/* 커스텀 애니메이션 사용 */}
        <animated.div
          customAnimation={{
            initial: { 
              opacity: 0, 
              transform: 'translateX(-100px) rotate(-90deg)' 
            },
            animate: { 
              opacity: 1, 
              transform: 'translateX(0px) rotate(0deg)' 
            }
          }}
          duration={1200}
          style={{
            padding: '20px',
            backgroundColor: '#ffeb3b',
            borderRadius: '10px',
            textAlign: 'center',
            margin: '30px 0'
          }}
        >
          <h3>Custom Animation</h3>
          <p>This uses a custom slide + rotate animation!</p>
        </animated.div>

        {/* 리스트 아이템들 */}
        <animated.ul style={{ listStyle: 'none', padding: 0 }}>
          {['First Item', 'Second Item', 'Third Item'].map((item, index) => (
            <animated.li
              key={item}
              animation="fadeInRight"
              duration={500}
              delay={index * 150}
              style={{
                padding: '10px',
                margin: '5px 0',
                backgroundColor: '#f3e5f5',
                borderRadius: '5px',
                borderLeft: '4px solid #9c27b0'
              }}
            >
              {item}
            </animated.li>
          ))}
        </animated.ul>
      </div>
    </RaniProvider>
  );
}

export default AnimatedDemo;
