document.addEventListener("DOMContentLoaded", function(){
    const mensagem = document.getElementById("mensagem");

    mensagem.style.opacity = 1;
    
    setTimeout(function(){
        mensagem.style.opacity = 0;
    },3000)
})


// Adicione um evento "keyup" no campo de senha
document.getElementById("senhaInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        verificarSenha(); // Chame a função verificarSenha() quando a tecla "Enter" for pressionada
    }
});

function verificarSenha() {
    var senhaDigitada = document.getElementById("senhaInput").value;

    if (senhaDigitada === "vamos") {
        alert("Senha correta! Redirecionando...");
        window.location.href = "2.html"; 
    } else {
        alert("Senha incorreta. Tente novamente.");
    }
}
