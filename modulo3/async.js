const fs = require('fs')//Manipulação de arquivos
const path = require('path')//Manipulação de caminhos

const filePath = path.resolve(__dirname, 'tarefas.csv')

//fs.readFile()//Método que serve para ler arquivos de forma assíncrona jeito antigo

async function buscarArquivos() {
    try {
        const arquive = await fs.promises.readFile(filePath)//Método que serve para ler arquivos de forma assíncrona jeito novo com promises
        const textoDoArquivo = arquive.toString('utf-8');//Lê o arquivo e converte para string
        console.log(textoDoArquivo);
    }
    catch (err){
        console.log('Deu ruim!', err);
    }
    finally{
        console.log('Finalizou');
    }
}
buscarArquivos()