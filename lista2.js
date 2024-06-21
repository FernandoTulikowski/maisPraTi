// /*Exercício 1:calcular a redução do tempo de vida de um fumante.
// Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
// Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
// vida um fumante perderá e exiba o total em dias. */

// const prompt = require('prompt-sync')();
// let qtdCigarrosDia = parseInt(prompt("Informe a quantidade de cigarros fumados por dia: "));
// let qtdAnos = parseInt(prompt("Informe quantos anos faz que você fuma: "));
// let qtdTotalCigarros = qtdAnos * 365 * qtdCigarrosDia;
// let minutosPerdidos = 10 * qtdTotalCigarros;
// let diasPerdidos = parseInt(minutosPerdidos / 1440); // 1 dia tem 1440 min

// console.log("Você já perdeu " + diasPerdidos + " dias de vida!");

/*Exercício 2: perguntar a velocidade de um carro. Caso ultrapasse 80 Km/h, exiba uma mensagem dizendo que
o usuário foi multado. Exibir o valor da multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida. */

// const prompt = require('prompt-sync')();
// let velocidade = parseInt(prompt("Informe a velocidade do carro: "));

// if(velocidade > 80){
//     let velocidadeUltrapassada = velocidade - 80;
//     console.log("Você foi multado!");
//     console.log("Valor da multa: R$" + (velocidadeUltrapassada * 5).toFixed(2));
// } else {
//     console.log("Você está dentro da velocidade permitida !");
// }

/*Exercício 3: perguntar a distância que um passageiro deseja percorrer em Km. Calcule o preço da passagem,
cobrando R$ 0.50 por Km para viagens até 200 Km e R$ 0.45 para viagens mais longas. */

// const prompt = require('prompt-sync')();
// let distancia = parseFloat(prompt("Quantos Km você deseja percorrer? "));

// if(distancia <= 200){
//     console.log("O preço da passagem é R$" + (distancia * 0.5).toFixed(2));
// } else{
//     console.log("O preço da passagem é R$" + (distancia * 0.45).toFixed(2));
// }

/*Exercício 4: ler o tamanho de três segmentos de reta. Analisar seus comprimentos e dizer se é possível
formar um triângulo com essas retas. O comprimento de cada lado deve ser menor que a soma dos outros dois.*/

// const prompt = require('prompt-sync')();

// let ladoA = parseInt(prompt("Digite o valor do lado A: "));
// let ladoB = parseInt(prompt("Digite o valor do lado B: "));
// let ladoC = parseInt(prompt("Digite o valor do lado C: "));

// if(ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB){
//     console.log("Formam um triângulo!")
// } else{
//     console.log("Não formam um triângulo!");
// }

// /*Exercício 5: Crie um jogo de JoKenPo (Pedra-Papel-Tesoura). */

// const prompt = require('prompt-sync')();

// let opcaoJogador = parseInt(prompt("Escolha uma opção (1. Pedra 2. Papel 3. Tesoura):"));
// let opçaoPrograma = Math.floor(Math.random() * 3) + 1; //gera uma opção aleatória

// if(opcaoJogador === opçaoPrograma){
//     console.log("O programa escolheu a opção " + opçaoPrograma);
//     console.log("EMPATE!");
// } else if(opcaoJogador === 1){
//     if(opçaoPrograma === 2){
//         console.log("O programa escolheu a opção " + opçaoPrograma + "\n Você perdeu!");
//     } else{
//         console.log("O programa escolheu a opção " + opçaoPrograma + "\n Você venceu!");
//     }
// } else if(opcaoJogador === 2){
//     if(opçaoPrograma === 3){
//         console.log("O programa escolheu a opção " + opçaoPrograma + "\n Você perdeu!");
//     } else{
//         console.log("O programa escolheu a opção " + opçaoPrograma + "\n Você venceu!");
//     }
// } else if(opcaoJogador === 3){
//     if(opçaoPrograma === 1){
//         console.log("O programa escolheu a opção " + opçaoPrograma + "\n Você perdeu!");
//     } else{
//         console.log("O programa escolheu a opção " + opçaoPrograma + "\n Você venceu!");
//     }
// } else{
//     console.log("Opção inválida!");
// }

/*Exercício 6: Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado. */

// const prompt = require('prompt-sync')();
// let numero = Math.floor(Math.random() * 5) + 1;
// let palpite = 0;

// do {
//     palpite = parseInt(prompt("Digite o palpite de 1 a 5 para acertar o número: "));
//     if(palpite > numero){
//         console.log("Você errou! O número é MENOR que o seu palpite.");
//     } else if (palpite < numero){
//         console.log("Você errou! O número é MAIOR que o seu palpite.");
//     } else{
//         console.log("Você acertou!");
//     }
// } while(palpite != numero);

/*Exercício 7: Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um carro
popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o cliente paga por Km percorrido.
Faça um programa que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e quantos Km foram
percorridos. No final, mostre o preço a ser pago de acordo com os dados a seguir: 
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km*/

// const prompt = require('prompt-sync')();
// let tipo = parseInt(prompt("Informe o tipo de carro (1-Popular 2-Luxo): "));
// let dias = parseInt(prompt("Quantos dias o carro ficou alugado? "));
// let quilometros = parseFloat(prompt("Informe a quantidade de Km percorridos: "));
// let valor = 0;

// if(tipo === 1){
//     if(quilometros <= 100){
//         valor = ((quilometros * 0.2) + (dias * 90)).toFixed(2);        
//     } else{
//         valor = ((quilometros * 0.1) + (dias * 90)).toFixed(2);        
//     }
// } else if(tipo === 2){
//     if(quilometros <= 200){
//         valor = ((quilometros * 0.3) + (dias * 150)).toFixed(2);        
//     } else{
//         valor = ((quilometros * 0.25) + (dias * 150)).toFixed(2);        
//     }
// } else{
//     console.log("O tipo de veículo não é válido!");
// }

// console.log("O valor do aluguel é de R$" + valor);

/*Exercício 8: Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O sistema funciona assim:
- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.*/

// const prompt = require('prompt-sync')();
// let horas = parseInt(prompt("Quantas horas de atividade física você realizou no mês? "));
// let pontos = 0;

// if(horas <= 10){
//     pontos = horas * 2;    
// } else if(horas > 10 && horas <= 20){
//     pontos = horas * 5;
// } else{
//     pontos = horas * 10;
// }

