(function main() {
    const notas = [];

    notas.push(5);
    notas.push(7);
    notas.push(8);
    notas.push(2);
    notas.push(5);
    notas.push(8);

    function calcularMedia(notas) {
        let soma = 0;
        for (let i = 0; i < notas.length; i++) {
            soma = soma + notas[i];
        }
        return (soma / notas.length).toFixed(2);
    }

    console.log(calcularMedia(notas));


})();