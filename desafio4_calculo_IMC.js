/**
 * Fórmula do IMC: 
 * IMC = peso/(altura*altura)
 * Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a 
 * tabela abaixo.
 * 
 * IMC em adultos condição:
 * Abaixo de 18.5 = abaixo do peso;
 * Entre 18.5 e 25 = peso normal;
 * Entre 25 e 30 = acima do peso;
 * Entre 30 e 40 = obeso;
 * Acima de 40 = Obesidade grave;
 */

function calcularIMC(peso, altura) {

    return peso / (altura * altura);
}

function mostrarCondicao(peso, altura) {
    imc = calcularIMC(peso, altura);
    if(imc<=0){
        console.log('Algum valor foi digitado de forma incorreta')
    }
    else if (imc < 18.5) {
        console.log(`O IMC é:${imc.toFixed(2)} e a condição é: Abaixo do peso`);
    }
    else if (imc >= 18.5 && imc < 25) {
        console.log(`O IMC é:${imc.toFixed(2)} e a condição é: Peso Normal`)
    }
    else if (imc >= 25 && imc < 30) {
        console.log(`O IMC é:${imc.toFixed(2)} e a condição é: Acima do peso`)
    }
    else if (imc >= 30 && imc < 40) {
        console.log(`O IMC é:${imc.toFixed(2)} e a condição é: Obeso`)
    }
    else {
        console.log(`O IMC é:${imc.toFixed(2)} e a condição é: Obesidade grave`)
    }
}

mostrarCondicao(86,1.84)