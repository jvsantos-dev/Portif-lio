import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Importe os ícones das redes sociais

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <section>
        {/*Informações para contato */}
        <div>

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
      </section>
    </footer>
  );
};

export default Footer;
