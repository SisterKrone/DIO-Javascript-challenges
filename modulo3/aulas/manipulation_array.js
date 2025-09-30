const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

lista.forEach((value,i, listRef)=>{
    //forEach é mais lento que o for tradicional
    //console.log(value, i, listRef);
})

const listaNumerosPares = lista.filter((element, i , listRef)=>{
    //Não altera a lista original
    //Verifica se o elemento da lista original atende a condição e cria uma 
    // nova lista com os elementos que atendem a condição

    return (element % 2 === 0);
});

//console.log(listaNumerosPares);

class Pessoa {
    constructor(name){
        this.name = name;
    }
}
const listaPessoas = [new Pessoa('Sister'), new Pessoa('João'),
                        new Pessoa('Maria'), new Pessoa('Ana'),
                        new Pessoa('Soraya'), new Pessoa('Semiramis') 
                    ];

/* Com for 
const listaNomesfor= [];
for(let i = 0; i < listaPessoas.length; i++){
    listaNomesfor.push(listaPessoas[i].name);
}
*/

//Com map
const listaNomesMap = listaPessoas.map((element, i, listRef)=>{
    //return element.name;//retornando o name de cada objeto Pessoa
    return `
        <li>${element.name}</li> 
    `//retornando o name de cada objeto Pessoa formatado em li
});
//console.log(listaNomesMap);

// Reduce - reduz a lista a um único valor

const somaDeTodosOsNumeros = lista.reduce((previus, current, currentIndex, array)=>{
    //console.log(previus, current, currentIndex, array);
    return previus + current;
},0);//0 é o valor inicial do previus se não for passado o primeiro valor da lista é usado

//console.log(somaDeTodosOsNumeros);

//Join - junta todos os elementos da lista em uma string
//console.log(lista.join('*'));

console.log(listaPessoas.map((element)=>element.name).join('; '));
console.log(listaPessoas.map((element)=>element.name)
                        .filter((element)=>element.startsWith('S'))
                        .join('; '));  