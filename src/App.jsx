import GlobalStyle from "./css/GlobalStyle";  // Importe o GlobalStyle
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle />  {/* Aplica o GlobalStyle que define o fundo das estrelas */}
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
