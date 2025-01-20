import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <section className="min-h-screen bg-gray-100 p-6">
      {/* Título principal */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Bem-vindo à Solução Meteorológica</h1>
        <p className="text-xl text-gray-600 mt-4">Explore as melhores soluções para monitoramento climático e previsão do tempo.</p>
      </header>

      {/* Texto sobre o tema */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-700">Sobre o Tema</h2>
        <p className="text-lg text-gray-600 mt-4">
          Este projeto visa fornecer soluções inovadoras para monitoramento climático, previsão do tempo e
          análise de dados meteorológicos. Utilizando as mais recentes tecnologias, oferecemos uma plataforma
          para acompanhar o clima em tempo real e prever eventos climáticos.
        </p>
      </div>

      {/* Seção Sobre Mim */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-700">Sobre Mim</h2>
        <p className="text-lg text-gray-600 mt-4">
          Sou desenvolvedor e analista de dados apaixonado por soluções eficientes e inovação tecnológica. 
          Minha principal motivação é otimizar processos e criar soluções automatizadas que agreguem valor 
          aos negócios. 
        </p>
        <p className="text-lg text-gray-600 mt-4">
          Com experiência em **Python**, **Excel**, **SQL** e **Power BI**, busco sempre aplicar meu conhecimento 
          para resolver problemas complexos através de automação e análise de dados. Acredito que a tecnologia pode 
          transformar desafios em oportunidades, e é isso que me move a cada novo projeto.
        </p>
        <p className="text-lg text-gray-600 mt-4">
          Em meus projetos, tenho utilizado essas ferramentas para criar soluções que melhoram a eficiência operacional, 
          otimizam fluxos de trabalho e proporcionam insights valiosos para as equipes de decisão. Além disso, estou sempre 
          em busca de aprimorar meus conhecimentos e me manter atualizado com as tendências e inovações tecnológicas.
        </p>
        <p className="text-lg text-gray-600 mt-4">
          Se você busca transformar dados em insights ou melhorar processos através de automação, fique à vontade para 
          explorar meu portfólio e entrar em contato. Vamos conversar sobre como posso ajudar a sua empresa a alcançar 
          seus objetivos de forma mais eficiente.
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
