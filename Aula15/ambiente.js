let num = [5, 8, 4]


num[3] = 6;


num.push(7)

/*
console.log(`Nosso vetor é o ${num}`)
console.log(`O tamanho do array é ${num.length}`)
*/

num.sort();

/*
console.log(`######`)
console.log(`Nosso vetor é o ${num}`)
console.log(`O tamanho do array é ${num.length}`)
*/

/*
for (let i = 0; i < num.length; i++) {

    /*
    console.log(`Na posição ${i} temos o valor ${num[i]}`)
    }
    */
   
   
for (let i in num) {
    console.log(`Na posição ${i} temos o valor ${num[i]}`)
}

console.log(num.indexOf(9))