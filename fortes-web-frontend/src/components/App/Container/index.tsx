import styled from 'styled-components';
import { AppRoutes } from '~/routes';

interface ContainerProps {
    isOpen: boolean;
  }

const Container = styled.div<ContainerProps>`
  flex: 1; 
  padding: 20px;
  margin-top: 57px;
  margin-left: ${({ isOpen }) => (isOpen ? '250px' : '50px')};
  transition: margin-left 0.3s ease;
`;

const ContentContainer: React.FC<ContainerProps> = ({ isOpen }) => {
  return (
      <Container isOpen={isOpen}>
        <AppRoutes>
        </AppRoutes>
      </Container>
  );
};

export default ContentContainer;