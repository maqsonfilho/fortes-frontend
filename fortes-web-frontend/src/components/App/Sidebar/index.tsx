import { menuOutline } from 'ionicons/icons';
import styled from 'styled-components';
import { menuItems } from './menuItems';
import { Icon, SidebarItem, SidebarMenuItems, Span } from './style';

interface SidebarProps {
  isOpen: boolean;
  onHamburgerClick: () => void;
}

const SidebarContainer = styled.div<SidebarProps>`
  width: ${(props) => (props.isOpen ? '250px' : '60px')};
  height: 100%;
  background-color: #f3f3f3;
  color: #fff;
  transition: width 0.3s;
  overflow-x: hidden; /* Impede que os itens ultrapassem a largura da sidebar */
  position: fixed;
  top: 0;
  left: 0;
`;

const HamburgerButton = styled.div`
  padding: 10px;
  cursor: pointer;
`;

export const Sidebar = ({ isOpen, onHamburgerClick }: SidebarProps) => {
  return (
    <SidebarContainer isOpen={isOpen} onHamburgerClick={onHamburgerClick}>
      <HamburgerButton onClick={onHamburgerClick}>
        <Icon icon={menuOutline} />
      </HamburgerButton>
      {menuItems.map(({ url, label, icon }) => (
        <SidebarMenuItems key={label}>
          <SidebarItem to={url}>
            <Icon icon={icon} />
            <Span hidden={!isOpen}>{label}</Span>
          </SidebarItem>
        </SidebarMenuItems>
      ))}
    </SidebarContainer>
  );
};
