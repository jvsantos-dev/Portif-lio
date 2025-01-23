import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

html {
  scroll-behavior: smooth;
}

/* Fundo preto */
.star-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  background-color: black;  /* Fundo totalmente preto */
  overflow: hidden;
}

/* Efeito de nebulosa suave no fundo */
@keyframes nebulaEffect {
  0% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 0.1;
  }
}

/* Estrelas com brilho e animações de piscamento */
.star {
  position: absolute;
  border-radius: 50%;
  opacity: 0.9;
  animation: move 6s linear infinite, fall 2s linear infinite, blink 3s ease-in-out infinite;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.8), 0 0 25px rgba(255, 255, 255, 0.6);
}

/* Animação para o movimento das estrelas */
@keyframes move {
  0% {
    transform: translateY(0) scale(1);
  }
  100% {
    transform: translateY(100vh) scale(0.5);
  }
}

/* Animação para a queda contínua das estrelas */
@keyframes fall {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100vh);
  }
}

/* Animação para as estrelas piscarem, criando um efeito de brilho */
@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}

/* Ajustes para diferentes tamanhos e posições das estrelas */
.star1 {
  width: 3px;
  height: 3px;
  top: 5%;
  left: 10%;
  background-color: #fff;
}

.star2 {
  width: 5px;
  height: 5px;
  top: 30%;
  left: 50%;
  background-color: #fffc00;
}

.star3 {
  width: 7px;
  height: 7px;
  top: 20%;
  left: 80%;
  background-color: #ff7f50;
}

.star4 {
  width: 10px;
  height: 10px;
  top: 10%;
  left: 25%;
  background-color: #87cefa;
}

.star5 {
  width: 12px;
  height: 12px;
  top: 40%;
  left: 60%;
  background-color: #ff69b4;
}

.star6 {
  width: 15px;
  height: 15px;
  top: 70%;
  left: 30%;
  background-color: #00ff7f;
}

.star7 {
  width: 4px;
  height: 4px;
  top: 80%;
  left: 85%;
  background-color: #ff6347;
}

.star8 {
  width: 6px;
  height: 6px;
  top: 50%;
  left: 15%;
  background-color: #dda0dd;
}

.star9 {
  width: 5px;
  height: 5px;
  top: 90%;
  left: 75%;
  background-color: #ffd700;
}

.star10 {
  width: 6px;
  height: 6px;
  top: 60%;
  left: 45%;
  background-color: #ff1493;
}

`;

export default GlobalStyle;
