document.addEventListener("DOMContentLoaded", function(){
    const mensagem = document.getElementById("mensagem");

    mensagem.style.opacity = 1;
    
    setTimeout(function(){
        mensagem.style.opacity = 0;
    },3000)
})