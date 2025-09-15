/**
 * Faça um programa para calcular o valor de uma viagem
 *
 * você terá 3 variáveis, sendo elas:
 *
 * Preço do etanol;
 * Preço da gasolina;
 * O tipo de combustível que está no seu carro;
 * Gasto médio do combustível do carro por KM
 * Distancia da viagem em KM
 *
 * Imprima no console o valor que será gasto para realizar esta viagem.
 */
function calcularCombustivelGasto(kmPorLitro, distancia) {
  const calculoCombustivel = distancia / kmPorLitro;
  return calculoCombustivel;
}

function calcularGastoViagem(tipoCombustivel, preco, kmPorLitro, distancia) {
  if (tipoCombustivel.toString().toLowerCase() === "gasolina") {
    const gastosTotais = calcularCombustivelGasto(kmPorLitro, distancia) * preco;
    return console.log(`O valor que será gasto nessa viagem é R$:${gastosTotais.toFixed(2)} reais.`
    );
  } else if (tipoCombustivel.toString().toLowerCase() === "etanol") {
    const gastosTotais = calcularCombustivelGasto(kmPorLitro, distancia) * preco;
    return console.log(`O valor que será gasto nessa viagem é R$:${gastosTotais.toFixed(2)} reais.`);
  } else {
    return console.log("Combustível inválido");
  }
}

calcularGastoViagem("etanol", 6.66, 10, 100);
