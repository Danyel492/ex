function isUniform(frase){
    let tudo = frase.toLowerCase().split('').sort()

    return tudo
}

console.log(isUniform('This is Thee')) // true
console.log(isUniform('ssd')) // false
console.log(isUniform('aabbcc')) // true