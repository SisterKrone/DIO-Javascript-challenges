function falarMeuNome() {
    //function declaration
    //Essa função sofre hoisting, posso chamar ela antes de sua declaração
    console.log('Meu nome é Sister');
}

function falarMeuNomeCompleto(falarMeuNome) {
    falarMeuNome()
    console.log('Krone');
}

//Outro jeito de declarar função
const falarMeuNome2 = function () {
    //Essa função não sofre hoisting, se eu tentar chamar ela antes de declarar, dará erro essa 
    //função tem o nome de function expression
}

//falarMeuNomeCompleto(falarMeuNome);
function funcao1() {
    console.log(this);
}
const functionArrow = () => {
    console.log(this);
}

const obj = {
    nome: 'Sister',
    funcao1,
    functionArrow
}

//obj.funcao1();
//obj.functionArrow();

//Em uma função normal o this varia de acordo com o contexto de onde ela foi chamada
//Já em uma arrow function o this é sempre o contexto onde ela foi definida

/*Closures*/
function soma(x) {
    return function (y) {
        return x + y;
    }
}

const soma2 = soma(2);

//console.log(soma2(8));

//Formas de invocação de função
//invocação direta com alias

//falarMeuNome();

//invocação como método
const pessoa = {
    nome: 'Sister',
    idade: 26,
}
function gritar(prefixo) {
    console.log(prefixo, this.nome);
}

//gritar.apply(pessoa, ['Oláaaaaa']); //invocação com apply(permite adicionar a função e o 
// contexto dela)
//gritar.call(pessoa, 'Oiii'); //invocação com call (permite adicionar a função e o contexto dela
//mas os parâmetros são passados direto, sem array)

//invocação com new

//calculadora básica usando função

function adicao(x, y) {
    return x + y;
}

function multiplicacao(x, y) {
    return x * y;
}

function subtracao(x, y) {
    return x - y;
}

function divisao(x, y) {
    return (x / y).toFixed(2);
}

function calculadora(x, operacao, y) {
    console.log(operacao(x, y));
}
calculadora(5,divisao, 2);
