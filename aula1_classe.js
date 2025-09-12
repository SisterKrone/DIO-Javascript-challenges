class Pessoa {
    nome;
    idade;
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const vitor = new Pessoa();
vitor.nome = 'Vitor J Guerra';
vitor.idade = 25;

const roberval = new Pessoa();
roberval.nome = 'Roberval J Guerra';
roberval.idade = 28;

(function main() {

    console.log(vitor);
    console.log(roberval);

})();