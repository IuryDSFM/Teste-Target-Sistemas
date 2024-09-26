/*
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/

let resultado = document.getElementById("res");

let valorFD = [];
let totalFaturamento = 0;
let min = Infinity;
let max = -Infinity;
let mediaMensal = 0;
let diasNormais = 0;

async function carregarFaturamento() {
    try {

        const response = await fetch('dados.json');
        const faturamentoMensal = await response.json();

        armazenarDados(faturamentoMensal);

    } catch (error) {
        console.error('Erro ao carregar os dados de faturamento:', error);
    }

}

function armazenarDados(fats) {
    for (let i = 0; i < 30; i++) {
        valorFD.push(fats.find(param => param.dia === i + 1));

        totalFaturamento += Math.round(valorFD[i].valor);
    }

    for (let i = 0; i < 30; i++) {
        if (valorFD[i].valor != 0) {
            diasNormais++;
            min = Math.min(min, valorFD[i].valor);
        }
        max = Math.max(max, valorFD[i].valor);
    }

    resultado.innerHTML = "<b>Menor Faturamento:</b> " + min + "<br>";
    resultado.innerHTML += `<b>Maior Faturamento:</b> ${max} <br>
    <b>Dias que o faturamento diário foi superior à média mensal:</b> ${fatsMaioresQueMedia()}`;
}

carregarFaturamento();


function fatsMaioresQueMedia() {
    let dias = 0;

    mediaMensal = totalFaturamento / diasNormais;

    for (let i = 0; i < 30; i++) {
        if (valorFD[i].valor > mediaMensal) {
            dias++;
        }

    }
    return dias;
}




