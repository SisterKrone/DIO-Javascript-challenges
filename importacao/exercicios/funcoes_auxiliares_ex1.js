function classificarMedia(media) {
    let resultados = [];
    for (let i = 0; i < media.length; i++) {
        if (media[i] < 5 && media[i] >= 0) {
            resultados[i] = (`${media[i]} Reprovado`);
        }
        else if (media[i] >= 5 && media[i] < 7) {
            resultados[i] = (`${media[i]} Recuperação`);
        }
        else if (media[i] >= 7) {
            resultados[i] = (`${media[i]} Aprovado`);
        }
        else {
            resultados[i] = (`${media[i]} Média inválida`);
        }
    }
    return resultados.toString();
}

function print(texto) {
    console.log(texto);
}

module.exports = { classificarMedia, print };