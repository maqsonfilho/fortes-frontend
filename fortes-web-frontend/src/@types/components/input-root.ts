import { KeyboardEvent, PropsWithChildren } from 'react';
import { DefaultTheme } from 'styled-components';

export type InputType = 'email' | 'password' | 'search' | 'tel' | 'text' | 'number' | 'select' | 'file';
export interface OwnProps {
  className?: string;
  disabled?: boolean;
  errorDescription?: string;
  hasError?: boolean;
  icon?: string | JSX.Element;
  changeIcon?: string | JSX.Element;
  label?: string;
  theme?: DefaultTheme;
  type?: InputType;
  onIconClick?: React.MouseEventHandler;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
}

export type Props = PropsWithChildren<OwnProps>;
