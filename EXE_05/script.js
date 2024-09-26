let vetorChars = [];
let texto = "";
let novoTexto = "";
let base10 = 1;
let inpTxt = document.getElementById("txt");
let btn = document.getElementById("btn");
let resultado = document.getElementById("res");

function enviarTexto() {
    if (resultado.value != "") {
        texto = inpTxt.value;
        gerarNomeAleatorio();
    } else {
        alert("Por favor, entre com o texto!");
    }
}

function limpar() {
    vetorChars = [];
    texto = "";
    novoTexto = "";
    base10 = 1;
    inpTxt.value = "";
    inpTxt.focus();
}

function gerarNomeAleatorio() {
    //Calucular a base 10 necessária para a conversão dos números randômicos
    do {
        base10 = base10 * 10;
        console.log("Base 10: " + base10);
    } while (texto.length > base10);

    for (let i = 0; i < texto.length; i++) {
        //Ele vai calcular a posição aleatória e verificar se ela está indefinida para definir a
        do {
            posicao = Math.round(Math.random() * base10);
        } while (posicao >= texto.length || vetorChars[posicao] != undefined);
        //Vai atrivuir a letra na posição específica
        vetorChars[posicao] = texto.substring(i, (i + 1));
    }
    //Transforma a array em uma string só
    for (let i = 0; i < texto.length; i++) {
        novoTexto += vetorChars[i];
    }
    console.log(vetorChars);
    console.log(novoTexto);

    //Manda para a div o resultado do script
    resultado.innerHTML = `<b>Texto normal: </b> ${texto}<br>
    <b>Texto com as posições mudadas: </b> ${novoTexto}`;

    limpar();
}

btn.addEventListener("click", enviarTexto);

