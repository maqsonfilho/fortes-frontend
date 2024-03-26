import { useState } from 'react';
import { Topo } from './Topo'; // Importe o componente Topo
import { Sidebar } from './Sidebar'; // Importe o componente Sidebar
import ContentContainer from './Container';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Topo onHamburguerClick={toggleSidebar} />
      <div style={{ display: 'flex' }}>
        <Sidebar isOpen={sidebarOpen} onHamburgerClick={toggleSidebar} />
        <ContentContainer isOpen={sidebarOpen} />
      </div>
    </>
  );
}

export default App;
