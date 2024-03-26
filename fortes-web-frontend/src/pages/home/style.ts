import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.colors.primary};
`;
