/*Exercício 1: ler uma temperatura em graus Celsius, calcular e escrever o valor correspondente em graus Fahrenheit.*/
// const  prompt = require('prompt-sync')();

// let temperatura = parseInt(prompt("Insira a temperatura em graus Celsius: "));

// console.log("A temperatura corresponde a " + (temperatura *1.8 + 32) + " graus Fahrenheit");

/*Exercício 2: ler o número de eleitores de um município, o número de votos brancos, nulos e válidos.
Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.*/

// const prompt = require('prompt-sync')();

// let eleitores = parseInt(prompt("Digite o número de eleitores: "));
// let votosBrancos = parseInt(prompt("Digite o número de votos brancos: "));
// let votosNulos = parseInt(prompt("Digite o número de votos nulos: "));
// let votosValidos = parseInt(prompt("Digite o número de votos válidos: "));

// console.log(votosBrancos * 100 / eleitores + "% de votos brancos");
// console.log(votosNulos * 100 / eleitores + "% de votos nulos");
// console.log(votosValidos * 100 / eleitores + "% de votos válidos");

/*Exercício 3: ler quatro números inteiros e realize as seguintes operações:
● Some 25 ao primeiro inteiro;
● Triplique o valor do segundo inteiro;
● Modifique o valor do terceiro inteiro para 12% do valor original;
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou) dos primeiros três inteiros.*/

// const prompt = require('prompt-sync')();

// let num1 = parseInt(prompt("Digite o primeiro número inteiro: "));
// let num2 = parseInt(prompt("Digite o segundo número inteiro: "));
// let num3 = parseInt(prompt("Digite o terceiro número inteiro: "));
// let num4 = parseInt(prompt("Digite o quarto número inteiro: "));

// let soma = num1 + num2 + num3;
// num1 += 25;
// num2 *= 3;
// num3 = num3 * 12 / 100;
// num4 = soma;

// console.log("O primeiro inteiro vale: " + num1);
// console.log("O segundo  inteiro vale: " + num2);
// console.log("O terceiro inteiro vale: " + num3);
// console.log("O quarto inteiro vale: " + num4);

/*Exercício 4 e 5: ler as notas das duas avaliações de um aluno no semestre, calcular e escrever a média semestral
e a seguinte mensagem: ‘PARABÉNS! Você foi aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para aprovação).
Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a média calculada seja menor que 6,0*/

// const prompt = require('prompt-sync')();

// let nota1 = parseFloat(prompt("Digite a nota 1: "));
// let nota2 = parseFloat(prompt("Digite a nota 2: "));
// let media = (nota1 + nota2)/2;

// console.log("Média semestral: " + media);

// if(media >= 6){
//     console.log("PARABÉNS! Você foi aprovado")
// } else{
//     console.log("Você foi REPROVADO! Estude mais")
// }

/*Exercício 6: Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo.
Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)*/

// const prompt = require('prompt-sync')();

// let ladoA = parseInt(prompt("Digite o valor do lado A: "));
// let ladoB = parseInt(prompt("Digite o valor do lado B: "));
// let ladoC = parseInt(prompt("Digite o valor do lado C: "));

// if(ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB){
//     if(ladoA === ladoB && ladoB === ladoC){
//         console.log("Forma um triângulo equilátero");
//     } else if(ladoA != ladoB && ladoB != ladoC && ladoC != ladoA){
//         console.log("Forma um triângulo escaleno");
//     } else {
//         console.log("Forma um triângulo isósceles");
//     }

// } else {
//     console.log("Não formam um triângulo!")
// }

/*Exercício 7: ler o número de maçãs compradas, calcular e escrever o valor total da compra.
As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze.*/

// const prompt = require('prompt-sync')();

// let quantidade = parseInt(prompt("Digite o número de maçãs compradas: "));

// if (quantidade < 12){
//     console.log("O valor total da compra é R$" + quantidade*0.3);
// } else {
//     console.log("O valor total da compra é: R$" + quantidade*0.25);
// }

/*Exercício 8: ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente. */

// const prompt = require('prompt-sync')();

// let valor1 = prompt("Digite o valor 1: ");
// let valor2 = prompt("Digite o valor 2: ");

