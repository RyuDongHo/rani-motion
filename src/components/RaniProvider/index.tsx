import React, { createContext, useContext } from 'react';
import { RaniProviderProps, AnimationContextType } from './types';

const RaniContext = createContext<AnimationContextType>({
  globalDuration: 600,
  globalEasing: 'easeOutQuart',
  globalDelay: 0,
  reducedMotion: false
});

export const RaniProvider: React.FC<RaniProviderProps> = ({ 
  children, 
  globalDuration = 600,
  globalEasing = 'easeOutQuart',
  globalDelay = 0,
  reducedMotion = false
}) => {
  const value: AnimationContextType = {
    globalDuration,
    globalEasing,
    globalDelay,
    reducedMotion
  };

  return (
    <RaniContext.Provider value={value}>
      {children}
    </RaniContext.Provider>
  );
};

export const useRaniAnimation = (): AnimationContextType => {
  const context = useContext(RaniContext);
  if (!context) {
    throw new Error('useRaniAnimation must be used within a RaniProvider');
  }
  return context;
};

export default RaniProvider;
