/** Faça um programa que receba N (quantidade de números) e seus respectivos valores
 * e imprima o maior número par e o menor número ímpar.
 * Exemplo:
 * 5,3,4,1,10,8 
 * Saída: Maior número par: 10
 * Menor número ímpar: 1
*/

function maiorPar(listaNumeros) {
    let maior = 0;
    let menorImpar = 999;
    for (let i = 0; i < listaNumeros.length; i++) {
        if (listaNumeros[i] % 2 === 0 && maior < listaNumeros[i]) {
            maior = listaNumeros[i];
        }
        else if (listaNumeros[i] % 2 !== 0 && listaNumeros[i] < menorImpar) {
            menorImpar = listaNumeros[i];
        }
    }

    return (`O menor ímpar é: ${menorImpar}.
O maior par é: ${maior}`);
}


function print(texto) {
    console.log(texto);
}






module.exports = { print, maiorPar };