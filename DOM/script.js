function mudarBG(cor) {
    document.body.style.backgroundColor = cor;
      
    const titulo = document.querySelector("h1");
  
    if (cor.toLowerCase() === "black" || cor === "#000000") {
      titulo.style.color = "white";
    } else if (cor.toLowerCase() === "white" || cor === "#ffffff") {
      titulo.style.color = "black";
    } else {
      titulo.style.color = "";
    }
  }
  
  const corEscolhida = prompt("Digite uma cor ou código hexadecimal para o fundo:");
  mudarBG(corEscolhida);
  