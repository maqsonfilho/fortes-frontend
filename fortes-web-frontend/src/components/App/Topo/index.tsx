import { menuOutline } from 'ionicons/icons';
import styled from 'styled-components';
import { Icon } from '../Sidebar/style';

const TopoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f3f3f3;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const HamburgerButton = styled.button`
  background-color: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
`;

const Logo = styled.div`
  font-size: large;
  font-weight: bold;
  color: #3F3F3F;
`;

const OptionsContainer = styled.div`
  /* Estilos do container das opções */
`;

export const Topo = ({ onHamburguerClick }: { onHamburguerClick: () => void }) => {
  return (
<TopoContainer>
      <HamburgerButton onClick={onHamburguerClick}>
      <Icon icon={menuOutline} />
      </HamburgerButton>
      <Logo>Logo</Logo>
      <OptionsContainer>
        {/* Adicione as opções de usuário aqui */}
      </OptionsContainer>
    </TopoContainer>
  );
};