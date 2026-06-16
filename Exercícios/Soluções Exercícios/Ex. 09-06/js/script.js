// // # Lista de Exercícios - Estruturas Condicionais

// // ## 1. Maior entre dois números
// // Faça um programa que peça dois números e imprima o maior deles.

// // > Dica: para realizar a inserção de dados pelo usuário utilize a função `input("texto para o usuario")`.

// // let numMenor = Number(prompt("Digite um número:"))

// // let numMaior = Number(prompt("Digite mais um número:"))

// // if (numMaior > numMenor){
// //     alert(`${numMaior} É maior`)
// // } else {
// //     alert(`${numMenor} É maior`)    
// // }

// /* ## 2. Número positivo ou negativo
// Faça um programa que peça um valor e mostre na tela se o valor é positivo ou negativo. */

// // let n1 = Number(prompt("Digite um número:"))

// // if (n1 > 0){
// //     alert(`${n1} > 0 = É positivo.`)
// // } else {
// //     alert(`${n1} É negativo!`)
// // }

// // // ## 3. Identificação de sexo
// // // Faça um programa que verifique se uma letra digitada é **"F"** ou **"M"**.

// // let letra = prompt("Qual o seu sexo?") .toLowerCase()

// // if (letra === "f") {
// //     alert("Feminino")
// // } else if (letra === "m") {
// //     alert("Masculino")
// // } else {
// //     alert("Sexo inválido")
// // }

// /* ## 4. Vogal ou consoante
// Faça um programa que verifique se uma letra digitada é vogal ou consoante. */

// // let vogal = prompt("Digite uma letra");

// // if (vogal === "a" || vogal === "e" || vogal === "i" || vogal === "o" || vogal === "u"){
// //     alert(`${vogal} é vogal`)
// // } else {
// //     alert(`${vogal} é consoante`)
// // }

// // ## 5. Média de notas
// // Faça um programa para a leitura de duas notas parciais de um aluno.

// // Exiba:

// // - **Aprovado**, se a média for maior ou igual a 7;
// // - **Aprovado com Distinção**, se a média for igual a 10;
// // - **Reprovado**, se a média for menor que 7.

// // let nota1 = Number(prompt("Digite uma nota:"))

// // let nota2 = Number(prompt("Digite uma nota:"))

// // let nota3 = Number(prompt("Digite uma nota:"))

// // let media = (nota1 + nota2 + nota3)/3

// // if (media === 10) {
// //     alert("Aprovado com Distinção! XD")
// // } else if (media >= 7) {
// //     alert("Aprovado! :)")
// // } else {
// //     alert("Reprovado... :(")
// // }

// // ## 6. Maior de três números
// // Faça um programa que leia três números e mostre o maior deles.

// // let n1 = Number(prompt("Digite um número:"));

// // let n2 = Number(prompt("Digite outro número:"));

// // let n3 = Number(prompt("Digite mais um número:"));

// // if (n1 > n2 && n1 > n3){
// //     alert(`${n1} é o maior número!`)
// // } else if (n2 > n1 && n2 > n3){
// //     alert(`${n2} é o maior número!`)
// // } else {
// //     alert(`${n3} é o maior número!`)
// // }

// // ## 7. Maior e menor de três números
// // Faça um programa que leia três números e mostre o maior e o menor deles.

// // let num1 = Number(prompt("Digite um número:"));

// // let num2 = Number(prompt("Digite outro número:"));

// // let num3 = Number(prompt("Digite mais um número:"));

// // if (num1 > num2 && num1 > num3 && num2 > num3){
// //     alert(`${num1} é o maior número e ${num3} é o menor número!`)
// // } else if (num2 > num1 && num2 > num3 && num3 > num1){
// //     alert(`${num2} é o maior número e ${num1} é o menor número!`)
// // } else {
// //     alert(`${num3} é o maior número e ${num2} é o menor número!`)
// // }

// // ## 8. Produto mais barato
// // Faça um programa que pergunte o preço de três produtos e informe qual produto deve ser comprado, sabendo que a decisão é sempre pelo mais barato.

// // let p1 = Number(prompt("Qual o valor do primeiro produto? R$:"));

