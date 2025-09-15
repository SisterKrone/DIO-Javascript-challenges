function aplicarDesconto(valorProduto, desconto) {
    return (valorProduto - (valorProduto * (desconto / 100)));
}

function aplicarJuros(valorProduto, juros) {
    return (valorProduto + (valorProduto * (juros / 100)));
}

function calcularValorProduto(condicao, precoEtiqueta) {
    let desconto = 0;
    let juros = 0
    if (condicao.toLowerCase() === 'debito') {
        desconto = 10
        return aplicarDesconto(precoEtiqueta, desconto);
    }
    else if (condicao.toLowerCase() === 'dinheiro' || condicao.toLowerCase() === 'pix') {
        desconto = 15
        return aplicarDesconto(precoEtiqueta, desconto);
    }
    else if (condicao.toLowerCase().toString() === '2x') {
        return precoEtiqueta;
    }
    else {
        juros = 10
        return aplicarJuros(precoEtiqueta, juros);
    }
}

function mostrarPrecoFinal(condicao, precoEtiqueta) {
    console.log(`O preço final na condição ${condicao} é :`, calcularValorProduto(condicao, precoEtiqueta).toFixed(2));
}

(function main() {
    mostrarPrecoFinal('4x', 100)
})();