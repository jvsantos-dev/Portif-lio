import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Estado para o menu mobile

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        

        {/* Botão para abrir o menu mobile */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={toggleMobileMenu} // Alterna o menu mobile
          >
            <span className="sr-only">Open main menu</span>
            <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        {/* Menu Desktop */}
        <div className="hidden lg:flex lg:gap-x-12">
          <div className="relative">
            {/* Botão que alterna o estado do dropdown */}
            <button
              type="button"
              className="flex items-center gap-x-1 text-sm font-semibold text-gray-900"
              aria-expanded={isDropdownOpen ? 'true' : 'false'}
              onClick={toggleDropdown}
            >
              Produtos
              <svg className="size-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Menu Dropdown, exibido se isDropdownOpen for true */}
            {isDropdownOpen && (
              <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm font-semibold hover:bg-gray-50">
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <svg className="size-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                      </svg>
                    </div>
                  </div>
                  {/* Mais itens de menu aqui */}
                </div>
              </div>
            )}
          </div>

          <Link to="/sobre" className="text-sm font-semibold text-gray-900">Sobre</Link>
          <Link to="/solucao" className="text-sm font-semibold text-gray-900">Solução</Link>
          <Link to="/empresa" className="text-sm font-semibold text-gray-900">Empresa</Link>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* Alteração do link para direcionar para a página de login */}
          <Link to="/login" className="text-sm font-semibold text-gray-900">Log in <span aria-hidden="true">&rarr;</span></Link>
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
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
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
                {/* Mais links mobile aqui */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
