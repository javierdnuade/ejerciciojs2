function aplicarEstiloInput(event){
    const input = event.target
    input.classList.add('agrandarInput')
    console.log("Se agranda")
}

function removerEstiloInput(event){
    const input = event.target
    input.classList.remove('agrandarInput')
    console.log("Se desagranda")
}

function aplicarEstilo(event){
    const caja = event.target
    caja.classList.add('agrandarCaja')
}

function estiloBarra(event) {
    event.target.style.fontWeight = 'bold';
}

function estiloBarraRemover(event) {
    event.target.style.fontWeight = 'normal';
}


const form = document.querySelector(".formulario")
const inputs = document.querySelectorAll(".input")
const cajas = document.querySelectorAll('.contenedor')


const links = document.querySelectorAll('a')
links.forEach((link) => {
    link.addEventListener('mouseover', estiloBarra)
    link.addEventListener('mouseout', estiloBarraRemover) 

});

inputs.forEach((input) => {
    input.classList.add('enfocado')
    input.addEventListener('focus', aplicarEstiloInput)
    input.addEventListener('blur', removerEstiloInput)
});

form.classList.add('form');

const boton = document.querySelector('[type="submit"]')
boton.addEventListener('click', () => {
    alert("El mensaje se ha enviado correctamente!")
});

