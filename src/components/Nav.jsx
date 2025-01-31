import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Estado para o menu mobile
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="bg-black text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        {/* Botão para abrir o menu mobile */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={toggleMobileMenu} // Alterna o menu mobile
          >
            <span className="sr-only">Open main menu</span>
            <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        {/* Menu Desktop */}
        <div className="hidden lg:flex lg:gap-x-12 mx-auto">
          <div className="flex space-x-12">  {/* Espaçamento entre os itens */}
            <Link to="/sobre" className="text-sm font-semibold text-white hover:text-indigo-600">Projetos</Link>
            <Link to="/freelancer" className="text-sm font-semibold text-white hover:text-indigo-600">Freelancer</Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden`} role="dialog" aria-modal="true">
        <div className="fixed inset-0 z-10 bg-black opacity-50"></div>
        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Wise Energy</span>
              <img className="h-8 w-auto" src="{}" alt="Wise Energy Logo" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={toggleMobileMenu} // Fecha o menu ao clicar
            >
              <span className="sr-only">Close menu</span>
              <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link to="/login" className="-mx-3 block rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-gray-900 hover:bg-gray-50">Log in</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
