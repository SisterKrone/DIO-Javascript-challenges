/**
 * Crie uma classe para representar pessoas.
 * Para cada pessoa teremos os atributos nome, peso e altura.
 * As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso/(altura * altura));
 * Instancia uma pessoa chamada José que tenha 70 kg de peso e 1,75 de altura e peça ao José para 
 * dizer o valor do seu IMC.
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

    dizerImc() {
        console.log(`Olá, sou o ${this.nome} e meu IMC é`, (this.peso / (this.altura * this.altura)).toFixed(2));
    }

}


(function main() {

    const jose = new Pessoa('José', 70, 1.75);
    const manoel = new Pessoa('Manoel', 86, 1.84);
    const renan = new Pessoa('Renan', 63, 1.75);

    jose.dizerImc();
    manoel.dizerImc();
    renan.dizerImc();

})();