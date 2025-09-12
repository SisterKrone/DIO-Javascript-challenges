/**
 * Crie uma classe para representar carros.
 * Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilômetro rodado.
 * Crie um método que dado a quantidade de quilômetros e o preço do combustível, nos dê o valor 
 * gasto em reais para realizar o pecurso.
 */

class Carro {
    marca;
    cor;
    kmPorLitro;
    constructor(marca, cor, kmPorLitro) {
        this.marca = marca;
        this.cor = cor;
        this.kmPorLitro = kmPorLitro;
    }

    calcularGastoEmReais(precoCombustivel, distanciaKm) {
        return ((distanciaKm / this.kmPorLitro) * precoCombustivel).toFixed(2);
    }
}

(function main() {

    const uno = new Carro('Fiat', 'Vermelho', 12);
    const palio = new Carro('Fiat', 'Azul', 10)

    console.log(palio.calcularGastoEmReais(5,70));
    console.log(uno.calcularGastoEmReais(5,70));
})();