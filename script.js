// Função para trocar de tela
function nextScreen(currentScreen) {
  const current = document.querySelector(`.screen-${currentScreen}`);
  const next = document.querySelector(`.screen-${currentScreen + 1}`);

  if (current && next) {
    current.classList.add("slide-up");
    current.classList.remove("active");

    setTimeout(() => {
      current.classList.remove("slide-up");
      next.classList.add("active");

      // Se for a tela 4, inicia os corações e a carta
      if (currentScreen === 3) {
        startHearts();
        initLoveLetter();
      }

      // Se for a tela 3, carrega as imagens
      if (currentScreen === 2) {
        loadGallery();
      }
    }, 500);
  }
}

// Função para o efeito de explosão do botão
function explodeButton() {
  const button = document.querySelector(".btn-explode");
  const buttonGroup = document.querySelector(".button-group");
  const nextButton = document.querySelector(".screen-2 .btn-next");

  button.classList.add("explode");

  setTimeout(() => {
    button.style.display = "none";
    buttonGroup.style.justifyContent = "center";
    nextButton.style.transform = "scale(1.2)";
  }, 500);
}

// Função para carregar a galeria de fotos
function loadGallery() {
  const gallery = document.querySelector(".gallery");
  const nextButton = document.querySelector(".screen-3 .btn-next");
  
  // Limpa a galeria
  gallery.innerHTML = "";
  
  // Array com os nomes das imagens
  const imagens = [
    "WhatsApp Image 2025-05-08 at 13.36.05 (1).jpeg",
    "WhatsApp Image 2025-05-08 at 13.36.05.jpeg",
    "WhatsApp Image 2025-05-08 at 13.36.04.jpeg",
    "WhatsApp Image 2025-05-08 at 13.35.24.jpeg",
    "WhatsApp Image 2025-05-08 at 13.35.23.jpeg",
    "WhatsApp Image 2025-05-08 at 13.35.22 (2).jpeg",
    "WhatsApp Image 2025-05-08 at 13.35.22 (1).jpeg",
    "WhatsApp Image 2025-05-08 at 13.35.22.jpeg",
    "WhatsApp Image 2025-05-08 at 13.35.20.jpeg",
    "WhatsApp Image 2025-05-08 at 13.34.08.jpeg",
    "WhatsApp Image 2025-05-08 at 13.34.07.jpeg",
    "WhatsApp Image 2025-05-08 at 13.34.06 (2).jpeg",
    "WhatsApp Image 2025-05-08 at 13.34.06 (1).jpeg",
    "WhatsApp Image 2025-05-08 at 13.34.06.jpeg",
    "WhatsApp Image 2025-05-08 at 13.34.05.jpeg"
  ];

  // Adiciona cada imagem à galeria
  imagens.forEach((imagem, index) => {
    const img = document.createElement("img");
    img.src = `imagens/${imagem}`;
    img.alt = `Momento especial ${index + 1}`;
    img.loading = "lazy";
    gallery.appendChild(img);
  });

  // Adiciona o evento de rolagem
  const screen3 = document.querySelector(".screen-3");
  screen3.addEventListener("scroll", () => {
    const scrollPosition = screen3.scrollTop + screen3.clientHeight;
    const scrollHeight = screen3.scrollHeight;
    
    // Mostra o botão quando o usuário chegar próximo ao final
    if (scrollPosition >= scrollHeight - 100) {
      nextButton.classList.add("visible");
    } else {
      nextButton.classList.remove("visible");
    }
  });
}

// Função para criar corações
function startHearts() {
  const container = document.querySelector(".hearts-container");

  // Cria corações a cada 300ms
  const heartInterval = setInterval(() => {
    createHeart(container);
  }, 300);

  // Para de criar corações após 10 segundos
  setTimeout(() => {
    clearInterval(heartInterval);
  }, 10000);
}

function createHeart(container) {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  // Posição aleatória na parte inferior da tela
  const startPos = Math.random() * window.innerWidth;
  heart.style.left = `${startPos}px`;
  heart.style.bottom = "0";

  // Tamanho aleatório
  const size = Math.random() * 30 + 20;
  heart.style.fontSize = `${size}px`;

  // Duração da animação aleatória
  const duration = Math.random() * 3 + 3;
  heart.style.animationDuration = `${duration}s`;

  container.appendChild(heart);

  // Remove o coração após a animação terminar
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// Função para reiniciar o aplicativo
function restartApp() {
  // Recarrega a página
  window.location.reload();
}

// Função para controlar a carta de amor
function toggleLetter() {
  const envelope = document.querySelector('.envelope');
  const loveLetter = document.querySelector('.love-letter');
  
  if (envelope && loveLetter) {
    envelope.classList.toggle('open');
    loveLetter.classList.toggle('open');
    
    // Adiciona um efeito de brilho quando a carta é aberta
    if (envelope.classList.contains('open')) {
      loveLetter.style.boxShadow = '0 0 30px rgba(255, 107, 107, 0.5)';
    } else {
      loveLetter.style.boxShadow = 'none';
    }
  }
}

// Inicializa a primeira tela
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".screen-1").classList.add("active");
});

function openLetter() {
  const letterScreen = document.querySelector('.letter-screen');
  letterScreen.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLetter() {
  const letterScreen = document.querySelector('.letter-screen');
  letterScreen.classList.remove('active');
  document.body.style.overflow = 'auto';
}
