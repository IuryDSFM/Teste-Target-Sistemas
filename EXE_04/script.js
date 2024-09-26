/*
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação 
que cada estado teve dentro do valor total mensal da distribuidora.  
*/

let resultado = document.getElementById("res");

let faturamentos = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
}

let totalFat = 0;

let uf = Object.keys(faturamentos);

uf.forEach((estado) => {
    totalFat += faturamentos[estado];
    console.log(totalFat);
});

uf.forEach((estado) => {
    resultado.innerHTML += `<b>${estado}:</b> ${((faturamentos[estado] / totalFat) * 100).toFixed(2)}%<br>`;
});