// console.log("Você acumulou " + pontos + " pontos e ganhour R$" + (pontos * 0.05).toFixed(2));

/*Exercício 9: Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai perguntar ao usuário
se ele quer continuar ou não sempre que ler os dados de um funcionário. */

// const prompt = require('prompt-sync')();
// let salarioHomens = 0;
// let salarioMulheres = 0;
// let sexo;
// let salario;
// let cadastrar = "S";

// while (cadastrar === "S" || cadastrar === "s"){
//     sexo = parseInt(prompt("Informe o sexo do funcionário (1-Masculino 2-Feminino): "));
//     salario = parseFloat(prompt("Informe o salário: "));

//     if(sexo === 1){
//         salarioHomens += salario;
//     } else if(sexo === 2){
//         salarioMulheres += salario;
//     }

//     cadastrar = prompt("Continuar cadastrando (S ou N)?");
// }

// console.log("O total de salário para homens é de R$" + salarioHomens.toFixed(2) + " e para mulheres é de R$ " + salarioMulheres.toFixed(2));

/*Exercício 10: Crie um programa usando a estrutura “faça enquanto” que leia vários números. A cada laço,
pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares. */

// const prompt = require('prompt-sync')();
// let soma = 0;
// let menor = 0;
// let contador = 0;
// let contaPares = 0;
// let continuar;
// let numero;

// do{
//     numero = parseFloat(prompt("Digite o número: "));
//     soma += numero;
//     contador++;

//     if(menor > numero){
//         menor = numero;
//     }

//     if(numero %2 === 0){
//         contaPares++;
//     }

//     continuar = prompt("Deseja continuar (S ou N)?");

// } while(continuar === "S" || continuar === 's');

// console.log("O somatório total dos números informados é: " + soma);
// console.log("O menor valor digitado é: " + menor);
// console.log("A média dos valores informados é: " + (soma / contador).toFixed(2));
// console.log("A quantidade de valores pares informado é: " + contaPares);

/*Exercício 11: Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão Aritmética),
 mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os valores da sequência. */

// function calcularPA(primeiroTermo, razao) {
//     let pa = [];
//     let soma = 0;
  
//     for (let i = 0; i < 10; i++) {
//       let termo = primeiroTermo + i * razao;
//       pa.push(termo);
//       soma += termo;
//     }

//     console.log("Os 10 primeiros elementos da PA são:");
//     console.log(pa.join(", "));
// }

// const prompt = require('prompt-sync')();
// let primeiroTermo = parseFloat(prompt("Digite o primeiro termo da PA: "));
// let razao = parseFloat(prompt("Digite a razão da PA: "));

// calcularPA(primeiroTermo, razao);

/*Exercício 12: Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.*/

// let fibonacci = [];;
// let elemento = 1;
// fibonacci[0] = 1;


// for(let i = 1; i<10; i++){
//   fibonacci[i] = elemento;
//   elemento += fibonacci[i-1]
// }

// console.log(fibonacci);

/*Exercício 13: Crie um programa que preencha automaticamente (usando lógica, não apenas atribuindo diretamente)
 um vetor numérico com 15 posições com os primeiros elementos da sequência de Fibonacci. */

//  let fibonacci = [];
// let elemento = 1;
// fibonacci[0] = 1;


// for(let i = 1; i<15; i++){
//   fibonacci[i] = elemento;
//   elemento += fibonacci[i-1]
// }

// console.log(fibonacci);

/*Exercício 14: Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final, mostre uma 
listagem com todos os nomes informados, na ordem inversa daquela em que eles foram informados. */

// const prompt = require('prompt-sync')();
// let nomes = [];

// for(let i=1; i<=7;i++){
//   let nome = prompt("Informe o nome " + i + ":");
//   nomes.push(nome);
// }

// for(let i=7; i>=0; i--){
//   console.log(nomes[i]);
// }

/*Exercício 15: Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
final, mostre quais são os números pares que foram digitados e em que posições eles estão armazenados. */

// const prompt = require('prompt-sync')();
// let numeros = [];

// for(let i=0; i<10; i++){
//   let numero = parseInt(prompt("Informe um número inteiro: "));
//   numeros.push(numero);
// }
// console.log("\nForam informados os seguintes números pares: ");
// for(let i=0; i<10; i++){
//   if(numeros[i] % 2 === 0){
//     console.log("Posição " + i + ": número " + numeros[i]);
//   }
// }

/*Exercício 16: preencher um vetor de 20 posições com números aleatórios (entre 0 e 99) gerados pelo computador.
Logo em seguida, mostre os números gerados e depois coloque o vetor em ordem crescente, mostrando no final
os valores ordenados. */

// let numeros = [];

// for(let i=0; i<20; i++){
//   numeros.push(Math.floor(Math.random() * 100));
// }
// console.log("os números gerados foram: " + numeros);

// numeros.sort(function(a, b) {
//   return a - b;
// });

// console.log("A ordem crescente dos números é: " + numeros);

/*Exercício 17: Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em dois vetores,
em posições relacionadas. No final, mostre uma listagem contendo apenas os dados das pessoas menores de idade. */

// const prompt = require('prompt-sync')();
// let nomes = [];
// let idades = [];

// for(let i=0; i<9; i++){
//   let nome = prompt("Digite o nome da pessoa " + (i+1) + ": ");
//   let idade = parseInt(prompt("Digite a idade da pessoa " + (i+1) + ": "));
//   nomes.push(nome);
//   idades.push(idade);  
// }

// console.log("Pessoas menores de idade: ");
// for(let i=0; i<nomes.length; i++){
//   if (idades[i] < 18){
//     console.log("Nome: " + nomes[i] + " Idade: " + idades[i]);
//   }
// }


/*Exercício 18: Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para um funcionário
e ao final escreva o conteúdo do registro. */

// const prompt = require('prompt-sync')();
// let nome = prompt("Informe o nome do funcionário: ");
// let cargo = prompt("Informe o cargo do funcionário: ");
// let salario = parseFloat(prompt("Informe o salário do funcionário: "));

// let funcionario = {
//     nome: nome,
//     cargo: cargo,
//     salario: salario
// }

// console.log(funcionario);

/*Exercício 19: Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de repetição.
Escrever cada um deles no formato HH.MM.SS. */

