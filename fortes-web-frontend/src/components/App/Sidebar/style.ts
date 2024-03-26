import { IonIcon } from '@ionic/react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SidebarMenuItems = styled.div``;

export const SidebarItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  text-decoration: none;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  &.active {
    background: rgba(0, 0, 0, 0.04);
  }
`;

export const Icon = styled(IonIcon)`
  font-size: 24px;
  color: #3F3F3F;
  padding: 5px;
`;

export const Span = styled.span`
  font-size: 1.4rem;
  color: #3F3F3F;
  font-weight: 600;
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[4]};
  font-weight: ${({ theme }) => theme.weight[5]};
  padding: 10px 0px 30px 0px;
`;