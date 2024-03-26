export type ButtonColor = 'primary' | 'secondary';
export interface Props {
  color?: ButtonColor;
  disabled?: boolean;
  label?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  size?: 'small' | 'medium' | 'large';
  style?: React.CSSProperties;
  loading?: boolean;
  type?: string;
}
