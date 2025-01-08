function reorder(conjArray) {
    let arrayFinal = []
    for (let i = 0; i <= conjArray.length -1; i++){
        arrayFinal.push(conjArray[i])
    }

    return arrayFinal
}

console.log(reorder([[3,2,1],[6,5,4],[9,8,7]])) // [1,2,3,4,5,6,7,8,9]