//Dois jeitos de criar um prototype
const pessoa = {
    genero: 'masculino'
}

const sister = {
    nome: 'Krone',
    __proto__: pessoa
}

const renan = Object.create(pessoa);
renan.nome = 'Renan';

//console.log(sister.genero);
//console.log(renan.genero);

// Entendendo o operador new

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.falar = function () {
    console.log(`Meu nome é ${this.nome}`);
}

const sister2 = new Pessoa('Krone', 26);
//sister2.falar();


//Outro jeito de criar
const renan2 = {
    genero: 'masculino'
}

Pessoa.call(renan2,'Renan',30);

//console.log(renan2);

//Todos objetos tem protótipos 

String.prototype.toPLang = function (){
    return `P ${this}`
}
// Acabamos de criar um método novo para strings que coloca um P na frente dela

console.log('teste'.toPLang());