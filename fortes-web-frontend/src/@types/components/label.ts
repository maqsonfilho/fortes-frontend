import { PropsWithChildren } from 'react';
import { DefaultTheme } from 'styled-components';
export interface Props extends PropsWithChildren {
  hasError?: boolean;
  theme?: DefaultTheme;
  type?: 'flag';
  position?: 'start' | 'center' | 'end';
}