// // let p2 = Number(prompt("Qual o valor do segundo produto? R$:"));

// // let p3 = Number(prompt("Qual o valor do terceiro produto? R$:"));

// // if (p1 < p2 && p1 < p3){
// //     alert(`O primeiro produto é o mais barato! R$:${p1}`)
// // } else if (p2 < p1 && p2 < p3){
// //     alert(`O segundo produto é o mais barato! R$:${p2}`)
// // } else {
// //     alert(`O terceiro produto é o mais barato! R$:${p3}`)
// // }

// // ## 9. Ordem decrescente
// // Faça um programa que leia três números e mostre-os em ordem decrescente.

// // let n1 = Number(prompt("Digite um número:"))

// // let n2 = Number(prompt("Digite outro número:"))

// // let n3 = Number(prompt("Digite mais um número:"))

// // if (n1 >= n2 && n2 >= n3){
// //     alert('${n1}, ${n2}, ${n3}')
// // } else if (n1 >= n3 && n3 >= n2){
// //     alert('${n1}, ${n3}, ${n2}')
// // } else if (n2 >= n1 && n1 >=n3){
// //     alert('${n')
// // } else if (n2 >= n3 && n3 >= n1){
// //     alert('${n2}, ${n3}, ${n1}')
// // } else if (n3 >= n1 && n1 > n2){
// //     alert('${n3}, ${n1}, ${n2}')
// // } else {
// //     alert('${n3}, ${n2}, ${n1}')
// // } 

// // ## 10. Turno de estudo
// // Faça um programa que pergunte em que turno você estuda.

// // Digite:

// // - M → Matutino
// // - V → Vespertino
// // - N → Noturno

// // Exiba:

// // - "Bom dia!"
// // - "Boa tarde!"
// // - "Boa noite!"
// // - "Valor inválido"

// let turno = prompt("Qual turno você estuda? M = Matutino, V = Vespertino e N = Noturno") .toLowerCase ()

// if (turno == "m"){
//     alert("Bom dia!")
// } else if (turno == "v"){
//     alert("Boa tarde!")
// } else if (turno == "n"){
//     alert("Boa noite!")
// } else {
//     alert("Turno inválido.")
// }

// // ## 11. Reajuste salarial
// // As organizações CSM resolveram dar um aumento de salário aos seus colaboradores.

// // Faça um programa que receba o salário de um colaborador e calcule o reajuste conforme a tabela:

// // | Faixa Salarial | Percentual |
// // |---------------|------------|
// // | Até R$ 280,00 | 20% |
// // | De R$ 280,01 até R$ 700,00 | 15% |
// // | De R$ 700,01 até R$ 1.500,00 | 10% |
// // | Acima de R$ 1.500,00 | 5% |

// // Após o reajuste, informe:

// // - Salário antes do reajuste;
// // - Percentual aplicado;
// // - Valor do aumento;
// // - Novo salário.

// // let salario = Number(prompt("Qual o seu salário?"))
// // let aumento = 0
// // if (salario < 0){
// //     alert("Número inválido. Digite um valor válido.")
// // }
// // if (salario < 280){
// //     aumento = salario * 20 / 100
// //     salarioFinal = salario + aumento
// //     alert(aumento)
// //     alert(`Seu salário era ${salario} demos 20% de aumento R$${aumento} agora seu salário final é R$${salarioFinal}`)
// // } else if (salario >= 280 && salario < 700){
// //     aumento = salario + aumento
// //     alert(aumento)
// //     alert(`Seu salário era ${salario} demos 15% de aumento R$${aumento} agora seu salário é R$${salarioFinal}`)
// // } else if (salario >= 700 && salario < 1500){
// //     aumento = salario * 10 / 100
// //     salarioFinal = salario + aumento
// //     alert(aumento)
// //     alert(`Seu salário era ${salario} demos 5% de aumento R$${aumento} agora seu salário final é R$${salarioFinal}`)
// // } else {
// //     alert("Valor inválido.")
// // }

// // ## 12. Folha de pagamento
// // Faça um programa para cálculo de folha de pagamento.

// // O programa deverá pedir:

// // - Valor da hora trabalhada;
// // - Quantidade de horas trabalhadas no mês.

// // ### Desconto do IR

