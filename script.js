  const images = [
    'back1.jpg',
    'back2.jpg',
    'back3.png'
  ];      
  
  let currentImageIndex = 0;
  const changeBackgroundImage = () => {
    // Usa `linear-gradient` junto com a imagem de fundo
    document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${images[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % images.length; // Alterna entre as imagens
  };
  
  // Muda a imagem de fundo a cada 10 segundos
  setInterval(changeBackgroundImage, 10000);
  
  // Definir a primeira imagem imediatamente
  changeBackgroundImage();