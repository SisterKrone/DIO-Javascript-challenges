/**
 * Faça um algoritmo que dao as 3 notas tiradas por um aluno em um semestre da faculdade
 * calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.
 *
 * Média = (nota1+nota2+nota3)/3;
 *
 * Classificação:
 * Média menor que 5, reprovado;
 * Média entre 5 e 7, recuperação;
 * Média acima de 7, aprovado.
 */
function calcularMedia(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}

function classificarAluno(n1, n2, n3) {
  const media = calcularMedia(n1, n2, n3);
  console.log("A media é:", media);
  if (media < 5 && media >= 0) {
    console.log("Reprovado!");
  } else if (media >= 5 && media <= 7) {
    console.log("Recuperação");
  } else if (media > 7) {
    console.log("Aprovado");
  } else {
    console.log("Valores inválidos");
  }
}

classificarAluno(10, -5, -5);
