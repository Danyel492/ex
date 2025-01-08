/*
Escreva uma função que recebe um número e retorna uma quantidade equivalente de "chunks" separados por um traço "-" sem utilizar nenhuma estrutura de repetição (while, dowhile, for, etc).
Exemplo:
Entrada: (4)
Saída: "chunk-chunk-chunk-chunk"
*/

function chunk(n) {
  if (n === 0) {
    return '';
  }

  if (n === 1) {
    return 'chunk';
  } else {

      return 'chunk-' + chunk(n - 1);
  }
}
console.log(chunk(5)); // chunk-chunk-chunk-chunk