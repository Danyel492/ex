function decifrar(frase) {
    let invertida = []
    let minusculo = frase.toLowerCase()
    let palavras = minusculo.split(" ")
    for (let i = palavras.length -1; i >= 0; i--){
        invertida.push(palavras[i].split('').reverse().join(''))
    }
    invertida = invertida.reverse()

    return invertida.join(' ')
}


console.log(decifrar("Lorem ipsum dolore sec avanti")) // merol muspi erolod ces itnava
console.log(decifrar("This is an apple")) // siht si na elppa
console.log(decifrar("May the force be with you")) // yam eht ecrof eb htiw uoy
console.log(decifrar("It s over nine thousand")) // ti s revo enin dnasuoht
