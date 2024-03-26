import { ChangeEventHandler } from 'react';
import { OwnProps as InputRootProps, InputType } from './input-root';

export type Value = string | number;
export interface OwnProps {
  maxLength?: number;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: InputType;
  value?: Value;
}

export type Props = InputRootProps & OwnProps;
