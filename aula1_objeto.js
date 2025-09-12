const pessoa = {
    nome: 'João',
    idade: 20,
    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

(function main(){
    pessoa.descrever();
})();