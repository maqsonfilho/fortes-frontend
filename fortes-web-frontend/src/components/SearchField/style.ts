import { SearchOutlined } from '@ant-design/icons';
import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  border: none;
  flex: 1;
  outline: none;
  padding: 2px 8px;
  border-radius: ${({ theme }) => theme.radius[1]};
  color: ${({ theme }) => theme.colors.gray500};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  height: ${({ theme }) => theme.space[9]};
`;

export const SearchIcon = styled(SearchOutlined)`
  margin-left: ${({ theme }) => theme.space[2]};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes[4]};
`;
