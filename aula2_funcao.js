function calcularIMC(peso, altura) {

    return peso / (altura * altura);
}

function mostrarCondicao(peso, altura) {
    const imc = calcularIMC(peso, altura);
    if (imc <= 0) {
        return 'Algum valor foi digitado de forma incorreta';
    }
    else if (imc < 18.5) {
        return `O IMC é:${imc.toFixed(2)} e a condição é: Abaixo do peso`;
    }
    else if (imc >= 18.5 && imc < 25) {
        return `O IMC é:${imc.toFixed(2)} e a condição é: Peso Normal`;
    }
    else if (imc >= 25 && imc < 30) {
        return `O IMC é:${imc.toFixed(2)} e a condição é: Acima do peso`;
    }
    else if (imc >= 30 && imc < 40) {
        return `O IMC é:${imc.toFixed(2)} e a condição é: Obeso`;
    }
    else {
        return `O IMC é:${imc.toFixed(2)} e a condição é: Obesidade grave`;
    }
}

function main() {
    console.log(mostrarCondicao(86, 1.84));
}

main();

