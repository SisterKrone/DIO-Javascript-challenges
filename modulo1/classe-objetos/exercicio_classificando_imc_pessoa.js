/**
 * Crie uma classe para representar pessoas.
 * Para cada pessoa teremos os atributos nome, peso e altura.
 * As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso/(altura * altura));
 * Instancia uma pessoa chamada José que tenha 70 kg de peso e 1,75 de altura e peça ao José para 
 * dizer o valor do seu IMC.
 * Crie um método que faça a pessoa dizer onde ela se enquadra na tabela do IMC
 * IMC em adultos condição:
 * Abaixo de 18.5 = abaixo do peso;
 * Entre 18.5 e 25 = peso normal;
 * Entre 25 e 30 = acima do peso;
 * Entre 30 e 40 = obeso;
 * Acima de 40 = Obesidade grave;
 */

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return (this.peso / (this.altura * this.altura)).toFixed(2);
    }

    classificarImc() {
        const imc = this.calcularImc();

        if (imc < 18.5) {
            return 'Abaixo do peso';
        }
        else if (imc >= 18.5 && imc < 25) {
            return 'Peso normal';
        }
        else if (imc >= 25 && imc < 30) {
            return 'Acima do peso';
        }
        else if (imc >= 30 && imc < 40) {
            return 'Obeso';
        }
        else if(imc>=40){
            return 'Obesidade grave';
        }
        else {
            return 'Meu peso ou altura estão errados :('
        }

    }

}


(function main() {

    const jose = new Pessoa('José', 70, 1.75);
    const manoel = new Pessoa('Manoel', 86, 1.84);
    const renan = new Pessoa('Renan', 63, 1.75);

    console.log(jose.calcularImc());
    console.log(manoel.calcularImc());
    console.log(renan.calcularImc());

    console.log(jose.classificarImc());
    console.log(manoel.classificarImc());
    console.log(renan.classificarImc());
})();