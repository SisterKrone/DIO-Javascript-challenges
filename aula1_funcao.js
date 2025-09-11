function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

function descobrirJurosAplicado(valorPego, valorParaPagar) {
    const jurosValor = valorParaPagar - valorPego;
    return (jurosValor * 100) / valorPego;
}

console.log(incrementarJuros(80, 23));

console.log(descobrirJurosAplicado(80, 98.4));