// =========================
// 1. Calculadora simples
// =========================

let num1 = 20;
let num2 = 5;

console.log("Soma:", num1 + num2);
console.log("Subtração:", num1 - num2);
console.log("Multiplicação:", num1 * num2);
console.log("Divisão:", num1 / num2);


// =========================
// 2. Resto da divisão
// =========================

let numeroParImpar = 7;

if (numeroParImpar % 2 === 0) {
    console.log("Par");
} else {
    console.log("Ímpar");
}


// =========================
// 3. Potência
// =========================

let numeroPotencia = 4;

console.log("Quadrado:", numeroPotencia ** 2);
console.log("Cubo:", numeroPotencia ** 3);


// =========================
// 4. Conversão de temperatura
// =========================

let celsius = 25;
let fahrenheit = (celsius * 9 / 5) + 32;

console.log("Fahrenheit:", fahrenheit);


// =========================
// 5. Média aritmética
// =========================

let nota1 = 8;
let nota2 = 7;
let nota3 = 9;

let media = (nota1 + nota2 + nota3) / 3;

console.log("Média:", media.toFixed(2));


// =========================
// 6. Cálculo de troco
// =========================

let precoProduto = 35.50;
let valorPago = 50;

let troco = valorPago - precoProduto;

console.log("Troco: R$", troco.toFixed(2));


// =========================
// 7. Igual ou diferente?
// =========================

let valor1 = 10;
let valor2 = "10";

console.log(valor1 == valor2);
console.log(valor1 === valor2);


// =========================
// 8. Maior ou menor?
// =========================

let numero1 = 15;
let numero2 = 8;

if (numero1 > numero2) {
    console.log(numero1 + " é maior");
} else {
    console.log(numero2 + " é maior");
}


// =========================
// 9. Aprovado ou reprovado?
// =========================

let notaAluno = 7.5;

console.log(notaAluno >= 7 ? "Aprovado" : "Reprovado");


// =========================
// 10. Verificação de idade
// =========================

let idade = 16;

console.log(idade >= 18 ? "Maior de idade" : "Menor de idade");


// =========================
// 11. Comparação de strings
// =========================

let palavra1 = "JavaScript";
let palavra2 = "JavaScript";
let palavra3 = "javascript";

console.log(palavra1 === palavra2);
console.log(palavra1 !== palavra3);


// =========================
// 12. Faixa de preço
// =========================

let preco = 50;

console.log(preco >= 10 && preco <= 100);


// =========================
// 13. E lógico (&&)
// =========================

let numeroPositivoPar = 8;

console.log(numeroPositivoPar > 0 && numeroPositivoPar % 2 === 0);


// =========================
// 14. OU lógico (||)
// =========================

let usuario = "admin";

console.log(usuario === "admin" || usuario === "root");


// =========================
// 15. NÃO lógico (!)
// =========================

let logado = true;

console.log(!logado);


// =========================
// 16. Validação de formulário
// =========================

let idadeCadastro = 20;
let email = "teste@email.com";

console.log(idadeCadastro > 18 && email !== "");


// =========================
// 17. Desconto especial
// =========================

let assinante = false;
let totalCompra = 250;

console.log(assinante || totalCompra > 200);


// =========================
// 18. Acesso restrito
// =========================

let maiorIdade = true;
let contaAtiva = true;
let banido = false;

console.log(maiorIdade && contaAtiva && !banido);


// =========================
// 19. Par e dentro do intervalo
// =========================

let numeroIntervalo = 50;

console.log(
    numeroIntervalo % 2 === 0 &&
    numeroIntervalo >= 1 &&
    numeroIntervalo <= 100
);


// =========================
// 20. Classificação de nota
// =========================

let notaClassificacao = 8;

if (notaClassificacao >= 9) {
    console.log("Excelente");
} else if (notaClassificacao >= 7) {
    console.log("Aprovado");
} else if (notaClassificacao >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}


// =========================
// 21. Calculadora de IMC
// =========================

let peso = 70;
let altura = 1.75;

let imc = peso / (altura ** 2);

console.log("IMC:", imc.toFixed(2));

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc < 25) {
    console.log("Normal");
} else if (imc < 30) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidade");
}


// =========================
// 22. Jogo de adivinhar o número
// =========================

let numeroSecreto = 42;
let palpite = 30;

if (palpite === numeroSecreto) {
    console.log("Você acertou!");
} else if (palpite > numeroSecreto) {
    console.log("O número secreto é menor.");
} else {
    console.log("O número secreto é maior.");
}