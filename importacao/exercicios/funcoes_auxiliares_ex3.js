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

function calcSalarioParaTransf(salarioBruto, beneficios) {
    let salarioATransferir = 0;
    if (salarioBruto >= 0.00 && salarioBruto <= 1100.00) {
        return salarioATransferir = (salarioBruto * 0.95) + beneficios;
    } else if (salarioBruto >= 1100.01 && salarioBruto <= 2500.00) {
        return salarioATransferir = (salarioBruto * 0.9) + beneficios;
    } else if (salarioBruto > 2500.00) {
        return salarioATransferir = (salarioBruto * 0.85) + beneficios;
    }
    else {
        return 'Algum campo inválido';
    }

}





function print(texto) {
    console.log(texto);
}




module.exports = { print , calcSalarioParaTransf}