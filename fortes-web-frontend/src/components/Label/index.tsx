import { FC } from 'react';

import { LabelContainer } from './style';
import { Props } from '../../@types/components/label';

export const Label: FC<Props> = ({ children, hasError, type, position }) => {
  return (
    <LabelContainer position={position} type={type} hasError={hasError}>
      {children}
    </LabelContainer>
  );
};
