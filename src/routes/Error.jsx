import error from '../assets/image-error.png';
import { Link } from 'react-router-dom'; // Certifique-se de importar o Link do react-router-dom

const Error = () => {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${error})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="text-center text-white">
          <p className="font-bold text-2xl mb-4">404</p>
          <h1 className="text-6xl mb-4">Página não encontrada</h1>
          <p className="text-xl mb-6">Desculpe, não encontramos pelo que você está procurando.</p>
          
          {/* Link Home com ícone */}
          <Link
            to="/home"
            className="inline-flex items-center text-lg font-semibold text-white bg-blue-500 hover:bg-blue-400 px-6 py-2 rounded-full transition-all duration-200 ease-in-out"
          >
            Ir para Home
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 12l-5 5m0 0l-5-5m5 5V6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;

