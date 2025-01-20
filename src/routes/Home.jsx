import { useState } from 'react';
import slideshow1 from '../assets/slideshow1.jpg';
import slideshow2 from '../assets/slideshow2.jpg';
import slideshow3 from '../assets/slideshow3.jpg';
import solucao1 from '../assets/solucao1.png';
import solucao2 from '../assets/solucao2.jpg';
import solucao3 from '../assets/solucao3.jpg';

const Home = () => {
  // Dados do slideshow com imagens locais
  const slideshowImages = [
    slideshow1,
    slideshow2,
    slideshow3
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slideshowImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slideshowImages.length - 1 : prevSlide - 1
    );
  };

  // Dados dos cards com imagens locais
  const solutionCards = [
    {
      title: "Solução 1",
      description: "",
      image: solucao1,
    },
    {
      title: "Solução 2",
      description: "",
      image: solucao2,
    },
    {
      title: "Solução 3",
      description: "",
      image: solucao3,
    },
  ];

  return (
    <section className="min-h-screen bg-gray-100 p-6">
      {/* Título principal */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Bem-vindo à Solução Meteorológica</h1>
        <p className="text-xl text-gray-600 mt-4">Explore as melhores soluções para monitoramento climático e previsão do tempo.</p>
      </header>

      {/* Slideshow */}
      <div className="relative mb-12">
        <div className="w-full h-64 sm:h-80 lg:h-96 overflow-hidden rounded-lg">
          <img
            src={slideshowImages[currentSlide]}
            alt="Slideshow"
            className="w-full h-full object-cover transition-all duration-500"
          />
        </div>
        {/* Botões de navegação do slideshow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          &#10095;
        </button>
      </div>

      {/* Texto sobre o tema */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-700">Sobre o Tema</h2>
        <p className="text-lg text-gray-600 mt-4">
          Este projeto visa fornecer soluções inovadoras para monitoramento climático, previsão do tempo e
          análise de dados meteorológicos. Utilizando as mais recentes tecnologias, oferecemos uma plataforma
          para acompanhar o clima em tempo real e prever eventos climáticos.
        </p>
      </div>

      {/* Cards de soluções */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutionCards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
              <p className="text-gray-600 mt-2">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
