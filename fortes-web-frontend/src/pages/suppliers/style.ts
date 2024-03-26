import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TitleSupplier = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[4]};
  font-weight: ${({ theme }) => theme.weight[5]};
`;

export const ContentButtonSupplier = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const LinkNewSupplier = styled(Link)`
  text-decoration: none;
`;

export const ContainerNewSupplier = styled.div`
  border-radius: ${({ theme }) => theme.radius[1]};
  box-shadow: ${({ theme }) => theme.shadows[1]};
  padding: ${({ theme }) => theme.space[5]};
`;

export const ContentNewSupplier = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

export const ButtonContainer = styled.div`
  width: 200px;
  margin-top: 30px;
`;
