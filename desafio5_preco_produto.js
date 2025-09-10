/**
 * Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta 
 * e a escolha da condição de pagamento.
 * Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar p cálculo
 * adequado.
 * 
 * Código condição de pagamento:
 * À vista débito, recebe 10% de desconto;
 *À vista no dinheiro ou pix, recebe 15% de desconto;
  Em duas vezes, preço normal de etiqueta sem juros;
  Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
 */

function calcularValorProduto(condicao, precoEtiqueta) {

    if (condicao.toLowerCase() === 'debito') {
        return precoEtiqueta * 0.9;
    }
    else if (condicao.toLowerCase() === 'dinheiro' || condicao === 'pix') {
        return precoEtiqueta * 0.85;
    }
    else if (condicao.toLowerCase().toString() === '2x') {
        return precoEtiqueta;
    }
    else {
        return precoEtiqueta * 1.1;
    }
}

function mostrarPrecoFinal(condicao, precoEtiqueta) {
    console.log(`O preço final na condição ${condicao} é :`, calcularValorProduto(condicao, precoEtiqueta).toFixed(2));


}

mostrarPrecoFinal('3x', 100)