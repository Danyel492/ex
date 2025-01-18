/*
----------------------------Codigo da aula
function smallerPairs(pair) {
    const result = []
    for (let i = 0; i < pair[0]; i++) {
        for (let j = 0; j <= pair[1]; j++) {
            result.push([i, j])
        }
    }
    return result
}
*/// OBS.: Fui muito butto e fiz muito mais do que precisava, mas deu o mesmo resultado no final
function coordenadas(...par) {
    const resultado = []
    const x = par[0]
    const y = par[1]
    const repeticoes = (x + 1) * (y + 1)
    let p = 0
    let s = 0
    if (x < 0 || y < 0) {
        return resultado
    }
    for (let i = 1; i <= repeticoes; i++) {
        if (i === 1) {
            p = 0
            s = 0
        } else if (s !== y) {
            s++
        } else {
            s = 0
            p++
        }
        resultado.push([p, s])
    }
    return resultado
}
console.log(coordenadas(2, 2)) // [[ 0, 0 ], [ 0, 1 ],[ 0, 2 ], [ 1, 0 ],[ 1, 1 ], [ 1, 2 ],[ 2, 0 ], [ 2, 1 ],[ 2, 2 ]]
console.log(coordenadas(2, 7)) // [[ 0, 0 ], [ 0, 1 ], [ 0, 2 ],[ 0, 3 ], [ 0, 4 ], [ 0, 5 ],[ 0, 6 ], [ 0, 7 ], [ 1, 0 ],[ 1, 1 ], [ 1, 2 ], [ 1, 3 ],[ 1, 4 ], [ 1, 5 ], [ 1, 6 ],[ 1, 7 ], [ 2, 0 ], [ 2, 1 ],[ 2, 2 ], [ 2, 3 ], [ 2, 4 ],[ 2, 5 ], [ 2, 6 ], [ 2, 7 ]]
console.log(coordenadas(-3, -3)) // []
console.log(coordenadas(7, 6)) // [[ 0, 0 ], [ 0, 1 ], [ 0, 2 ], [ 0, 3 ],[ 0, 4 ], [ 0, 5 ], [ 0, 6 ], [ 1, 0 ],[ 1, 1 ], [ 1, 2 ], [ 1, 3 ], [ 1, 4 ],[ 1, 5 ], [ 1, 6 ], [ 2, 0 ], [ 2, 1 ],[ 2, 2 ], [ 2, 3 ], [ 2, 4 ], [ 2, 5 ],[ 2, 6 ], [ 3, 0 ], [ 3, 1 ], [ 3, 2 ],[ 3, 3 ], [ 3, 4 ], [ 3, 5 ], [ 3, 6 ],[ 4, 0 ], [ 4, 1 ], [ 4, 2 ], [ 4, 3 ],[ 4, 4 ], [ 4, 5 ], [ 4, 6 ], [ 5, 0 ],[ 5, 1 ], [ 5, 2 ], [ 5, 3 ], [ 5, 4 ],[ 5, 5 ], [ 5, 6 ], [ 6, 0 ], [ 6, 1 ],[ 6, 2 ], [ 6, 3 ], [ 6, 4 ], [ 6, 5 ],[ 6, 6 ], [ 7, 0 ], [ 7, 1 ], [ 7, 2 ],[ 7, 3 ], [ 7, 4 ], [ 7, 5 ], [ 7, 6 ]]
console.log(coordenadas(7, 2)) // [[ 0, 0 ], [ 0, 1 ], [ 0, 2 ],[ 1, 0 ], [ 1, 1 ], [ 1, 2 ],[ 2, 0 ], [ 2, 1 ], [ 2, 2 ],[ 3, 0 ], [ 3, 1 ], [ 3, 2 ],[ 4, 0 ], [ 4, 1 ], [ 4, 2 ],[ 5, 0 ], [ 5, 1 ], [ 5, 2 ],[ 6, 0 ], [ 6, 1 ], [ 6, 2 ],[ 7, 0 ], [ 7, 1 ], [ 7, 2 ]]