import { Button, Table } from 'antd';
import styled from 'styled-components';

export const DataTable = styled(Table)`
  cursor: pointer;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows[1]};
  padding: ${({ theme }) => theme.space[1]};
  border-radius: ${({ theme }) => theme.radius[2]};
`;

export const TablePageButton = styled(Button)`
  
`;
