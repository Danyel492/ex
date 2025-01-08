function quadrado(n){
    n = n.toString()
    let array = n.split('')
    for (let i = array.length - 1; i>=0; i --){
        array[i] = array[i] ** 2
    }
    return array.join('')
}

console.log(quadrado(3514)) //925116
console.log(quadrado(94571)) //811625494
console.log(quadrado(24)) //416
console.log(quadrado(745821698)) //49162564413681641