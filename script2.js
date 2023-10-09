// Defina a senha correta aqui
const senhaCorreta = "123";

function checkPassword() {
    const inputSenha = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (inputSenha === senhaCorreta) {
        message.innerText = "Senha correta. Redirecionando...";
        // Redirecionar para 3.html
        window.location.href = "3.html";
    } else {
        message.innerText = "Senha incorreta. Tente novamente.";
    }
}

// Adicionar um event listener para a tecla Enter
document.getElementById("password").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        checkPassword();
    }
});