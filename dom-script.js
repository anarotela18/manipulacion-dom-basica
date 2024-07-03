const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn    = document.querySelector("#btnCalcular");
const pResultado = document.querySelector('#resultado');
const form = document.querySelector("#form");


form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event){
    console.log({event});
    event.preventDefault();
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResultado.innerHTML = "Resultado: "+ sumaInputs;
}