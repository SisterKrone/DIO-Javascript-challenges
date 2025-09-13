/**
 * Faça um programa que receba a média de um aluno.
 * Caso a média seja < 5 imprima "Reprovado"
 * Caso a média seja >=5 e <7 imprima "Recuperação"
 * Caso a média seja >=7 imprima "Aprovado"
*/
const { print, classificarMedia } = require('./funcoes_auxiliares_ex1');


(function main() {
    const medias = [5.5, -9, 8, 3];
    print(classificarMedia(medias));

})();