// const prompt = require('prompt-sync')();
// let horarios = [];

// for(let i=0; i<5; i++){
//     let horario = prompt("Informe o horário " + (i+1) + " (HH:MM:SS): ");
//     let partes = horario.split(":");
//     let horas = parseInt(partes[0]);
//     let minutos = parseInt(partes[1]);
//     let segundos = parseInt(partes[2]);

//     if(horas >= 0 && horas <= 23 && minutos >= 0 && minutos <= 59 && segundos >= 0 && segundos <= 59){
//         horarios.push( {horas:partes[0], minutos:partes[1], segundos:partes[2]});
//     } else {
//         console.log("Horário inválido!");
//     }
// }

// console.log("Horários válidos digitados:");
// for (let horario of horarios) {
//     console.log(`${horario.horas}.${horario.minutos}.${horario.segundos}`);
// }

/*Exercício 20: Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no seguinte: existe uma
tabela com os dados de cada funcionalidade: matrícula, nome e salário bruto. Escreva um programa que leia e processe
 a tabela e emita (escreva na tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do INSS). */

// Função para processar e exibir o contracheque de um funcionário
// function exibirContracheque(funcionario) {
//     let deducaoINSS = (funcionario.salarioBruto * 0.12).toFixed(2);
//     let salarioLiquido = (funcionario.salarioBruto - deducaoINSS).toFixed(2);

//     console.log("Matrícula:", funcionario.matricula);
//     console.log("Nome:", funcionario.nome);
//     console.log("Salário bruto: R$", funcionario.salarioBruto);
//     console.log("Dedução INSS: R$", deducaoINSS);
//     console.log("Salário líquido: R$", salarioLiquido);
//     console.log("-------------------------------------------");
// }

// const prompt = require('prompt-sync')();
// let tabelaFuncionarios = [];


// //Cadastro dos 80 empregados
// do {
//     let matricula = parseInt(prompt("Informe a matrícula do funcionário: "));
//     let nome = prompt("Informe o nome do funcionário: ");
//     let salarioBruto = parseFloat(prompt("Informe o salário bruto do funcionário: ")).toFixed(2);

//     tabelaFuncionarios.push({matricula:matricula, nome:nome, salarioBruto:salarioBruto});

// } while(tabelaFuncionarios.length < 80);

// console.log("############### CONTRA CHEQUES ###############");
// for (let funcionario of tabelaFuncionarios) {
//     exibirContracheque(funcionario);
// }

/*Exercício 21: Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e retorna o seu peso ideal.
Para homens, calcular o peso ideal usando a fórmula: peso ideal = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.*/

// function calcularPesoIdeal(alt,sexo) {
//     let pesoIdeal;
//     if(sexo === "M"){
//         pesoIdeal = (72.7 * alt - 58).toFixed(2);
//     } else if(sexo === "F"){
//         pesoIdeal = (62.1 * alt - 44.7).toFixed(2);
//     } else{
//         console.log("Sexo inválido!")
//         return 0;
//     }

//     return pesoIdeal;
// }

// const prompt = require('prompt-sync')();
// let altura = parseFloat(prompt("Informe a altura da pessoa: "));
// let sexo = (prompt("Informe o sexo da pessoa(M ou F): ")).toUpperCase();

// console.log("O peso ideal é " + calcularPesoIdeal(altura, sexo));

/*Exercício 22: A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados sobre o salário e número de filhos.
Faça uma função que leia esses dados para um número não determinado de pessoas e retorne a média de salário da população, a média do número
 de filhos, o maior salário e o percentual de pessoas com salário até R$350,00. */

//  //cadastro dos dados da pesquisa
//  function cadastrar(salario, numFilhos) {
//     cadastros.push({salario:salario, numFilhos:numFilhos});
//     totalFilhos += numFilhos;
//     totalSalarios += salario;

//     if(salario > maiorSalario){
//         maiorSalario = salario;
//     }

//     if(salario <= 350){
//         salarioAte350++;
//     }
//  }

// //Função para gerar a pesquisa
//  function gerarPesquisa(){
//     console.log("############### Resultado da Pesquisa ###############");
//     console.log("Média de salário da população: R$" + (totalSalarios/cadastros.length).toFixed(2));
//     console.log("Média de filhos: " + parseInt(totalFilhos/cadastros.length));
//     console.log("O maior salário informado foi: R$" + (maiorSalario).toFixed(2));
//     console.log("Percentual de pessoas com salário até R$350,00: " + ((salarioAte350/cadastros.length) * 100).toFixed(2) + "%");
//     console.log("#####################################################");
//  }

//  const prompt = require('prompt-sync')();
//  let continuar = "S";
//  let cadastros = [];
//  let maiorSalario = 0;
//  let salarioAte350 = 0;
//  let totalSalarios = 0;
//  let totalFilhos = 0;

//  while(continuar === "S"){
//     let salario = parseFloat(prompt("Informe o salário: "));
//     let numFilhos = parseInt(prompt(("Informe o número de filhos: ")));
//     cadastrar(salario,numFilhos);

//     continuar = prompt("Deseja continuar cadastrando (S/N)?").toUpperCase();
//  }

//  gerarPesquisa();

/*Exercício 23: Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da diagonal principal são iguais a 1 e os
demais são nulos. */

// let matriz = [];

// for(let i=1; i<=7; i++) {
//     matriz[i] = [];
//     for(let j=1; j<=7; j++) {
//         if(i === j) {
//             matriz[i][j] = 1;
//         } else {
//             matriz[i][j] = 0;
//         }
//     }
// }

// for(let i=1; i<=7; i++) {
//     let linha = "";
//     for (let j=1; j<= 7; j++) {
//         linha += matriz[i][j] + " ";
//     }
//     console.log(linha);
// }

/*Exercício 24: Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a quantidade de
elementos negativos da linha correspondente de M.*/

// function contarNegativos(matriz){
//   for(let i=0; i<matriz.length; i++){
//     let contagem = 0;
//     for (let j=0; j<matriz[i].length; j++){
//       if (matriz[i][j] < 0){
//         contagem++;
//       }
//     }
    
//     c.push(contagem);
    
//   }
// }

