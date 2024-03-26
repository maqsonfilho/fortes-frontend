import styled, { keyframes } from 'styled-components';
import { Props } from '~/@types/components/input-root';

export const Content = styled.div` //Rename to InputRootContent
  position: relative;
`;

export const InputContent = styled.div<Props>`  //Rename to InputRootInputContent
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray100};
  border: 1px solid ${({ theme }) => theme.colors.opacity200};
  border-radius: ${({ theme }) => theme.radius[1]};
  display: flex;
  justify-content: space-between;
  outline: 2px solid transparent;
  position: relative;
  min-height: ${({ theme }) => theme.space[9]};
  padding-right: ${({ theme, type }) => (type === 'select' ? 0 : theme.space[2])};

  ${({ type, theme }) =>
    type !== 'email' &&
    type !== 'password' &&
    `
    &:focus-within {
      outline-color: none;
      border: 1px solid ${theme.colors.primary};
    }
  `}

  ${({ disabled, theme }) =>
    disabled &&
    `
    background-color: ${theme.colors.gray100};
    border: 1px solid ${theme.colors.gray200};
    cursor: not-allowed;
    opacity: 0.9;

    &:focus-within {
      outline-color: transparent;
    }
  `}
  
${({ type }) =>
    type === 'select' &&
    `
    padding-right: 0px;
  `}

${({ type, theme }) =>
    (type === 'email' || type === 'password') &&
    `
    border-radius: ${theme.radius[2]};
    border: 1px solid ${theme.colors.opacity400};
    height: 48px;

  `}
`;

export const InputContentError = styled(InputContent)<Props>`
  border: 1px solid ${({ theme }) => theme.colors.error};
`;

export const Icon = styled.label<Props>` //Rename to InputRootIcon
  align-items: center;
  color: ${({ theme }) => theme.colors.gray300};
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;

  &:before {
    content: '';
    height: 70%;
    left: -1px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
  }
`;

const moveDown = keyframes`
  0% {
    opacity: 0;
    top: 0;
    visibility: hidden;
  }
  100% {
    opacity: 1;
    top: 100%;
    visibility: visible;
  }
`;

export const Error = styled.label<Props>`
  animation: ${moveDown} 200ms;
  animation-fill-mode: forwards;
  color: ${({ theme }) => theme.colors.error};
  left: 0;
  margin-top: 0;
  opacity: 0;
  padding: ${({ theme }) => theme.space[1]};
  position: absolute;
  top: 0;
  visibility: hidden;
  width: 100%;
  z-index: 99999;
`;

export const Root = styled.div<Props>`
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
  font-size: ${({ theme }) => theme.fontSizes[1]};
`;
