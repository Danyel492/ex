function recursiva (numRepeticoes) {
    let palavra = 'chunk-'
    if (numRepeticoes === 0) {
        return ''
    }
    return palavra + recursiva(numRepeticoes - 1)

}
console.log(recursiva(5)) // chunkchunkchunk