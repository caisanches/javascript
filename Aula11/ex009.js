/*
var pais = 'Brasil';
console.log(`Vivendo em ${pais}`);
if (pais == 'Brasil') {
    console.log('Brasileiro!');
} else {
    console.log('Estrangeiro!');
}
*/

function Verificar() {
    res.innerHTML = 'Resultado: ';

    var paisNasc = document.getElementById("paisNasc").value.toUpperCase();
    var paisAt = document.querySelector('input#paisAt').value.toUpperCase();
    if (paisNasc == paisAt) {
        res.innerHTML += `Nasceu e continua morando em <strong>${paisNasc}</strong>`;
    } else {
        res.innerHTML += `Nascido em <strong>${paisNasc}</strong> e morando em <strong>${paisAt}</strong>`;
    }
}