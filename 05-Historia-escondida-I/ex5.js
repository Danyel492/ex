function decifrar(frase) {
    frase = frase.toLowerCase()
    frase = frase.replace(/\s/g,'')
    let array = frase.split('')
    array = array.sort()
    results = array.length -1

    return array[results]
}

console.log(decifrar("Lorem ipsum dolore sec avanti")) // v
console.log(decifrar("Hello")) // o
console.log(decifrar("May the force be with you")) // y
console.log(decifrar("Its over nine thousand")) // v