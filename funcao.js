function abrirCarta() {
    const carta = document.querySelector(".envelope");
    const mensagem = document.getElementById("mensagemSegredo");
  
    if (!carta.classList.contains('open')) {
      carta.classList.add("open");
      mensagem.style.display = "block";
      mensagem.scrollIntoView({ behavior: 'smooth' });
  
      // Tocando o som e cortando após 2 segundos
      const clickSound = new Audio('sons/magic-sparkle-190030.mp3');
      clickSound.play();
  
      setTimeout(() => {
        clickSound.pause();
        clickSound.currentTime = 0;
      }, 2000);
    }
  }
  
  // Função da contagem do tempo juntos
  function atualizarContadorAmor() {
    const inicio = new Date("2023-10-07T00:00:00"); // coloque aqui sua data real
    const agora = new Date();
  
    let diff = agora - inicio;
  
    const anos = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    diff -= anos * 1000 * 60 * 60 * 24 * 365.25;
  
    const meses = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
    diff -= meses * 1000 * 60 * 60 * 24 * 30.44;
  
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= dias * 1000 * 60 * 60 * 24;
  
    const horas = Math.floor(diff / (1000 * 60 * 60));
    diff -= horas * 1000 * 60 * 60;
  
    const minutos = Math.floor(diff / (1000 * 60));
    diff -= minutos * 1000 * 60;
  
    const segundos = Math.floor(diff / 1000);
  
    const texto = `${anos} ano${anos !== 1 ? 's' : ''}, ${meses} mes${meses !== 1 ? 'es' : ''}, ${dias} dia${dias !== 1 ? 's' : ''}, ${horas}h ${minutos}m ${segundos}s`;
  
    const spanContador = document.getElementById("contadorAmor");
    if (spanContador) {
      spanContador.innerText = texto;
    }
  }
  
  // Atualiza o contador a cada segundo
  setInterval(atualizarContadorAmor, 1000);
  
  // Você pode chamar a primeira vez logo aqui pra não demorar o primeiro segundo
  atualizarContadorAmor();
  