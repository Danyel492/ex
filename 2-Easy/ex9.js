function isUniform(frase){
    let tudo = frase.toLowerCase().replace(/\s/g,'').split('').sort()

    let letra = tudo[0]

    return letra
}

console.log(isUniform('This is Thee')) // true
console.log(isUniform('ssd')) // false
console.log(isUniform('aabbcc')) // true