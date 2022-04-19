function calcular() {
    var num = document.querySelector('input#num')
    var tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('[ERRO] Dados Incompletos!')
    } else {
        var numero = num.value;
        tab.innerHTML = '' 
        for (var i = 1; i <= 10; i++) {
            var item = document.createElement('option')
            item.text = `${numero} x ${i} = ${numero * i}`
            // item.value = `tab${i}` ---> ESTA LINHA SERVE PARA APLICAR O "Value" NO ITEM CRIADO. NECESSÁRIO EM ALGUMAS SITUAÇÕES!!!
            tab.appendChild(item)
        }
    }
}