// let c = [];
// let m = [
//   [1, 2, -7, 10, -2, 9, 3, 0],
//   [12, -5, 6, 15, 35, 98, 28, 4],
//   [63, -9, 34, 29, -7, -5, 16, 18],
//   [9, 52, 15, 25, -3, -1, 11, 20],
//   [1, -2, 3, -4, 5, -6, 7, -8],
//   [-1, -2, -3, 4, 5, 6, -7, -8]
// ]

// contarNegativos(m);
// console.log(c);

/*Exercício 25: Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma de cada
coluna separadamente. */

//Preenchimento da matriz
// function escreveMatriz(){
//   for(let i=0; i<15; i++){
//     m[i] = [];
//     for(let j=0; j<20; j++){
//       m[i][j] = parseInt(prompt("Digite um número real: "));
//     }
//   }
// }

// //Percorre cada coluna da matriz, realizando a soma
// function somaColunas(matriz){
//   let j = 0;
  
//   while(j<=qtdColunas){
//     let soma = 0;
//     for(let i=0; i<matriz.length; i++){
//       soma += matriz[i][j];
//     }
//     console.log("Soma na coluna " + (j+1) + ": " + soma);
//     j++
//   }
// }

// const prompt = require('prompt-sync')();
// let m = [];
// let qtdColunas = 1;

// escreveMatriz();
// somaColunas(m);

/*Exercício 26: Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
P[1..3,1..5].*/

// function calcularProduto(matrizA, matrizB){
//   let p = [];

//   for(let i=0; i<3; i++){
//   p[i] = [];
//     for(let j=0; j<5; j++){
//       p[i][j] = matrizA[i][j] * matrizB[i][j];
//     }
//   }

//   console.log("Matriz P = ");
//   console.log(p);

// }

// let a = [
//   [1, 10, 11, 15, 19],
//   [16, 72, 38, 0, 80],
//   [51, 3, 13, 25, 15]
// ]

// let b = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 1],
//   [2, 3, 4, 5, 6]
// ]

// calcularProduto(a,b);

/*Exercício 27: Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura, multiplicar
a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em um vetor V(36). Escrever o vetor
V no final. */

//Preenchimento da matriz
// function escreveMatriz(){
//   for(let i=0; i<6; i++){
//     m[i] = [];
//     for(let j=0; j<6; j++){
//       m[i][j] = parseInt(prompt("Digite um número: "));
//     }
//   }

//   valor = parseInt(prompt("Informe um valor: "));  
// }

// function multiplicaMatriz(matriz, valor){
//   for(let i=0; i<6; i++){
//     for(let j=0; j<6; j++){
//       v.push(matriz[i][j] * valor);
//       console.log("passou aqui");
//     }
//   }
// }

// const prompt = require('prompt-sync')();
// let valor;
// let m = [];
// let v = [];
// escreveMatriz();
// multiplicaMatriz(m, valor);
// console.log(v);

/*Exercício 28: Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal; */

// //Preenchimento da matriz
// function escreveMatriz(){
//   for(let i=0; i<10; i++){
//     m[i] = [];
//     for(let j=0; j<10; j++){
//       m[i][j] = parseInt(prompt("Digite um número: "));
//     }
//   }  
// }

// function somaAcimaDiagonalPrincipal(matriz){
//   let soma = 0;
//   for(let i=0; i<10; i++){
//     for(let j= i+1; j<10; j++){
//       soma += matriz[i][j];
//     }
//   }
//   console.log("Soma dos elementos acima da diagonal principal: " + soma);
// }

// function somaAbaixoDiagonalPrincipal(matriz){
//   let soma = 0;
//   for(let i=1; i<10; i++){
//     for(let j=0; j<i; j++){
//       soma += matriz[i][j];
//     }
//   }
//   console.log("Soma dos elementos abaixo da diagonal principal: " + soma);
// }
// const prompt = require('prompt-sync')();
// let m = [];
// escreveMatriz();
// somaAcimaDiagonalPrincipal(m);
// somaAbaixoDiagonalPrincipal(m);

/*Exercício 29: Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz. */

//Preenchimento da matriz
// function escreveMatriz(){
//   for(let i=0; i<5; i++){
//     m[i] = [];
//     for(let j=0; j<5; j++){
//       m[i][j] = parseInt(prompt("Digite um número: "));
//     }
//   }  
// }

// //Calcular soma da linha 4
// function calcularSomaLinha(matriz){
//   let soma = 0;
//   for(let j=0; j<matriz.length; j++){
//     soma += matriz[4-1][j];
//   }
//   console.log("A soma dos elementos na linha 4 é: " + soma);
// }

// //Calcular soma da coluna 2
// function calcularSomaColuna(matriz){
//   let soma = 0;
//   for(let i=0; i<matriz.length; i++){
//     soma += matriz[i][2-1];
//   }
//   console.log("A soma dos elementos na coluna 2 é: " + soma);
// }

// //Calcular soma diagonal principal
// function calcularSomaDiagonalPrincipal(matriz){
//   let soma = 0;
//   for(let i=0; i<matriz.length; i++){
//     let j = i;
//     soma += matriz[i][j];
//   }
//   console.log("A soma dos elementos da diagonal principal é: " + soma);
// }

// //Calcular soma total da matriz
// function calcularSomaMatriz(matriz){
//   let soma = 0;
//   for(let i=0; i<matriz.length; i++){
//     for(let j=0; j<matriz.length; j++){
//       soma += matriz[i][j];
//     }
//   }
//   console.log("A soma total dos elementos da matriz é: " + soma);
// }


// const prompt = require('prompt-sync')();
// let m = [];
// escreveMatriz();
// calcularSomaLinha(m);
// calcularSomaColuna(m);
// calcularSomaDiagonalPrincipal(m);
// calcularSomaMatriz(m);
// console.log(m);

/*Exercício 30: Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz e os vetores criados. */

// //Preenchimento da matriz
// function escreveMatriz(){
//   for(let i=0; i<5; i++){
//     m[i] = [];
//     for(let j=0; j<5; j++){
//       m[i][j] = parseInt(prompt("Digite um número: "));
//     }
//   }
//   console.log(m);
// }

// function somaLinhas(matriz){
//   for(let i=0; i<matriz.length; i++){
//     let soma = 0;
//     for(let j=0; j<matriz[i].length; j++){
//       soma += matriz[i][j];
//     }
//     sl.push(soma);
//   }
//   console.log("Soma das linhas:");
//   console.log(sl);
// }

