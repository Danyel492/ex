function citacao(nome){
    let maiuscula = nome.toUpperCase()
    let arrays = maiuscula.split(' ')
    arrays.length -1
    return arrays
}

console.log(citacao('John Ronald Reuel Tolkien')) // 'TOLKIEN, J.R.R.'