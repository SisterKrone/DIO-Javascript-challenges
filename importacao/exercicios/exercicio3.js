/** Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
 * Para realizar o cálculo receba o valor bruto do salário e o adicional dos benefícios.
 * O salário a ser transferido é calculado da seguinte maneira :
 * 
 * Valor bruto do salário - percentual de impostos mediante a faixa salarial + adicional dos benefícios.
 * 
 * Para calcular o percentual de imposto, segue as alíquotas:
 * 
 * De R$ 0.00 a R$ 1100.00 = 5.00%
 * De R$ 1100.01 a R$ 2500.00 = 10.00%
 * Maior que R$ 2500.00 = 15.00%
 * Exemplo:
 * Entrada:
 * 2000
 * 250
 * Saída:
 * 2050.00
 */
const { print, calcSalarioParaTransf } = require('./funcoes_auxiliares_ex3');


(function main() {
    print(calcSalarioParaTransf(10000,1500));
})();