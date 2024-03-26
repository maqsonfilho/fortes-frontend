import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 100%;
  max-height: 100%;
  justify-content: flex-end;
  padding-right: ${({ theme }) => theme.space[4]};
`;

export const SwitchWrapper = styled.label``;

export const Input = styled.input`
  visibility: hidden;
`;

export const Slider = styled.span<{ checked: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: ${({ theme }) => theme.space[10]};
  height: ${({ theme }) => theme.space[5]};
  background-color: ${(props) => (props.checked ? props.theme.colors.secondary : props.theme.colors.secondary)};
  border-radius: ${({ theme }) => theme.space[4]};
  box-shadow: ${({ theme }) => theme.shadows[2]};
  transition:
    background-color 0.9s,
    transform 0.9s;

  &:before {
    content: '';
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ theme }) => theme.space[4]};
    height: ${({ theme }) => theme.space[4]};
    margin-left: ${({ theme }) => theme.space[1]};
    background-color: ${({ theme }) => theme.colors.gray100};
    box-shadow: ${({ theme }) => theme.shadows[2]};
    border-radius: 50%;
    transition:
      left 0.8s,
      transform 0.4s;
    transform: ${(props) => (props.checked ? 'translateX(100%)' : 'translateX(0%)')};
  }
`;
