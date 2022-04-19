function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var horaTexto = data.getHours().toString() + ' horas e ' + data.getMinutes().toString() + ' minutos.'
    msg.innerHTML = `Agora são ${horaTexto}`
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'img/fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = 'img/fototarde.png'
        document.body.style.background = '#e49d66'
    } else {
        // BOA NOITE
        img.src = 'img/fotonoite.png'
        document.body.style.background = '#232d33'
    }
}