import { Link } from 'react-router-dom';
import '../css/GlobalStyle.jsx'; // Certifique-se de importar o CSS para o fundo das estrelas

const Home = () => {
  return (
    <section className="min-h-screen bg-black text-white p-6 relative">
      {/* Título principal */}
      <header className="text-center mb-12 relative z-10">
        <h1 className="text-4xl font-bold">Olá, eu sou o [Seu Nome]</h1>
        <p className="text-xl mt-4">Desenvolvedor focado em ciência de dados e BI. Busco integrar ferramentas analíticas para criar soluções impactantes no mundo digital.</p>
      </header>

      {/* Seção Sobre Mim */}
      <div className="text-center mb-12 relative z-10">
        <p className="text-lg mt-4">
          Atualmente, estou trabalhando com Python, SQL e Power BI para otimizar processos e transformar dados em soluções práticas e eficientes. Com um olhar analítico, busco sempre o aperfeiçoamento contínuo e acredito que a inovação surge da interseção entre dados e criatividade.
        </p>
      </div>

      {/* Link para o portfólio ou página de contato */}
      <div className="text-center mt-8 relative z-10">
        <Link to="/contato" className="text-lg text-blue-600 underline">Entre em contato</Link>
      </div>
    </section>
  );
};

export default Home;
