import { Link } from 'react-router-dom';

const Sobre = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-900 py-24 sm:py-32 lg:py-40">
        <div className="absolute inset-0 -z-10">
          <img className="h-full w-full object-cover" src="https://tailwindui.com/img/photos/sky.jpg" alt="Background" />
        </div>
        <div className="mx-auto max-w-7xl px-6 text-center text-white sm:px-12 lg:px-16">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Solução Integrada de Previsão e Gerenciamento de Energia
          </h1>
          <p className="mt-6 text-lg font-medium opacity-80">
            Maximize o uso de energia renovável e reduza seus custos com a nossa plataforma inteligente, que prevê a geração de energia, sugere horários ideais de armazenamento e consumo, e otimiza o uso de sistemas de armazenamento e veículos elétricos.
          </p>
          <div className="mt-12">
            <Link
              to="#"
              className="inline-block rounded-lg bg-indigo-600 px-8 py-3 text-base font-medium text-white shadow-md hover:bg-indigo-700"
            >
              Comece Agora
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32 lg:py-40 bg-gray-100">
        <div className="mx-auto max-w-7xl px-6 text-center sm:px-12 lg:px-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Funcionalidades da Plataforma
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Nossa plataforma integra dados meteorológicos, otimiza o uso de energia renovável e oferece uma gestão inteligente de consumo e armazenamento.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Feature 1: Previsão de Geração de Energia */}
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
              <div className="h-24 w-24 rounded-full bg-indigo-100 flex items-center justify-center">
                <svg className="h-16 w-16 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m4-4H8" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Previsão de Geração de Energia</h3>
              <p className="mt-3 text-base text-gray-600">
                Integra dados meteorológicos para prever a quantidade de energia renovável que será gerada, melhorando o planejamento de consumo e armazenamento.
              </p>
            </div>

            {/* Feature 2: Sugestão de Armazenamento e Consumo */}
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
              <div className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="h-16 w-16 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m4-4H8" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Sugestão de Armazenamento e Consumo</h3>
              <p className="mt-3 text-base text-gray-600">
                A plataforma sugere os melhores momentos para armazenar energia em baterias ou carregar veículos elétricos, otimizando o uso de energia renovável.
              </p>
            </div>

            {/* Feature 3: Gerenciamento Automatizado */}
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
              <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m4-4H8" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Gerenciamento Automatizado de Carga</h3>
              <p className="mt-3 text-base text-gray-600">
                A plataforma ajusta automaticamente o carregamento e descarregamento de baterias e veículos elétricos, de acordo com a demanda e a oferta de energia.
              </p>
            </div>

            {/* Feature 4: Alertas de Consumo Ideal */}
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
              <div className="h-24 w-24 rounded-full bg-red-100 flex items-center justify-center">
                <svg className="h-16 w-16 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m4-4H8" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Alertas de Consumo Ideal</h3>
              <p className="mt-3 text-base text-gray-600">
                Receba alertas quando a rede elétrica atingir horários de pico, sugerindo o uso de energia armazenada para evitar custos elevados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-indigo-600 py-24 sm:py-32 lg:py-40 text-center text-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Pronto para otimizar o uso de energia renovável e reduzir seus custos?
          </h2>
          <p className="mt-4 text-lg opacity-80">
            Comece hoje mesmo e experimente os benefícios de um gerenciamento inteligente de energia. Junte-se aos milhares de usuários que já estão aproveitando nossa plataforma.
          </p>
          <div className="mt-8">
            <Link
              to="#"
              className="inline-block rounded-lg bg-white px-8 py-3 text-base font-medium text-indigo-600 shadow-md hover:bg-gray-100"
            >
              Comece Agora
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
