let num = document.querySelector('input#num')
let lista = document.getElementById('lista')
let array = []
let res = document.querySelector('div#resultado')

function adicionar() {
    if (num.value.length == 0 || num.value < 1 || num.value > 100 || array.indexOf(num.value) !== -1) {
        window.alert('[ERRO] Valor inválido ou já existente...')
    } else {
        res.innerHTML = ``
        if (array.length == 0){
            lista.innerHTML = ''
        }
        array.push(num.value)
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        num.value = ''
    }
}

function finalizar() {
    if (array.length == 0) {
        window.alert('[ERRO] Sem dados para calcular...')
    } else {    
        array.sort()
        var soma = 0
        for (var i = 0; i < array.length; i++) {
            soma += Number(array[i])
        }
        
        res.innerHTML = `<p>Ao todo, temos ${array.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${array[array.length - 1]}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${array[0]}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${soma / array.length}.</p>`
    }
}