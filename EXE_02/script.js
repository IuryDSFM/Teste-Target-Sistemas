/*
Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores 
anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, 
informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número 
informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser 
previamente definido no código;
*/
let resultado = document.getElementById("res");
let numeroInp = document.getElementById("num");
let btn = document.getElementById("btn");

function verificar() {
    let numero = parseFloat(numeroInp.value);
    let numAnter = 0;
    let memoria;
    let i = 1;

    if (numero < 0) {
        alert(`Não existe número negativo na sequência de Fibonacci. 
            \nPor favor digite um número maior ou igual a 0`);
    } else if (numero == 1 || numero == 0) {
        resultado.innerHTML = `O número ${numero} faz parte da sequência de Fibonacci.`;
    } else {
        do {
            memoria = i
            i = i + numAnter;
            numAnter = memoria;

        } while (i <= numero);

        if (numero == numAnter) {
            resultado.innerHTML = `O número ${numero} faz parte da sequência de Fibonacci.`;
        } else {
            resultado.innerHTML = `O número ${numero} não faz parte da sequência de Fibonacci.`;
        }

    }

    numeroInp.value = "";
    numeroInp.focus();
}

btn.addEventListener("click", verificar);