// function somaColunas(matriz){
//   for(let j=0; j<5; j++){
//     let soma = 0;
//     for(let i = 0; i<matriz.length; i++){
//       soma += matriz[i][j];
//     }
//     sc.push(soma);
//   }
//   console.log("Soma das colunas: ")
//   console.log(sc);
// }

// const prompt = require('prompt-sync')();
// let m = [];
// sl = [];
// sc = [];
// escreveMatriz(m);
// somaLinhas(m);
// somaColunas(m);

/*Exercício 31: Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros. Conte quantos valores iguais a A
estão na matriz. Crie, a seguir, uma matriz X contendo todos os elementos de V diferentes de A. Mostre os resultados. */

// function escreveMatriz(){
//     for(let i=0; i<30; i++){
//         v[i] = [];
//         for(let j=0; j<30; j++){
//             v[i][j] = parseInt(prompt("Digite um número: "));
//         }
//     }
// }

// function analisaMatriz(matriz, valor){
//     for(let i=0; i<matriz.length; i++){
//         x[i] = [];
//         for(let j=0; j<matriz[i].length; j++){
//             if(valor === matriz[i][j]){
//                 contador++;
//             } else{
//                 x[i].push(matriz[i][j]);
//             }
//         }
//     }
// }

// const prompt = require('prompt-sync')();
// let v = [];
// let a = parseInt(prompt("Informe um valor: "));
// let x = [];
// let contador = 0;
// escreveMatriz();
// analisaMatriz(v,a);

// console.log("O número de elementos iguais a " + a + " é: " + contador);
// console.log("Matriz X ");
// console.log(x);

/*Exercício 32:Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de cada uma das 12 linhas de M pelo maior
elemento em módulo daquela linha. Escrever a matriz lida e a modificada. */

// function escreveMatriz(){
//     for(let i=0; i<12; i++){
//         m[i] = [];
//         for(let j=0; j<13; j++){
//             m[i][j] = parseInt(prompt("Digite um número: "));
//         }
//     }
// }

// function selecionaMaior(matriz){
//     for(let i=0; i<12; i++){
//         maior.push(Math.max(...matriz[i].map(Math.abs)));
//     }
// }

// function divideMatriz(matriz){
//     for(let i=0; i<12; i++){
//         x[i] = [];
//         for(let j=0; j<13; j++){
//             x[i][j] = (matriz[i][j] / maior[i]).toFixed(2);
//         }
//     }
// }



// const prompt = require('prompt-sync')();
// let m = [];
// let x = [];
// let maior = [];

// escreveMatriz();
// selecionaMaior(m);
// divideMatriz(m);
// console.log("Matriz M")
// console.log(m);
// console.log("Matriz Modificada");
// console.log(x);

/*Exercício 33:Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os elementos da diagonal principal com a média dos elementos
da diagonal secundária. */

// function escreveMatriz(){
//     for(let i=0; i<3; i++){
//         m[i] = [];
//         for(let j=0; j<3; j++){
//             m[i][j] = parseInt(prompt("Digite um número: "));
//         }
//     }
// }

// function calculaMediaDiagonalSecundaria(matriz){
//     let j = 0;
//     while(j<3){
//         for(let i=2; i>=0; i--){
//             media += (matriz[i][j]);
//             j++
//         }
//     }
//     media = media/3;

// }

// function multiplicaDiagonalPrincipal(matriz,media){
//     console.log("Elementos da diagonal principal multiplicados pela média da diagonal secundária: ");
//     for(let i=0; i<matriz.length; i++){
//         let j= i;
//         console.log(matriz[i][j] * media);
//     }
// }


// const prompt = require('prompt-sync')();
// let m = [];
// let media = 0;
// escreveMatriz();
// calculaMediaDiagonalSecundaria(m);
// multiplicaDiagonalPrincipal(m, media);

/*Exercício 34: Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as multiplicações. */

// function escreveMatriz(){
//     for(let i=0; i<50; i++){
//         m[i] = [];
//         for(let j=0; j<50; j++){
//             m[i][j] = parseInt(prompt("Digite um número: "));
//         }
//     }
// }

// function gravaDiagonal(matriz){
//     for(let i=0; i<matriz.length; i++){
//         let j=i;
//         diagonal.push(matriz[i][j]);
//     }
// }

// function multiplicaMatriz(matriz,diagonal){
//     for(let i=0; i<matriz.length; i++){
//         for(let j=0; j<matriz[i].length; j++){
//             matriz[i][j] = (matriz[i][j]*(diagonal[i]));
//         }
//     }
// }

// const prompt = require('prompt-sync')();
// let m = [];
// let diagonal = [];
// escreveMatriz();
// gravaDiagonal(m);
// multiplicaMatriz(m,diagonal);
// console.log("Matriz modificada");
// console.log(m);

/*Exercício 35: Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor estiver cheio, escrevê-lo.
Terminada a leitura, escrever o conteúdo dos dois vetores. Cada vetor pode ser preenchido quantas vezes forem necessárias. */

// const prompt = require("prompt-sync")();
// let pares = [];
// let impares = [];

// for(let i=0; i<30; i++){
//     let valor = parseInt(prompt("Digite o valor " + (i+1) + " : "));
//     if(valor % 2 === 0){
//         if(pares.length === 5){
//             console.log("Vetor PARES: " + pares);
//             pares.length = 0; //zerar o vetor
//         }
//         pares.push(valor);
//     } else{
//         if(impares.length === 5){
//             console.log("Vetor ÍMPARES: "+ impares);
//             impares.length = 0; //zerar o vetor
//         }
//         impares.push(valor);
//     }
// }

// console.log("vetor PARES: " + pares);
// console.log("vetor ÍMPARES: " + impares);

/*Exercício 36: Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de um teste da loteria esportiva.
Leia, a seguir, para cada um dos 100 apostadores, o número do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada
apostador o número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva o número do apostador e o número de
acertos. Se o apostador tiver 13 acertos, mostrar a mensagem "Parabéns, tu foi o GANHADOR". */

// function escreverGabarito(){
//     for(let i=0; i<13; i++){
//         gabarito.push(parseInt(prompt("Informe o valor " + (i+1) + " do gabarito:")));
//     }
// }

