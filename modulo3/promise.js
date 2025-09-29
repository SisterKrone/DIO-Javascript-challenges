const promessaDeNumero = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numero = parseInt(Math.random() * 100);
        resolve(numero)
    },2000);
})

console.log('Esperando o número...')

promessaDeNumero
    .then((valor) => {
        console.log(`O número gerado foi: ${valor}`);
        return valor * 2;
    })
    .then((valor)=>{
        console.log(`O número multiplicado por 2 é: ${valor}`);
    })
    .catch((err) => {
        console.log(`Deu erro: ${err}`);
    })
    .finally(() => {
        console.log('Finalizou');
    })