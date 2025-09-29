const fs = require('fs')//Manipulação de arquivos
const path = require('path')//Manipulação de caminhos

const filePath = path.resolve(__dirname, 'tarefas.csv')

//fs.readFile()//Método que serve para ler arquivos de forma assíncrona jeito antigo
const promessaDaLeituraDoArquivo = fs.promises.readFile(filePath)//Método que serve para ler arquivos de forma assíncrona jeito novo com promises

promessaDaLeituraDoArquivo
    .then((arquivo) => {
        return arquivo.toString('utf-8');//Lê o arquivo e converte para string
    })
    .then((textoDoArquivo) => {
        return textoDoArquivo.split('\n').slice(1);//Quebra o texto em linhas e transforma em array, o slice(1) remove o cabeçalho
    })
    .then((linhasSemOCabecalho) => 
        linhasSemOCabecalho.map((linha) => {
            const [nome, feito] = linha.split(';')//Desestruturação do array
            return {
                nome,
                feito: feito.trim() === 'true'//Trim remove os espaços em branco
            }
        })
    )
    .then((listaDeTarefas) => console.log(listaDeTarefas))
    .catch((err) => {
        console.log('Deu ruim', err);
    })