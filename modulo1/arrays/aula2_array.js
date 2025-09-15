/** 
 * Método .push é utilizado para adicionar itens a um array.
 * Outro método de adicionar elementos é passando o índice de onde eu quero colocá-lo
 * no nosso exemplo, alunos[4] = 'Vinícius';
 * 
 * Método .pop() remove o último item do array, no nosso caso, const alunos2= ['1','2','3']; o .pop
 * irá remover o '3'
 * 
 * Método .shift() remove o primeiro item de um array, no nosso caso, const alunos3= ['1','2','3'] 
 * o.shift() irá remover o '1'
    
 */

(function main(){
    const alunos = ['João','Vitor', 'Marina'];
    alunos.push('Renan');
    alunos[4] = 'Vinícius'
    console.log(alunos);

    const alunos2= ['1','2','3'];
    console.log(alunos2);
    console.log(alunos2.pop());
    console.log(alunos2);

    const alunos3= ['1','2','3']
    console.log(alunos3);
    console.log(alunos3.shift());
    console.log(alunos3);

})();