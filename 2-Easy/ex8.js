function citacao(nomeCompleto) {
    let maiuscula = nomeCompleto.toUpperCase()
    let arrays = maiuscula.split(' ')
    let result = []
    if (nomeCompleto === '') {
        return 'Digite o nome para citação'
    } else if (arrays.length === 1) {
        return arrays[0]
    } else {
        let sobrenome = arrays[arrays.length - 1] + ', ' //Sobrenome Principal
        for (let i = 0; i <= arrays.length - 2; i++) {
            result.push(arrays[i].charAt() + '.' )
        }
        return sobrenome + result.join('')
    }
}

console.log(citacao('Isaac Larrubia Ferreira Pontes')) // PONTES, I. L. F.
console.log(citacao('John Ronald Reuel Tolkien')) // TOLKIEN, J. R. R.
console.log(citacao('christopher james paolini')) // PAOLINI, C. J.
console.log(citacao('Suzanne Marie Collins')) // COLLINS, S. M.