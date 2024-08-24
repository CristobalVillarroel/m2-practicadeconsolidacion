var form = document.querySelector("form");
var submitButton = document.querySelector('button[type="submit"]');

form.addEventListener("submit", function (event) {
    event.preventDefault();
    submitButton.textContent = "Enviando...";
    setTimeout(() => {
        submitButton.textContent = "¡Mensaje Enviado!";
    }, 1000);
});
