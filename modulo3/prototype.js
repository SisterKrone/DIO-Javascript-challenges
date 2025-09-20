/**Neste caso, Sister herda as características de pessoa, no javascript quando dizemos que 
 * um objeto é __proto__ de outro, seria algo como herança em outras linguagens.
 * 
 * O this. da função falarNome() na classe/objeto pai captura o atributo do __proto__ ou seja, mesmo a classe pessoa 
 * não possuindo o atributo nome, o this.nome funciona em __proto__ de pessoa que possuem esse 
 * atributo
 */
/*const pessoa = {
    genero: 'masculino',
    falarNome: function(){
        console.log(`Meu nome é ${this.nome}`);
    }
}

const sister = {
    nome: 'Krone',
    idade: 26,
    __proto__: pessoa
}

sister.falarNome = function (){
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`);
}
//sister.genero = 'feminino';

const jose = {
    nome: 'jose',
    idade: 21,
    __proto__: pessoa
}

jose.falarNome(jose.nome);
sister.falarNome(sister.nome);
//console.log(sister.genero);
//console.log(jose.genero);
*/

//Função construtora 

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.falar = function () {
    console.log(`My name is ${this.nome}`);
}

class Person {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    falar(){
        console.log(`Mi nombre es ${this.nome}`)
    }
}
// As duas formas acima, são a mesma coisa 

const sister = new Pessoa('Krone', 26);
console.log(sister);
console.log(Pessoa);
sister.falar();