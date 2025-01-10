function balanceado(frase) {
    let caracteresOrdenados = frase.toLowerCase().replace(/\s/g, '').split('').sort()
    let verificar = 0
    if (caracteresOrdenados.length % 2 === 1) {
        return false
    } else {
        for (let i = 0; i <= caracteresOrdenados.length - 1; i+=2) {
            if (caracteresOrdenados[i] !== caracteresOrdenados[i + 1]){
                verificar ++
            }
        }
        if (verificar === 0){
            return true
        }
        return false
    }
}

console.log(balanceado('This is Thee')) // true
console.log(balanceado('ssd')) // false
console.log(balanceado('aabbcc')) // true
console.log(balanceado('aabbccty')) // false