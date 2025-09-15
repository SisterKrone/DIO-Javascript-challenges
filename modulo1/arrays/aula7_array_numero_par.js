/** Crie um programa que seja capaz de percorrer uma lista de números e 
 * imprima cada número par encontrado*/

(function main() {

    function encontrarPar(lista) {
        let listaPar = [];

        for (i = 0; i < lista.length; i++) {
            if (lista[i] % 2 === 0) {
                listaPar.push(lista[i]);
            }

        }
        return listaPar;
    }
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    console.log(encontrarPar(array));



})();