// if (valor1 === valor2){
//     console.log("Não devem ser digitados valores iguais!");
// } else if(valor1 < valor2){
//     console.log(valor1 + "," + valor2);
// } else {
//     console.log(valor2 + "," + valor1);
// }

/*Exercício 9: ler o código de origem de um produto e imprimir a região do mesmo, conforme a tabela.*/

// const prompt = require('prompt-sync')();

// let origem = parseInt(prompt("Informe o código de origem do produto:"));

// if(origem === 1){
//     console.log("Sul");
// } else if(origem === 2){
//     console.log("Norte");
// } else if(origem === 3){
//     console.log("Leste");
// } else if(origem === 4){
//     console.log("Oeste");
// } else if(origem === 5 || origem === 6 || (origem >= 25 && origem <= 50)){
//     console.log("Nordeste");
// } else if(origem >= 7 && origem <= 9){
//     console.log("Sudeste");
// } else if(origem >= 10 && origem <= 20){
//     console.log("Centro-Oeste");
// } else {
//     console.log("Produto importado");
// }

/*Exercício 10: ler um número inteiro e escrevê-lo na tela 10 vezes*/

// const prompt = require('prompt-sync')();

// let num = prompt("Digite um número: ");

// for (let i = 0; i<10; i++){
//     console.log(num);
// }

/*Exercício 11: ler uma quantidade indeterminada de valores inteiros.
Para cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR ou ÍMPAR.
O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou NEGATIVO. */

// const prompt = require('prompt-sync')();
// let numero;

// do {
//     numero = parseInt(prompt("Digite um número inteiro (número negativo para encerrar): "));
//     if(numero < 0 || isNaN(numero)){
//         break;
//     } else if(numero % 2 === 0){
//         console.log("É PAR");
//     } else {
//         console.log("É ÍMPAR");
//     }
// } while (numero >= 0);

/*Exercício 12: gerar os números de 1000 a 1999 e escrever aqueles que, divididos por 11, dão resto igual a 5. */

// for(let i = 1000; i <= 1999; i++){
//     if(i % 11 === 5){
//         console.log(i);
//     }
// }

/*Exercício 13: ler 5 valores para uma variável N e, para cada um deles, calcular e mostrar a tabuada de 1 até N, na forma:
1 x N = N
2 x N = 2N
3 x N = 3N */

// const prompt = require('prompt-sync')();

// for(let i = 0; i<5; i++){
//     let num = parseInt(prompt("Digite um número: "));
//     console.log("TABUADA DO NÚMERO " + num);

//     for(let j = 1; j <= num; j++){
//         console.log(j + " X " + num + " = " + j*num);
//     }
// }

/*Exercício 14: receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.*/

// const prompt = require('prompt-sync')();
// let num;
// let cont = 0;
// let soma = 0;

// while(num !== 0){
//     num = parseFloat(prompt("Digite um valor (zero para encerrar): "));
//     if (num !== 0){
//         soma += num;
//         cont++;
//     }
// }

// console.log("A média dos valores informados é: " + soma / cont);

/*Exercício 15: receber um número decimal e o peso de cada número até que o usuário digite o número 0. Fazer a média ponderada desses números e pesos respectivos.*/
// const prompt = require('prompt-sync')();
// let somaNum = 0;
// let pesoTotal = 0;
// let num;
// let peso;
// let media = 0;

// while(num !== 0){
//     num = parseFloat(prompt("Digite um número(zero para sair): "));
//     if (num !== 0){
//         peso = parseFloat(prompt("Digite o peso desse número: "));
//         somaNum += num*peso;
//         pesoTotal += peso;
//     }
// }
// media = somaNum / pesoTotal;
// console.log("A média ponderada dos números e pesos informados é: " + media);

/*Exercício 16: imprimir os 50 primeiros números primos maior que 100. Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.*/

// let contadorPrimos = 0;
// let numero = 101
// let primo;

// while(contadorPrimos < 50){
//     primo = true;
//     if(numero % 2 === 0){
//         primo = false;
//     } else {
//         for(let i = 3; i < numero; i+=2){
//             if(numero % i === 0){
//                 primo = false;
//             }
//         }
//     }
//     if(primo === true){
//         console.log(numero);
//         contadorPrimos++;
//     }
//     numero++;
// }

