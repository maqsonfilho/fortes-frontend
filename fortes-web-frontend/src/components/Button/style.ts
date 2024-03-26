import { styled } from 'styled-components';

export const ButtonContainer = styled.button`
  font-size: ${({ theme }) => theme.fontSizes[1]};
  border-radius: ${({ theme }) => theme.radius[2]};
  display: flex;
  width: 100%;
  padding: ${({ theme }) => theme.space[4]};
  justify-content: center;
  align-items: center;
  font-weight: ${({ theme }) => theme.weight[7]};
  border: none;
  cursor: pointer;

  &.ui-button--primary {
    background: ${({ theme }) => theme.colors.gray100};
    color: ${({ theme }) => theme.colors.opacity500};
    border-radius: ${({ theme }) => theme.radius[2]};
    box-shadow: ${({ theme }) => theme.shadows[1]};

    &:hover {
      background: ${({ theme }) => theme.colors.secondary};
    }

    &:disabled {
      background: ${({ theme }) => theme.colors.gray200};
      border-color: ${({ theme }) => theme.colors.gray200};
      cursor: not-allowed;
      color: ${({ theme }) => theme.colors.opacity500};
    }
  }

  &.ui-button--secondary {
    background: ${({ theme }) => theme.colors.gray100};
    color: ${({ theme }) => theme.colors.opacity500};
    border-radius: ${({ theme }) => theme.radius[2]};
    box-shadow: ${({ theme }) => theme.shadows[1]};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.gray100};
  }
  &:disabled {
    background: ${({ theme }) => theme.colors.gray200};
    border-color: ${({ theme }) => theme.colors.gray500};
    cursor: not-allowed;
    color: ${({ theme }) => theme.colors.opacity500};
  }
`;
