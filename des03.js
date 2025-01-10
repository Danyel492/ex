function reverse(...argumentos){
    let result = []
    for (let i = argumentos.length - 1; i >= 0; i--){
        result.push(argumentos[i])
    }
    return result
}


console.log(reverse(0, 9, 6, 8, 9, 1, 5, 7))
console.log(reverse('Oh', 'Hi', 'Mark'))
console.log(reverse(false, true, true, true))
console.log(reverse("It's", "not", true, 0))