// function lerApostador(){
//     for(let i=0; i<100; i++){
//         let cartao = parseInt(prompt("Informe o número do cartão do apostador " + (i+1) + " : "));
//         let palpites = [];
//         for(let i=0; i<13; i++){
//             palpites.push(parseInt(prompt("Informe o valor " + (i+1) + " do palpite:")));
//         }
//         apostador={numeroCartao:cartao, palpites:palpites}
//         apostas.push(apostador);
//     }

// }

// function verificarApostas(gabarito, apostas) {
//     apostas.forEach(aposta =>{
//         let {numeroCartao, palpites} = aposta;
//         let acertos = 0;
//         for(let i=0; i<gabarito.length; i++){
//             for(let j=0; j<aposta.palpites.length; j++){
//                 if(gabarito[i] === aposta.palpites[j]){
//                     acertos++;
//                 }
//             }
//         }

//         console.log("Apostador " + aposta.numeroCartao + ": " + acertos + " acertos");
//         if (acertos === 13) {
//             console.log("Parabéns, tu foi o GANHADOR");
//         }
//     });
// }

// const prompt = require("prompt-sync")();
// let gabarito = [];
// let apostas = [];
// let apostador = {};

// escreverGabarito();
// lerApostador();
// verificarApostas(gabarito, apostas);

/*Exercício 37: Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa o gabarito de uma prova.
A seguir, para cada um dos 50 alunos da turma, leia o vetor de respostas (R) do aluno e conte o número de acertos. Mostre o número
de acertos do aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12; e mostre uma mensagem de “REPROVADO”, caso contrário. */

// function lerGabarito(){
//     console.log("Informe as respostas do gabarito")
//     for(let i=0; i<qtdElementos; i++){
//         g.push(prompt("Questão " + (i+1) + ":").toUpperCase());
//     }
// }

// function lerRespostas(){
//     for(let i=0; i<qtdAlunos; i++){
//         r[i]=[];
//         console.log("Informe as respostas do aluno " + (i+1));
//         for(let j=0; j<qtdElementos; j++){
//             r[i][j] = (prompt("Questão " + (j+1) + ": ")).toUpperCase();;
//         }
//     }
// }

// function calcularAcertos(){
//     console.log("NOTAS");
//     for(let i=0; i<qtdAlunos; i++){
//         let acertos = 0;
//         for(let j=0; j<qtdElementos; j++){
//             if(r[i][j] === g[j]){
//                 acertos++;
//             }
//         }
//         if(acertos>=12){
//             console.log("Aluno "+ (i+1) +": " + acertos + " acertos. APROVADO");
//         } else{
//             console.log("Aluno "+ (i+1) +": " + acertos + " acertos. REPROVADO");
//         }


//     }
// }

// const prompt = require("prompt-sync")();
// let g = [];
// let r = [];
// let qtdElementos = 20;
// let qtdAlunos = 50;
// let aluno = {};

// lerGabarito();
// lerRespostas();
// calcularAcertos();
// console.log(g);
// console.log(r);

/*Exercício 38: Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra variável identificadora
que calcule a operação conforme a informação contida nesta variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor.*/

// function lerVetor(){
//     console.log("Informe os valores do vetor");
//     for(let i=0; i<6; i++){
//         v.push(parseInt(prompt("Digite o valor " + (i+1) + ":")));
//     }
// }

// function calcularOperacao(){
//     console.log("Digite a opção: \n1- Soma dos elementos\n2- Produto dos elementos\n3- Média dos elementos\n4- Ordene os elementos em ordem crescente\n5- Mostre o vetor");
//     let operacao = parseInt(prompt("opção: "));
//     if(operacao === 1){
//         let soma = 0;
//         for(let i=0; i<v.length;i++){
//             soma += v[i];
//         }
//         console.log("Soma dos elementos: " + soma);
//     } else if(operacao === 2){
//         let produto = 1;
//         for(let i=0; i<v.length; i++){
//             produto *= v[i];
//         }
//         console.log("Produto dos elementos: " + produto);
//     } else if(operacao === 3){
//         let media = 0;
//         let soma = 0;
//         for(let i=0; i<v.length;i++){
//             soma += v[i];
//         }
//         media = soma/v.length;
//         console.log("Média dos elementos: " + media);
//     } else if(operacao === 4){
//         v.sort();
//         console.log("Elementos ordenados: " + v);
//     } else if(operacao === 5){
//         console.log("Vetor: " + v);
//     } else{
//         console.log("Opção inválida!");
//     }
// }

// const prompt = require("prompt-sync")();
// let v = [];

// lerVetor();
// calcularOperacao();

/*Exercício 39: Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B. */

// function lerVetor(){
//     console.log("Vetor A");
//     for(let i=0; i<100; i++){
//         a.push(parseFloat(prompt("Informe o valor " + (i+1) + ": ")));
//     }
// }

// function analisarVetor(){
//     for(let i=0; i<a.length; i++){
//         if(a[i] > 0){
//             b.push(a[i]);
//         }
//     }
//     console.log("Vetor B: " + b);
// }

// const prompt = require("prompt-sync")();
// let a = [];
// let b = [];

// lerVetor();
// analisarVetor();

/*Exercício 40:Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
cada), representando as apostas feitas. Compare os números das apostas com o resultado oficial e mostre uma mensagem
("Ganhador") se todos os números corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
e quadras, apenas por quinas.) */

// function lerResultado(){
//     console.log("Informe o resultado oficial da Loto");
//     for(let i=0; i<5; i++){
//         resultado.push(parseInt(prompt("Valor " + (i+1) + ": ")));
//     }
//     resultado.sort();                   //Ordena os valores para facilitar a comparação
// }

// function lerApostas(){
//     for(let i=0; i<qtdApostas; i++){
//         apostas[i] = [];
//         console.log("Informe os valore da aposta " + (i+1));
//         for(let j=0; j<5; j++){
//             apostas[i][j] = parseInt(prompt("Valor " + (j+1) + ": "));
//         }
//         apostas[i].sort();              //Ordena os valores para facilitar a comparação
//     }
// }

// function compararApostas(resultado, apostas){
//     for(let i=0; i<qtdApostas; i++){
//         let acertos = 0;
//         for(let j=0; j<5; j++){
//             if(resultado[j] === apostas[i][j]){
//                 acertos++;
//             }
//         }
//         if(acertos === 5){
//             console.log("GANHADOR");
//             console.log("Aposta número " + (i+1));
//         }
//     }
// }

