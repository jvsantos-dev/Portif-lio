import { Link } from 'react-router-dom';
import logo from '../assets/1.png'; // Importe o logo da sua empresa
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Importe os ícones das redes sociais

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="mx-auto max-w-screen-xl px-6">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4">
          {/* Coluna 1: Logo e informações */}
          <div>
            <img src={logo} alt="Logo" className="h-8 mb-4" />
            <p className="text-sm text-gray-400">Gerenciando o futuro da energia com sabedoria.</p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-gray-400 hover:text-white">Sobre nós</Link></li>
              <li><Link to="/services" className="text-sm text-gray-400 hover:text-white">Serviços</Link></li>
              <li><Link to="/pricing" className="text-sm text-gray-400 hover:text-white">Preços</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-400 hover:text-white">Contato</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Suporte */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-sm text-gray-400 hover:text-white">FAQ</Link></li>
              <li><Link to="/terms" className="text-sm text-gray-400 hover:text-white">Termos de Serviço</Link></li>
              <li><Link to="/privacy" className="text-sm text-gray-400 hover:text-white">Política de Privacidade</Link></li>
              <li><Link to="/help" className="text-sm text-gray-400 hover:text-white">Ajuda</Link></li>
            </ul>
          </div>

          {/* Coluna 4: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Assine nossa Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">Receba atualizações, promoções e novidades diretamente no seu e-mail.</p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
              >
                Assinar
              </button>
            </form>
          </div>
        </div>

        {/* Rodapé inferior com ícones das redes sociais */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-white text-2xl hover:text-indigo-600 transition duration-300" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white text-2xl hover:text-indigo-600 transition duration-300" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white text-2xl hover:text-indigo-600 transition duration-300" />
            </a>
            <a href="mailto:contato@empresa.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="text-white text-2xl hover:text-indigo-600 transition duration-300" />
            </a>
          </div>
          <p className="text-sm text-gray-400">&copy; 2024 Sua Empresa. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
