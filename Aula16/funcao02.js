function soma(n1=0, n2=0) { // Para evitar que o returno seja NaN, que acontece caso um dos parâmetros não seja informado, atribuímos o valor 0 aos parâmetros
    return n1 + n2
}

console.log(soma(2, 5))