// const prompt = require("prompt-sync")();
// let resultado = [];
// let qtdApostas = 50;
// let apostas= [];

// lerResultado();
// lerApostas();
// compararApostas(resultado, apostas);

/*exercício 41: Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui nome e idade. */

// let pessoa = {
//     nome: 'Fernando',
//     idade: 34
// };

// console.log("Idade:", pessoa.idade);

// pessoa.email = 'fernando@gmail.com';

/*Exercício 42: Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as propriedades que são arrays. */

// function retornarPropriedadesArray(obj){
//     let resultado = {};
//     for(let chave in obj){
//         if(Array.isArray(obj[chave])){
//             resultado[chave] = obj[chave];
//         }
//     }
//     console.log(resultado);
// }

// let dados = {
//     nome: 'Fernando',
//     idade: 34,
//     peso: 82.5,
//     email: 'fernando@gmail.com',
//     notas: [88, 97, 100],
//     linguagens: ['Java', 'Html', 'JavaScript']
// }

// retornarPropriedadesArray(dados);

/*Exercício 43: Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência sobre as do obj1 em caso de conflitos. */

// function combinarObjetos(obj1, obj2){
//     let obj3 = { ...obj1, ...obj2 };
//     console.log(obj3);
// }


// let obj1 = {
//     nome: 'Fernando',
//     idade: 34,
//     peso: 82.5,
//     linguagens: ['Java', 'Html', 'JavaScript'],
//     ativo: true
// };

// let obj2 = {
//     sobrenome: 'Tulikowski',
//     idade: 30,
//     email: 'fernando@gmail.com'
// };

// combinarObjetos(obj1, obj2);

/*Exercício 44: Escreva uma função que conte quantas propriedades do tipo string existem em um
objeto e retorne esse número. */

// function contarStrings(obj){
//     let contadorStrings = 0;
//     for(let chave in obj){
//         if(typeof obj[chave] == "string"){
//             contadorStrings++;
//         }
//     }
//     console.log(contadorStrings);
// }

// let dados = {
//     nome: 'Fernando',
//     sobrenome: 'Tulikowski',
//     idade: 34,
//     peso: 82.5,
//     email: 'fernando@gmail.com',
//     notas: [88, 97, 100],
//     linguagens: ['Java', 'Html', 'JavaScript']
// }

// contarStrings(dados);

/*Exercício 45: Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
o número de vezes que a string aparece no array.*/

// let frutas = ['banana', 'laranja','uva', 'bergamota', 'abacate', 'banana', 'uva', 'maca','uva' ];
// let obj = {};

// for(chave of frutas){
//     if(obj[chave]){
//         obj[chave]++;
//     } else{
//         obj[chave] = 1;
//     }
// }

/*Exercício 46: Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total de vendas por vendedor. */



// function totalVendasPorVendedor(vendas){
//     let resumoVendas = {};
//     for(let venda of vendas){
//       let vendedor = venda.vendedor;
//       let valor = venda.valor;

//       if(resumoVendas[vendedor]){
//         resumoVendas[vendedor] += valor;
//       } else{
//         resumoVendas[vendedor] = valor;
//       }
//     }

//     return resumoVendas;
//   }

//   let vendas = [
//     { vendedor: 'Fernando', valor: 100 },
//     { vendedor: 'Charles', valor: 200 },
//     { vendedor: 'Fernando', valor: 300 },
//     { vendedor: 'Charles', valor: 150 },
//     { vendedor: 'Kalebe', valor: 250 }
//   ];

//   let resultado = totalVendasPorVendedor(vendas);
//   console.log(resultado);

/*Exercício 47: Crie uma função que transforme um objeto de entrada aplicando uma função
fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os resultados. */

// function transformarObjeto(objeto, funcao){
//     let novoObjeto = {};

//     for(let chave in objeto){
//       let valorTransformado = funcao(objeto[chave]);
//       novoObjeto[chave] = valorTransformado;
//     }

//     return novoObjeto;
//   }

/*Exercício 48: Você recebe dois objetos que representam o inventário de duas lojas diferentes:
inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse item em estoque.
Escreva uma função que combine os inventários em um único objeto. Se um item aparecer em ambas as lojas, some as quantidades. */

// function calcularInventarioTotal(inventarioLojaA, inventarioLojaB){
//     let inventarioTotal = {};

//     for(let chave in inventarioLojaA){
//         if(inventarioTotal[chave]){
//             inventarioTotal[chave] += inventarioLojaA[chave];
//         } else {
//             inventarioTotal[chave] = inventarioLojaA[chave];
//         }
//     }

//     for(let chave in inventarioLojaB){
//         if(inventarioTotal[chave]){
//             inventarioTotal[chave] += inventarioLojaB[chave];
//         } else {
//             inventarioTotal[chave] = inventarioLojaB[chave];
//         }
//     }

//     console.log(inventarioTotal);
// }

/*Exercício 49: Você recebe um array de objetos representando transações financeiras. Cada transação possui id, valor, data, e categoria.
Escreva uma função que retorne um objeto onde as chaves são as categorias, e os valores são arrays de transações pertencentes a essa categoria.
Adicionalmente, inclua um subtotal de valores por categoria. */


// function agruparTransacoesPorCategoria(transacoes){
//     let transacoesPorCategoria = {};

//     transacoes.forEach(transacao => {
//         let { id, valor, data, categoria } = transacao;

//         if(!transacoesPorCategoria[categoria]) {
//             transacoesPorCategoria[categoria] = {
//                 transacoes: [],
//                 subtotal: 0
//             };
//         }

//         transacoesPorCategoria[categoria].transacoes.push({ id, valor, data, categoria });
//         transacoesPorCategoria[categoria].subtotal += valor;
//     });

//     return transacoesPorCategoria;
// }