// // | Salário Bruto | IR |
// // |--------------|----|
// // | Até R$ 900,00 | Isento |
// // | Até R$ 1.500,00 | 5% |
// // | Até R$ 2.500,00 | 10% |
// // | Acima de R$ 2.500,00 | 20% |

// // Considere:

// // - INSS: 10%
// // - Sindicato: 3%
// // - FGTS: 11% (não é descontado)

// // Exemplo de saída:

// // ```text
// // Salário Bruto (5 * 220)     : R$ 1100,00
// // (-) IR (5%)                : R$   55,00
// // (-) INSS (10%)             : R$  110,00
// // FGTS (11%)                 : R$  121,00
// // Total de descontos         : R$  165,00
// // Salário Líquido            : R$  935,00

// let valorHora = Number(prompt("Qual o valor da sua hora trabalhada: "))
// let quantidadeHoras = Number(prompt("Quantidades de hora trabalhadas:"))
// let salario = valorHora * quantidadeHoras
// let imposto = 0
// let salarioFinal = 0
// let inss = salario * 10 / 100
// let fgts = salario * 11 / 100
// let descontoFgts = fgts - salario 

// if(salario <= 900){
//     alert(`O seu salário é de R$${salario} e você está isento do IR`)
// }else if(salario > 900 && salario <=1500){
//     imposto = salario * 5 / 100
//     salarioFinal =  salario - imposto - inss
//     alert(`O seu salário é de R$${salarioFinal} e foi descontado o IR 10% R$${imposto} e o INSS R$${inss}(10%) e seu  FGTS foi de 11% R$${descontoFgts}`)
// }else if(salario > 1500 && salario <= 2500){
//     imposto = salario * 10 / 100
//     salarioFinal = salario - imposto - inss
//     alert(`O seu salário é de R$${salarioFinal} e foi descontado o IR 10% R$${imposto} e o INSS R$${inss}(10%)  e seu  FGTS foi de 11% R$${descontoFgts}`)
// }else if(salario > 2500){
//     imposto = salario * 20 / 100
//     salarioFinal = salario - imposto - inss
//     alert(`O seu salário é de R$${salarioFinal} e foi descontado o IR 20% R$${imposto} e o INSS R$${inss}(10%)  e seu  FGTS foi de 11% R$${descontoFgts}`)
// }else{
//     alert("Valor inválido")
// }

// // ## 12+1. Dia da semana
// // Faça um programa que leia um número e exiba o dia correspondente da semana.

// // | Número | Dia |
// // |---------|-----|
// // | 1 | Domingo |
// // | 2 | Segunda |
// // | 3 | Terça |
// // | 4 | Quarta |
// // | 5 | Quinta |
// // | 6 | Sexta |
// // | 7 | Sábado |

// // Caso seja digitado outro valor, exiba:

// // ```text
// // Valor inválido

// let dia = Number(prompt("Digite um número conforme o dia da semana:"))

// switch (dia){
//     case 1: alert(`${dia} | Domingo`)
//     break;
//     case 2: alert(`${dia} | Segunda`)
//     break;
//     case 3: alert(`${dia} | Terça`)
//     break;
//     case 4: alert(`${dia} | Quarta`)
//     break;
//     case 5: alert(`${dia} | Quinta`)
//     break;
//     case 6: alert(`${dia} | Sexta`)
//     break;
//     case 7: alert(`${dia} | Sábado`)
//     break;

//     default: alert("Valor inválido")
// }

// // ## 14. Conceito por média
// // Faça um programa que leia duas notas parciais e calcule a média.

// // | Média | Conceito |
// // |---------|----------|
// // | 9,0 a 10,0 | A |
// // | 7,5 a 9,0 | B |
// // | 6,0 a 7,5 | C |
// // | 4,0 a 6,0 | D |
// // | 0 a 4,0 | E |

// // Exiba:

// // - Notas;
// // - Média;
// // - Conceito;
// // - Situação.

// // Situação:

// // - A, B ou C → APROVADO
// // - D ou E → REPROVADO

// let nota1 = Number(prompt("Digite a sua nota:"))
// let nota2 = Number(prompt("Digite a sua outra nota:"))
// let media = (nota1+nota2) / 2

