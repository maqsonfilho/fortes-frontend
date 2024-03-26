import { SyncOutlined } from '@ant-design/icons';
import { FC } from 'react';
import { Props } from '../../@types/components/button';
import { ButtonContainer } from './style';

export const Button: FC<Props> = ({ color, disabled, onClick, style, label, loading }) => {
  return (
    <>
      <ButtonContainer
        onClick={onClick}
        style={style}
        className={`ui-button ui-button--${color} ${loading ? 'ui-button--loading' : ''}`}
        disabled={disabled}
      >
        {loading ? <SyncOutlined spin style={{ fontSize: '16px' }} /> : label}
      </ButtonContainer>
    </>
  );
};

export default Button;
