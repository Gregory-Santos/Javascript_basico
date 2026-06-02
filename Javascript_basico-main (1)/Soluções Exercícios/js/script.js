// Atividade 1 - Calculadora Simples//

let n1 = 7;

let n2 = 2;

let soma = n1 + n2;

let subtracao = n1 - n2;

let multiplicacao = n1 * n2;

let divisao = n1 / n2;

console.log(soma);

console.log(subtracao);

console.log(multiplicacao);

console.log(divisao);


// Atividade 2 - Impar ou par //

let num4 = 4;

if (n1 % 2 === 0) {
      console.log("O número é par");
} else {
    console.log(" O número é impar");
}

// Atividade 3 - Ao quadrado e ao cubo //

let numero = "6"
let quadrado = numero ** 2;
let cubo = numero ** 3;

console.log("Quadrado:", quadrado);
console.log("Cubo:", cubo);

// Atividade 4. **Conversão de temperatura** — Converta uma temperatura de Celsius para Fahrenheit usando a fórmula `F = (C * 9/5) + 32`.//

let C = 25;

let F = (C * 9/5) + 32;

console.log(F)

// Atividade 5. **Média aritmética** — Receba três notas e calcule a média usando operadores aritméticos. Exiba o resultado com duas casas decimais. //

let nota1 = 7.5;

let nota2 = 3;

let nota3 = 10;

let media = (nota1 + nota2 + nota3) / 3;

console.log(media);

// Atividade 6. **Cálculo de troco** — Simule um caixa: dado o preço de um produto e o valor pago, calcule e exiba o troco. //

let pago = 30;

let valor = 19;

let troco = (pago - valor);

console.log(troco);

// Atividade 7. **Igual ou diferente?** — Compare dois valores usando `==` e `===`. Observe e explique a diferença entre os resultados. //

let valor1 = 67;

let valor2 = "67";

console.log(valor1 == valor2); //verifica apenas o valor

console.log(valor1 === valor2); //verifica o valor E o tipo

// Atividade 8. **Maior ou menor?** — Dados dois números, exiba qual é o maior usando os operadores `>` e `<`.

let maior = 40;

let menor = 16;

if (maior>menor){
    console.log ("40 é maior que 16");
} else {
    console.log("16 menor que 40");
}

// Atividade 9. **Aprovado ou reprovado?** — Dada uma nota, verifique se o aluno foi aprovado (nota `>=` 7) ou reprovado usando um operador de comparação dentro de um `console.log`. //

let nota4 = 6.5;

let nota5 = 7.5;

let nota6 = 9.5;

let resultado = (nota4 + nota5 + nota6) / 3

if(resultado >=7) {
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}

// Atividade 10. **Verificação de idade** — Pergunte a idade do usuário e verifique se ele tem 18 anos ou mais, usando `>=`. //

let idade = 16;

if(idade >=18) {
    console.log("É maior de idade")
} else {
    console.log("É menor de idade")
}

// Atividade 11. **Comparação de strings** — Compare duas strings com `===` e `!==`. Teste com palavras iguais, diferentes e com diferença de maiúsculas/minúsculas.

let palavra1 = "Gregory";

let palavra2 = "Gregury";

console.log(palavra1 !== palavra2)

// Atividade 12. **Faixa de preço** — Verifique se um produto custa entre R$ 10 e R$ 100 usando operadores de comparação. //

let produto = 107;

if(produto >=10 && produto<=100) {
    console.log("O produto custa entre R$10 e R$100")
} else {
    console.log("O produto está fora da faixa de R$10 à R$100")
}

// Atividade 13. **E lógico (`&&`)** — Verifique se um número é ao mesmo tempo positivo **e** par. Exiba `true` ou `false`. //

let npp = 1986;

if(npp > 0 && npp % 2 == 0){
    console.log(true);
}else{
    console.log(false);
}

// Atividade 14. **OU lógico (`||`)** — Verifique se um usuário digitou o nome `"admin"` **ou** `"root"` para simular um login simples.

let nome = "root";

if(nome) {
    console.log()
}

// Atividade 15. **NÃO lógico (`!`)** — Dada uma variável booleana `logado`, use `!` para inverter seu valor e exiba uma mensagem correspondente. //

let = "logado"

// Atividade 16. **Validação de formulário** — Simule a vaidação de um cadastro: o usuário deve ter mais de 18 anos **e** ter informado um e-mail (string não vazia).