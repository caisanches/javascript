// var hora = 8
var horaCompleta = (new Date().getHours().toString()) + ' horas e ' + (new Date().getMinutes().toString() + ' minutos.')
var hora = new Date().getHours().toString()
console.log(`Agora são exatamente ${horaCompleta}`)
if (hora < 12) {
    console.log ('Bom Dia!');
} else if (hora <= 18) {
    console.log ('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}