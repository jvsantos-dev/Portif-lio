

const Solucao = () => {
  return (
    <div>
      {/* Seção de Explicação do Problema */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-screen-xl mx-auto px-6">
          {/* Título Principal */}
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            O Problema
          </h2>
          <p className="text-center text-lg text-gray-600 mb-8">
            Muitas empresas e residências enfrentam desafios ao tentar aproveitar ao máximo a energia renovável gerada, 
            principalmente devido à falta de uma **previsão precisa** da geração de energia e à **ineficiência no uso** 
            de sistemas de armazenamento de energia e veículos elétricos. Além disso, em períodos de baixa geração, 
            a **dependência da rede elétrica** aumenta, resultando em **custos elevados** e uma maior **pegada de carbono**.
          </p>
        </div>
      </div>

      {/* Seção de Soluções (Grid com 3 colunas) */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-screen-xl mx-auto px-6">
          {/* Título Principal */}
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nossas Soluções
          </h2>
          
          {/* Grid com 3 colunas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Coluna 1 */}
            <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <svg
                  className="w-16 h-16 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2L12 12M12 12l4 4m-4-4l-4 4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Solução 1: Previsão de Geração de Energia</h3>
              <p className="text-gray-600 text-sm">
                Integra dados meteorológicos em tempo real e históricos para prever a quantidade de energia renovável gerada,
                permitindo um planejamento melhor do consumo e do armazenamento.
              </p>
            </div>

            {/* Coluna 2 */}
            <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <svg
                  className="w-16 h-16 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2L12 12M12 12l4 4m-4-4l-4 4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Solução 2: Sugestão de Armazenamento e Consumo</h3>
              <p className="text-gray-600 text-sm">
                A plataforma sugere os melhores momentos para armazenar energia ou carregar veículos elétricos, otimizando o uso de fontes renováveis.
              </p>
            </div>

            {/* Coluna 3 */}
            <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <svg
                  className="w-16 h-16 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2L12 12M12 12l4 4m-4-4l-4 4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Solução 3: Automação e Alertas</h3>
              <p className="text-gray-600 text-sm">
                A plataforma automatiza o carregamento e descarregamento de baterias e veículos elétricos, além de enviar alertas para evitar consumo nos horários de pico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Solucao;
