/*
Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA?
*/
let resultado = document.getElementById("res");

let indice = 13, soma = 0;

for (let k = 0; k < indice; k++) {
    soma = soma + k;
}

resultado.innerHTML = `Soma: ${soma}`;
