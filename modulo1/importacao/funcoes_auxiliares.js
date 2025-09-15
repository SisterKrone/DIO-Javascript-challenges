/*  Exercício 1
    Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
    Faça um programa que receba 5 números sorteados para os alunos e mostre o maior 
    número sorteado.

    Dados de de entrada:
    5
    50
    10
    98
    23

    Saída:
    98
*/

function pegarMaiorValor(lista) {
    let maiorValor=0;
    for (let i = 0; i < lista.length; i++) {
        if(lista[i]>maiorValor){
            maiorValor = lista[i];
        }
    }

    return maiorValor;
}

/*******************************************************/

function gets() {
    return 10;
}


function print(texto) {
    console.log(texto);
}
module.exports = { gets, print, pegarMaiorValor};