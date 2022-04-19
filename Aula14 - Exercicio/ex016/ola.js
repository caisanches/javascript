function contar() {
    var tini = document.querySelector('input#ini')
    var tfim = document.querySelector('input#fim')
    var tpas = document.querySelector('input#pas')
    var res = document.querySelector('div#res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert ('[ERRO] Faltam dados...')
        res.innerHTML = 'Impossivel contar...'
    } else {
        calculo();
    }
    
    function calculo() {
        var ini = Number(tini.value)
        var fim = Number(tfim.value)
        var pas = Number(tpas.value)

        if (pas <= 0) {
            window.alert('[ERRO] Passo inválido!. Considerando PASSO 1...')
            pas = 1
        }

        res.innerHTML = 'Contando: '
        if (ini < fim) {
            for (var i = ini; i <= fim; i += pas) {
                res.innerHTML += `${i} 👉 `;
            }
        } else {
            for (var i = ini; i >= fim; i -= pas) {
                res.innerHTML += `${i} 👉 `;
            }
        }
        res.innerHTML += '🤟'
    }
}