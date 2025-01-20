import { FaLinkedin, FaGithub } from 'react-icons/fa';  // Importando os ícones
import eu_hoje from '../assets/eu_hoje.png';

const Empresa = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Seção sobre a Empresa */}
      <div className="min-h-screen flex flex-col justify-center px-6 py-16">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Sobre a Nossa Empresa</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Nossa empresa é uma plataforma inovadora que visa otimizar o uso de energia renovável em empresas e residências. 
            Acreditamos que a tecnologia pode ser um aliado poderoso na redução de custos e na promoção da sustentabilidade.
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Com uma equipe apaixonada e uma abordagem focada em inovação, buscamos oferecer soluções inteligentes para 
            maximizar o uso da energia solar, eólica e de outras fontes renováveis, ajudando nossos clientes a reduzir a dependência 
            de fontes não renováveis e a minimizar sua pegada de carbono.
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Nosso objetivo é liderar a transformação no setor de energia renovável, oferecendo soluções acessíveis e eficientes para todos.
          </p>
        </div>
      </div>

      {/* Seção Sobre o Dono (Você) */}
      <div className="min-h-screen flex flex-col justify-center px-6 py-16 bg-white">
        <div className="max-w-screen-xl mx-auto flex items-center justify-center gap-12">
          {/* Imagem vertical */}
          <div className="w-48 h-48 rounded-full overflow-hidden">
            <img
              src={eu_hoje} // Aqui você usa a importação da imagem corretamente
              alt="Seu nome"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Texto sobre o dono */}
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Sobre Mim</h2>
            <p className="text-lg text-gray-600 mb-6">
              Olá, sou João Victor, o fundador desta plataforma. Sempre fui apaixonado por tecnologia e sustentabilidade, e 
              foi essa paixão que me levou a criar soluções para otimizar o uso de energia renovável.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Com um background em [sua área de estudo ou experiência], decidi usar minha experiência para enfrentar os desafios 
              que muitas empresas e residências enfrentam ao tentar gerenciar e armazenar energia renovável de forma eficiente.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Meu objetivo é ajudar meus clientes a aproveitar ao máximo o potencial das energias renováveis, reduzir seus custos 
              com energia e contribuir para um futuro mais sustentável. Acredito que a inovação é o caminho para um mundo melhor, 
              e estou comprometido em trazer soluções eficientes para todos.
            </p>

            {/* Links para LinkedIn e GitHub */}
            <div className="flex justify-center sm:justify-start gap-6 mt-8">
              <a
                href="https://www.linkedin.com/in/joão-victor-oliveira-dos-santos-1179b32b6"  // Corrija o link para o seu LinkedIn
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-lg flex items-center gap-2"
              >
                <FaLinkedin className="text-xl" /> LinkedIn
              </a>
              <a
                href="https://github.com/jvsantos-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-600 text-lg flex items-center gap-2"
              >
                <FaGithub className="text-xl" /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empresa;
