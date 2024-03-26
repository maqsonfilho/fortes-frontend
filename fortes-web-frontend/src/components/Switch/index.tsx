import { FC } from 'react';
import { Container, Input, Slider, SwitchWrapper } from './style';
import { Props } from '~/@types/components/switch';

export const Switch: FC<Props> = ({ checked, onChange }) => {
  return (
    <Container>
      <SwitchWrapper>
        <Input type="checkbox" checked={checked} onChange={() => onChange} />
        <Slider checked={checked} />
      </SwitchWrapper>
    </Container>
  );
};
