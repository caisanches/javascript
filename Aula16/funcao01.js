function parOuImpar(n) {
    if (n%2 == 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}

let res = parOuImpar(11)
console.log(res)