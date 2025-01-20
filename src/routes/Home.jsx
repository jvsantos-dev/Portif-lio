import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="min-h-screen bg-black text-white p-6">
      {/* Título principal */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Bem-vindo ao meu Portfólio</h1>
        <p className="text-xl mt-4">Desenvolvedor e analista de dados apaixonado por soluções eficientes.</p>
      </header>

      {/* Seção Sobre Mim */}
      <div className="text-center mb-12">
        <p className="text-lg mt-4">
          Sou desenvolvedor e analista de dados com experiência em Python, Excel, SQL e Power BI. 
          Tenho como foco a otimização de processos e a automação de soluções que geram valor para negócios, transformando dados em insights valiosos. Se você busca transformar dados em soluções eficazes, explore meu portfólio e entre em contato para saber como posso ajudar sua empresa a crescer.
        </p>
      </div>

      {/* Link para o portfólio ou página de contato */}
      <div className="text-center mt-8">
        <Link to="/contato" className="text-lg text-blue-600 underline">Entre em contato</Link>
      </div>
    </section>
  );
};

export default Home;
