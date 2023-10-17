const inputs = document.querySelectorAll(".inputs")

const botao = document.getElementById("btn-enviar")

botao.addEventListener('click', function () {



    inputs.forEach(input => {

        if (input.value === "") {
            input.classList.add("erro")
            input.nextElementSibling.classList.add("mostrar")
            input.classList.remove("validado")

        } else {
            input.classList.remove("erro")
            input.classList.add("validado")
            input.nextElementSibling.classList.remove("mostrar")
        }
    });
})