import { Props } from '../../@types/components/label';

import { styled } from 'styled-components';

export const LabelContainer = styled.label<Props>`
  font-weight: ${({ theme }) => theme.weight[7]};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  padding-bottom: ${({ theme }) => theme.space[0]};
  display: flex;
  align-items: center;
  justify-content: ${({ position }) => position};

  ${({ hasError, theme }) =>
    hasError &&
    `
    color: ${theme.colors.error};
  `}

  ${({ type, hasError, theme }) =>
    hasError &&
    type === 'flag' &&
    `
    color: ${theme.colors.error};
    border: 1px solid ${theme.colors.error};
    background-color: ${theme.colors.error}; 
    border-radius: ${theme.radius[2]};
    padding: ${theme.space[2]};
  `}
`;
