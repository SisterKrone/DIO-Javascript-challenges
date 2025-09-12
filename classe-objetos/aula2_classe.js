class Pessoa {
    nome;
    idade;
    anoDeNascimento;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2025 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const vitor = new Pessoa('Vitor', 27);


const roberval = new Pessoa('Roberval', 30);

(function main() {
    vitor.descrever();
    roberval.descrever();
    console.log(vitor);
    console.log(roberval);

})();