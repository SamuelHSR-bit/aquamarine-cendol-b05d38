const formulario = document.getElementById("loginForm");

formulario.addEventListener("submit", function(event) {

    // Impede o formulário de recarregar a página
    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    const erro = document.getElementById("erroLogin");


    // LOGIN PROVISÓRIO
    if (usuario === "samuel" && senha === "1234") {

        window.location.href = "./dashboard.html";

    } else {

        erro.textContent = "Usuário ou senha incorretos.";

    }

});