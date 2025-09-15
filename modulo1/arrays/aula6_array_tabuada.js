/** Crie um programa que dado um númeor, imprima sua tabuada. */

(function main() {

    function tabuada(numero) {
        let tabu = [];
        for (let i = 0; i < 11; i++) {

            tabu[i] = `${numero} x ${i} = ${numero * i}`;

        }
        return tabu;
    }

    console.log(tabuada(7));




})();