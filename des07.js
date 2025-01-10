/*
Tarefa:
pegar um array de arrays com numeros e retornar apenas um array com todos os numeros em ordem crescente
exemplo: entrada: [[6,5,4],[3,2,1],[9,8,7]]
saída: [1,2,3,4,5,6,7,8,9]
*/


function reorder(conjArray) {
    let array = []
    for (let i = 0; i < conjArray.length; i++) {
        array = array.concat(conjArray[i])
    }

    return array.sort()
}

console.log(reorder([[6,5,4],[3,2,1],[9,8,7]])) // [1,2,3,4,5,6,7,8,9]