// if (media >= 9 && media <= 10){
//     alert(`${media} | A
//         suas notas foram ${nota1} e ${nota2} Aprovado`)
// } else if (media >= 7.5 && media < 9){
//     alert(`${media} | B
//         suas notas foram ${nota1} e ${nota2} Aprovado`) 
// } else if (media >=6 && media < 7.5){
//     alert(`${media} | C
//         suas notas foram ${nota1} e ${nota2} Aprovado`)
// } else if (media >= 4 && media < 6){
//     alert(`${media} | D
//         suas notas foram ${nota1} e ${nota2} Reprovado`) 
// } else if (media >= 0 && media < 4){
//     alert(`${media} | E
//         suas notas foram ${nota1} e ${nota2} Reprovado`)
// } else {
//     alert(`Os valores estão inválidos.`) 
// }

/*## 15. Tipos de triângulo
Faça um programa que peça os três lados de um triângulo.

Verifique se os lados podem formar um triângulo.

Se formarem, informe se é:

- Equilátero → três lados iguais;
- Isósceles → dois lados iguais;
- Escaleno → três lados diferentes.*/

let l1 = parseFloat(prompt("(Ex 15) Lado 1:"));
let l2 = parseFloat(prompt("(Ex 15) Lado 2:"));
let l3 = parseFloat(prompt("(Ex 15) Lado 3:"));

if ((l1 + l2 > l3))
// //## 16. Equação do segundo grau
// Faça um programa que calcule as raízes da equação:

// ```text
// ax² + bx + c = 0
// ```

// Regras:

// - Se `a = 0`, a equação não é de segundo grau.
// - Se `Δ < 0`, não possui raízes reais.
// - Se `Δ = 0`, possui apenas uma raiz real.
// - Se `Δ > 0`, possui duas raízes reais.

// --- */

// let a = Number(prompt("Digite o valor de A:"))
// let b = Number(prompt("Digite o valor de B:"))
// let c = Number(prompt("Digite o valor de C:"))

// if (a === 0){
//     alert("A equação não é do segundo grau.")
// } else {
//     a ** 2 - 4 * a *  c

//     if (delta < 0){
//         console.log("A equação não possui raízes reais.");
//     } else if (delta === 0) {
//         const x = -b / (2 * a);
//         console.log(`A equação possui uma razão real: x = ${X}`)
//     } else {
//         const x1 = (-b + Math.sqrt(delta)) / (2 * a);
//         const x2 = (-b + Math.sqrt(delta)) / (2 * a);
        
//         console.log("A equação possui duas raízes reais:")
//         console.log(`x1 = ${x1}`);
//         console.log(`x2 = ${x2}`);
//     }
// }

// /* ## 17. Ano bissexto
// Faça um programa que leia um ano e informe se ele é ou não bissexto. */

// /*É divisível por 4 e não é divisível por 100, ou é divisível por 400*/

// let ano = Number(prompt("Qual ano você deseja verificar?"))

// if (ano % 4 === 0 && ano % 100 !== 0 || ano / 400 === 0){
//     alert(`${ano} é bisexto.`)
// } else {
//     alert(`${ano} não é bisexto.`)
// }

// /* ## 18. Par ou ímpar
// Faça um programa que leia um número inteiro e determine se ele é par ou ímpar.

// > Dica: utilize o operador módulo `%`. */

// let numberInter = Number(prompt("Digite um número inteiro:"))

// if (numberInter % 2 === 0 && numberInter !== 0){
//     alert("Número é par")
// } else {
//     alert("Número é impar")
// }

// /*## 19. Características de um número
// Faça um programa que leia um número e pergunte qual operação deseja realizar.

// O resultado deve indicar se o número é:

// - Par ou ímpar;
// - Positivo ou negativo.*/

// let numero = Number(prompt("Digite um número para saber se ele é impar ou par e positivo ou negativo."))

// if (numero > 0){
//     if (numero > 0){
//         alert("Par e positivo")
//     } else {
//         alert("Par e negativo")
//     }
// } 

// /*## 20. Investigação criminal
// Faça um programa que faça as seguintes perguntas:

