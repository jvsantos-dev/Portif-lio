import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <section className="mt-30">
        {/* Informações para contato */}
        <div className="text-center">
          <p className="text-3xl font-bold mb-6">Contato</p>
        </div>
        {/* Rodapé inferior com ícones das redes sociais */}
        <div className="pt-6 text-center">
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
        </div>
      </section>
    </footer>
  );
};

export default Footer;
