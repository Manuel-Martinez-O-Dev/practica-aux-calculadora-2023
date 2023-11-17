
// obtener datos de los elementos html para la calculadora de operciones

const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const sumar = document.querySelector("#sumar");
const restar = document.querySelector("#restar");
const dividir = document.querySelector("#dividir");
const multiplicar = document.querySelector("#multiplicar");
const resu_op = document.querySelector("#res_op");

// datos para la calculadora de IMC

const peso = document.querySelector("#peso");
const altura = document.querySelector("#altura");
const op1 = document.querySelector("#op1");
const op2 = document.querySelector("#op2");
const cal = document.querySelector("#cal");
const res_cal = document.querySelector("#res_cal");
const des = document.querySelector("#des");

// eventos de suma restar div mul presionando el boton

sumar.addEventListener("click", ()=> {
    resu_op.innerHTML = Number(num1.value) + Number(num2.value)
});
restar.addEventListener("click", ()=> {
    resu_op.innerHTML = Number(num1.value) - Number(num2.value)
});
dividir.addEventListener("click", ()=> {
    resu_op.innerHTML = Number(num1.value) / Number(num2.value)
});
multiplicar.addEventListener("click", ()=> {
    resu_op.innerHTML = Number(num1.value) * Number(num2.value)
});

// calcular el IMC

function imc() {
    const res_t = Number(peso.value) / (Number(altura.value) * Number(altura.value));
    res_cal.innerHTML = "IMC: " + res_t.toFixed(1);
    if(res_t < 18.5) {
        des.innerHTML = "Bajo peso: IMC menor a 18.5"
    } else if(res_t < 24.9) {
        des.innerHTML = "Normal: IMC de 18.5 a 24.9"
    } else if( res_t < 29.9) {
        des.innerHTML = "Sobrepeso: IMC de 25 a 29.9"
    } else {
        des.innerHTML = "Obesidad: IMC de 30 o más"
    }
}
cal.addEventListener("click", ()=> {
    if(op1.checked) {
        imc();
    } else if(op2.checked) {
        imc();
    } else {
        alert("Selecciona una opcion.")
    }
});



