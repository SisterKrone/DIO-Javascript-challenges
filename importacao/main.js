const funcoes = require('./funcoes_auxiliares.js');
const {gets, print} = require('./funcoes_auxiliares.js');

print(gets());

const pessoa = {
    nome: 'Vitor'
};
/**
 * Esses dois são a mesma coisa
const { nome } = pessoa;
const nome = pessoa.nome;
 * 
 */