const email = document.getElementById("email");
const senha = document.getElementById("senha");
const botao = document.getElementById("botao");


botao.addEventListener("click", (e) => {
    e.preventDefault();
    
    window.location.href = "http://127.0.0.1:5500/arquivos/lixeira.html";
})
