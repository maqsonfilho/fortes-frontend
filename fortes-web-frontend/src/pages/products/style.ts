import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TitleProduct = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[4]};
  font-weight: ${({ theme }) => theme.weight[5]};
`;

export const ContentButtonProduct = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const LinkNewProduct = styled(Link)`
  text-decoration: none;
`;

export const ContainerNewProduct = styled.div`
  border-radius: ${({ theme }) => theme.radius[1]};
  box-shadow: ${({ theme }) => theme.shadows[1]};
  padding: ${({ theme }) => theme.space[5]};
`;

export const ContentNewProduct = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  padding: ${({ theme }) => theme.space[5]};
`;

export const ButtonContainer = styled.div`
  width: 200px;
  margin: 15px;
`;
