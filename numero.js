var prompt = require("prompt-sync")()

//@author Pedro Jardel Lima

/*Método que consiste em somar os números digitados, a quantidade de números 
digitados e trazer o maior número digitado, utilizando DO e WHILE */

console.log("Informe numeros para utilizar o programa, para finalizar digite '0' ")

var soma = 0
var contador = 0
var maior = 0

do {
    var num = Number(prompt("Número: "))

    if (num == 0) {

        var confirma = prompt("Confirma a saída do programa? (S/N) ")

        if (confirma == "S" || confirma == "s") {
            break
        } else {
            continue
        }
    }
    soma = soma + num
    contador = contador + 1
    if (maior < num) {
        var maior = num;
    }
} while (true)

console.log(`Números digitados: ${contador}`)
console.log()
console.log(`Soma dos Números: ${soma}`)
console.log()
console.log(`Maior número: ${maior}`)