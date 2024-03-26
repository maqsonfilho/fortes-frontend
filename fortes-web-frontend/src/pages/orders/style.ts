import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TitleOrder = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[4]};
  font-weight: ${({ theme }) => theme.weight[5]};
`;

export const ContentButtonOrder = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const LinkNewOrder = styled(Link)`
  text-decoration: none;
`;

export const ContainerNewOrder = styled.div`
  border-radius: ${({ theme }) => theme.radius[1]};
  box-shadow: ${({ theme }) => theme.shadows[1]};
  padding: ${({ theme }) => theme.space[5]};
`;

export const ContentNewOrder = styled.form`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  padding: ${({ theme }) => theme.space[5]};
`;

export const ButtonContainer = styled.div`
  margin: 15px;
  width: 200px;
`;
