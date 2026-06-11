// # Lista de Exercícios - Estruturas Condicionais

// ## 1. Maior entre dois números
// Faça um programa que peça dois números e imprima o maior deles.

// > Dica: para realizar a inserção de dados pelo usuário utilize a função `input("texto para o usuario")`.

// let numMenor = Number(prompt("Digite um número:"))

// let numMaior = Number(prompt("Digite mais um número:"))

// if (numMaior > numMenor){
//     alert(`${numMaior} É maior`)
// } else {
//     alert(`${numMenor} É maior`)    
// }

/* ## 2. Número positivo ou negativo
Faça um programa que peça um valor e mostre na tela se o valor é positivo ou negativo. */

// let n1 = Number(prompt("Digite um número:"))

// if (n1 > 0){
//     alert(`${n1} > 0 = É positivo.`)
// } else {
//     alert(`${n1} É negativo!`)
// }

// // ## 3. Identificação de sexo
// // Faça um programa que verifique se uma letra digitada é **"F"** ou **"M"**.

// let letra = prompt("Qual o seu sexo?") .toLowerCase()

// if (letra === "f") {
//     alert("Feminino")
// } else if (letra === "m") {
//     alert("Masculino")
// } else {
//     alert("Sexo inválido")
// }

/* ## 4. Vogal ou consoante
Faça um programa que verifique se uma letra digitada é vogal ou consoante. */

let vogal = prompt("Digite uma letra");

if (vogal === "a" vogal === "e" vogal === "i" vogal === "o" vogal = "u"){
    alert(`${vogal} é vogal`)
} else {
    alert(`${vogal} é consoante`)
}

// ## 5. Média de notas
// Faça um programa para a leitura de duas notas parciais de um aluno.

// Exiba:

// - **Aprovado**, se a média for maior ou igual a 7;
// - **Aprovado com Distinção**, se a média for igual a 10;
// - **Reprovado**, se a média for menor que 7.

let nota1 = Number(prompt("Digite uma nota:"))

let nota2 = Number(prompt("Digite uma nota:"))

let nota3 = Number(prompt("Digite uma nota:"))

let media = (nota1 + nota2 + nota3)/3

if (media === 10) {
    alert("Aprovado com Distinção! XD")
} if else (media => 7) {
    alert("Aprovado! :)")
} else {
    alert("Reprovado... :(")
}

// ## 6. Maior de três números
// Faça um programa que leia três números e mostre o maior deles.

let n1 = 17;

let n2 = 16;

let n3 = 21;

if (n1 > n2 && n3 > n1 && n3 > ){
           
}