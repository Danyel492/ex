function fatorar(num) {
    if (num === 0 || num === 1) {
        return 1
    }
    return num *= fatorar(num-1)
}

console.log(fatorar(3)) // 6
console.log(fatorar(4)) // 24
console.log(fatorar(5)) // 120
console.log(fatorar(6)) // 720
console.log(fatorar(10)) // 3628800