/*Exercício 50: Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema deverá ser capaz de interagir com o usuário através do console do navegador e manter
um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as informações. Não é necessário interface gráfica, apenas funcionalidade lógica.
1. Estrutura de Dados:
○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome, cidade, quartos totais e quartos disponiveis.
○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e nomeCliente.

2. Funcionalidades:
○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis disponíveis em uma cidade específica.
○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso deve diminuir o número de quartos disponiveis do hotel.
○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve aumentar o número de quartos disponiveis no hotel correspondente.
○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do cliente.

3. Regras de Negócio:
○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
○ As reservas devem ser identificadas por um ID único e associadas a um único hotel.

4. Desafios Adicionais (Opcionais):
○ Implementar uma função de check-in e check-out que atualize a disponibilidade de quartos.
○ Gerar relatórios de ocupação para um hotel.
○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas avaliações dentro do objeto do hotel.*/

// function escolherOpcao(){
//     let continuar = "S";
//     while(continuar === "S"){
//         console.log("--------------------------------------")
//         console.log("          MENU DE OPÇÕES              ");
//         console.log("--------------------------------------")
//         console.log("1- Adicionar hotéis \n2- Buscar hotéis por cidade \n3- Fazer reserva \n4- Cancelar Reserva \n5- Listar reservas \n0- Sair");
//         let opcao = parseInt(prompt("Digite a opção: "));

//         if(opcao === 1){
//             adicionarHoteis();
//         } else if(opcao === 2){
//             buscarHoteisPorCidade(cadastrosHoteis);
//         } else if(opcao === 3){
//             fazerReserva(cadastrosHoteis,reservas);
//         } else if(opcao === 4){
//             cancelarReserva(cadastrosHoteis,reservas);
//         } else if(opcao === 5){
//             listarReservas(cadastrosHoteis,reservas);
//         } else if(opcao === 0){
//             continuar = "N";
//         }else{
//             console.log("Opção inválida!");
//         }
//     }
// }

// function adicionarHoteis(){
//     console.log("----------CADASTRO DE HOTEL----------");
//     let nome = prompt("Informe o nome do hotel: ").toUpperCase();
//     let cidade = prompt("Informe a cidade do hotel: ").toLocaleUpperCase();
//     let quartosTotais = parseInt(prompt("Informe o total de quartos: "));

//     //cria o cadastro do hotel
//     let hotel = {
//         id: proximoIdHotel,
//         nome: nome,
//         cidade: cidade,
//         quartosTotais: quartosTotais,
//         quartosDisponiveis: quartosTotais
//     }

//     //atualiza o id para o próximo cadastro
//     proximoIdHotel++;
//     //inclui o hotel no array de hoteis cadastrados
//     cadastrosHoteis.push(hotel);
//     console.log("Cadastro realizado com sucesso.");
// }

// function buscarHoteisPorCidade(cadastrosHoteis){
//     console.log("-----------BUSCA DE HOTÉIS-----------");
//     let busca = prompt("Informe a cidade que você deseja procurar os hotéis cadastrados: ").toUpperCase();
//     console.log("Hotéis cadastrados na cidade de " + busca);
//     let listaHoteis = 0;
//     for(let hotel of cadastrosHoteis){
//         if(hotel.cidade === busca){
//             console.log(hotel.nome);
//             listaHoteis++;
//         }
//     }

//     // Se não encontrou nenhum registro, exibe a mensagem
//     if(listaHoteis === 0){
//         console.log("Nenhum registro encontado!");
//     }
// }

// function fazerReserva(cadastrosHoteis,reservas){
//     console.log("---------CADASTRO DE RESERVA---------");
//     let nomeHotel = prompt("Nome do Hotel: ").toUpperCase();
//     let nomeCliente = prompt("Nome do cliente: ").toUpperCase();
//     let hotel = cadastrosHoteis.find(h => h.nome === nomeHotel);

//     if(hotel){
//         //verifica se possui quartos disponíveis
//         if(hotel.quartosDisponiveis > 0){
//             let reserva = {
//                 idReserva: proximoIdReserva,
//                 idHotel: hotel.id,
//                 nomeCliente: nomeCliente
//             }
//         //atualiza o id da reserva
//         proximoIdReserva++;
//         //inclui a reserva no array de reservas
//         reservas.push(reserva);
//         //atualiza o número de quartos disponíveis no hotel
//         hotel.quartosDisponiveis--;
//         console.log("Reserva realizada com sucesso.");
//         } else{
//             console.log("Não temos quartos disponíveis no hotel " + hotel.nome);
//         }
//     } else{
//         console.log("Nome do hotel inválido!");
//     }
// }

// function cancelarReserva(cadastrosHoteis,reservas){
//     console.log("-------CANCELAMENTO DE RESERVA-------");
//     let idExclusao = parseInt(prompt("Informe o código da reserva que deseja excluir (0 para consultar reservas): "));
//     //busca a posição do array reservas onde essa reserva está inserida
//     let reservaIndex = reservas.findIndex(r => r.idReserva === idExclusao);

//     //Opção para exibir a lista das reservas, caso não saiba o código da reserva para cancelamento
//     if(idExclusao === 0){
//         listarReservas(cadastrosHoteis,reservas);
//     } else{
//         //se localizou a posição da reserva, faz a exclusão
//         if(reservaIndex !== -1){
//             let reserva = reservas[reservaIndex];
//             //localiza o hotel da reserva para atualizar o número de quartos disponíveis
//             let hotel = cadastrosHoteis.find(h => h.id === reserva.idHotel);
//             hotel.quartosDisponiveis++;
//             //exclui a reserva na posição localizada
//             reservas.splice(reservaIndex, 1);
//             console.log("Reserva cancelada com sucesso.");
//         } else{
//             console.log("Reserva não encontrada!");
//         }
//     }


// }

// function listarReservas(cadastrosHoteis,reservas){
//     console.log("----------LISTA DE RESERVAS----------");
//     //verifica se tem alguma reserva
//     if(reservas.length === 0){
//         console.log("Não existem reservas!");
//     } else{
//         for(let reserva of reservas){
//             let nomeHotel;
//             for(let hotel of cadastrosHoteis){
//                 if(reserva.idHotel === hotel.id){
//                     nomeHotel = hotel.nome;
//                 }
//             }
//             console.log("Reserva: " + reserva.idReserva + " Hotel: " + nomeHotel + " Nome: " + reserva.nomeCliente);
//         }
//     }
// }

// const prompt = require("prompt-sync")();
// let cadastrosHoteis = [];
// let reservas = [];
// let proximoIdHotel = 1;
// let proximoIdReserva = 1;

// escolherOpcao();


