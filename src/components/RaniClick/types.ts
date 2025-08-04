import { CSSProperties, ReactNode } from 'react';
import { ClickPresetType, CustomClickAnimation } from '../../types';

export interface RaniClickProps {
  children: ReactNode;
  animation?: ClickPresetType;
  customAnimation?: CustomClickAnimation;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  className?: string;
  style?: CSSProperties;
}
