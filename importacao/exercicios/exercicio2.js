/** Faça um programa que receba N (quantidade de números) e seus respectivos valores
 * e imprima o maior número par e o menor número ímpar.
 * Exemplo:
 * 5,3,4,1,10,8 
 * Saída: Maior número par: 10
 * Menor número ímpar: 1
*/

const { print, maiorPar } = require('./funcoes_auxiliares_ex2');

(function main() {
    const numeros = [5, 3, 4, 1, 10, 8];

    print(maiorPar(numeros));


})();