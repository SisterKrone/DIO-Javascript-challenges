/**
 * Faça um programa para calcular o valor de uma viagem
 *
 * você terá 3 variáveis, sendo elas:
 *
 * Preço médio do combustível
 * Gasto médio do combustível do carro por KM
 * Distancia da viagem em KM
 *
 * Imprima no console o valor que será gasto para realizar esta viagem.
 */

function calcularGastoViagem(combPreco, kmPorLitro, distancia) {
  const litrosConsumidos = distancia / kmPorLitro;
  const gastoFinal = litrosConsumidos * combPreco;

  console.log(`O valor total gasto nessa viagem foi R$${gastoFinal.toFixed(2)} reais`);
}

calcularGastoViagem(5.79, 1, 100);