// 1. Telefonou para a vítima?
// 2. Esteve no local do crime?
// 3. Mora perto da vítima?
// 4. Devia para a vítima?
// 5. Já trabalhou com a vítima?

// Classificação:

// | Respostas positivas | Classificação |
// |---------------------|--------------|
// | 2 | Suspeita |
// | 3 ou 4 | Cúmplice |
// | 5 | Assassino |
// | Caso contrário | Inocente |*/

// 0
// /*## 21. Maior e menor entre dois números
// Faça um programa que peça dois números ao usuário e mostre qual o maior e qual o menor.*/

// let nume1 = Number(prompt("Digite um número:"))

// let nume2 = Number(prompt("Digite mais um número:"))

// if (nume1 > nume2){
//     alert(`${nume1} É o maior e ${nume2} é o menor.`)
// } else if (nume2 > nume1) {
//     alert(`${nume2} É o maior e ${nume1} é o menor.`)
// } else {
//     alert("Digite um número válido.")
// }

// /*## 22. Maior e menor entre três inteiros
// Faça um programa que receba três números inteiros e informe qual deles é o maior e qual é o menor.

// ### Desafio
// Você consegue criar mais de uma solução? */

// let n1 =Number(prompt("Digite um número:"))
// let n2 =Number(prompt("Digite outro número:"))
// let n3 =Number(prompt("Digite mais um número:"))

// if (n1 > n2 && n2 > n3){
//     alert("${n1} é o maior número e ${n3} é o menor.")
// } else if (n1 > n3 && n3 > n2){
//     alert("${n1} é o maior número e ${n2} é o menor.")
// } else if (n2 > n1 && n1 > n3){
//     alert("${n2} é o maior número e ${n3} é o menor.")
// } else if (n2 > n3 && n3 > n1){
//     alert("${n2} é o maior número e ${n1} é o menor.")
// } else if (n3 > n1 && n1 > n2){
//     alert("${n3} é o maior número e ${n2} é o menor.")
// } else {
//     alert("${n3} é o maior número e ${n1} é o menor.")
// }

// /* ## 23. Par ou ímpar em C
// Escreva um programa em C que receba um número inteiro e diga se ele é par ou ímpar.

// > Dica: utilize o operador `%`. */

// let nu1 = Number(prompt("Digite um número:"))

// if (num1 % 2 == 0){
//     alert("É par")
// } else {
//     alert("É ímpar!")
// }

// /*## 24. Circunferência
// Escreva um programa que pergunte o raio de uma circunferência e mostre:

// - Diâmetro;
// - Comprimento;
// - Área.

// ---*/

// /*## 25. Doação de sangue
// Para doar sangue é necessário ter entre 18 e 67 anos.

// Faça um programa que pergunte a idade de uma pessoa e informe se ela pode doar sangue.

// > Utilize os operadores lógicos `&&` e `||`.

// ---*/

// let idade = Number(prompt("Digite a sua idade e descubra se pode doar sangue:"))

// if (idade >= 18 && idade <= 67){
//     alert("Pode doar sangue!")
// } else {
//     alert("Não pode doar sangue!")
// }

// /*## 26. Validação de data
// Escreva um programa que pergunte:

// - Dia;
// - Mês;
// - Ano.

// Informe se a data é válida ou não.

// Caso não seja válida, informe o motivo.

// ### Considere

// - Todos os meses possuem 31 dias;
// - O ano atual é 2013.*/

// let dia = Number(prompt("Digite um dia:"))

// let mes = Number(prompt("Digite um mês:"))

// let ano = Number(prompt("Digite um ano:"))

// if (dia > 0 && dia <= 31) {
//     if (mes > 0 && mes <= 12){
//         if (ano > 0 && ano <= 2013) {
//     }
//   }
// } else {
//     alert("Isso não é uma data")
// }

/*## 27. Troca de valores
Crie um programa que:

1. Leia um número e armazene em `x`;
2. Leia outro número e armazene em `y`;
3. Mostre os valores;
4. Troque os valores entre as variáveis;
5. Mostre os valores após a troca.

Exemplo:

```text
Antes:
x = 10
y = 20

Depois:
x = 20
y = 10
```*/

let x = 15;
let y = 22;

let temp = x
x = y;
y = temp;

alert(``)