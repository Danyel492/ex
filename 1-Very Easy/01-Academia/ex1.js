/*
Escreva uma função que recebe um numero qualquer de numeros inteiros como argumentos e retorne a média aritimetica entre eles
*/

function mediaAritimetica(...numeros) {
  let soma = 0
  for (let numero of numeros) {
    soma += numero
  }
  return soma / numeros.length

}
console.log(mediaAritimetica(10,10,10,10,10,9.2))