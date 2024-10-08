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

function escolherOpcao(){
    let continuar = "S";
    while(continuar === "S"){
        console.log("--------------------------------------")
        console.log("          MENU DE OPÇÕES              ");
        console.log("--------------------------------------")
        console.log("1- Adicionar hotéis \n2- Buscar hotéis por cidade \n3- Fazer reserva \n4- Cancelar Reserva \n5- Listar reservas \n0- Sair");
        let opcao = parseInt(prompt("Digite a opção: "));

        if(opcao === 1){
            adicionarHoteis();
        } else if(opcao === 2){
            buscarHoteisPorCidade(cadastrosHoteis);
        } else if(opcao === 3){
            fazerReserva(cadastrosHoteis,reservas);
        } else if(opcao === 4){
            cancelarReserva(cadastrosHoteis,reservas);
        } else if(opcao === 5){
            listarReservas(cadastrosHoteis,reservas);
        } else if(opcao === 0){
            continuar = "N";
        }else{
            console.log("Opção inválida!");
        }
    }
}

function adicionarHoteis(){
    console.log("----------CADASTRO DE HOTEL----------");
    let nome = prompt("Informe o nome do hotel: ").toUpperCase();
    let cidade = prompt("Informe a cidade do hotel: ").toLocaleUpperCase();
    let quartosTotais = parseInt(prompt("Informe o total de quartos: "));

    //cria o cadastro do hotel
    let hotel = {
        id: proximoIdHotel,
        nome: nome,
        cidade: cidade,
        quartosTotais: quartosTotais,
        quartosDisponiveis: quartosTotais
    }

    //atualiza o id para o próximo cadastro
    proximoIdHotel++;
    //inclui o hotel no array de hoteis cadastrados
    cadastrosHoteis.push(hotel);
    console.log("Cadastro realizado com sucesso.");
}

function buscarHoteisPorCidade(cadastrosHoteis){
    console.log("-----------BUSCA DE HOTÉIS-----------");
    let busca = prompt("Informe a cidade que você deseja procurar os hotéis cadastrados: ").toUpperCase();
    console.log("Hotéis cadastrados na cidade de " + busca);
    let listaHoteis = 0;
    for(let hotel of cadastrosHoteis){
        if(hotel.cidade === busca){
            console.log(hotel.nome);
            listaHoteis++;
        }
    }

    // Se não encontrou nenhum registro, exibe a mensagem
    if(listaHoteis === 0){
        console.log("Nenhum registro encontado!");
    }
}

function fazerReserva(cadastrosHoteis,reservas){
    console.log("---------CADASTRO DE RESERVA---------");
    let nomeHotel = prompt("Nome do Hotel: ").toUpperCase();
    let nomeCliente = prompt("Nome do cliente: ").toUpperCase();
    let hotel = cadastrosHoteis.find(h => h.nome === nomeHotel);

    if(hotel){
        //verifica se possui quartos disponíveis
        if(hotel.quartosDisponiveis > 0){
            let reserva = {
                idReserva: proximoIdReserva,
                idHotel: hotel.id,
                nomeCliente: nomeCliente
            }
        //atualiza o id da reserva
        proximoIdReserva++;
        //inclui a reserva no array de reservas
        reservas.push(reserva);
        //atualiza o número de quartos disponíveis no hotel
        hotel.quartosDisponiveis--;
        console.log("Reserva realizada com sucesso.");
        } else{
            console.log("Não temos quartos disponíveis no hotel " + hotel.nome);
        }
    } else{
        console.log("Nome do hotel inválido!");
    }
}

function cancelarReserva(cadastrosHoteis,reservas){
    console.log("-------CANCELAMENTO DE RESERVA-------");
    let idExclusao = parseInt(prompt("Informe o código da reserva que deseja excluir (0 para consultar reservas): "));
    //busca a posição do array reservas onde essa reserva está inserida
    let reservaIndex = reservas.findIndex(r => r.idReserva === idExclusao);

    //Opção para exibir a lista das reservas, caso não saiba o código da reserva para cancelamento
    if(idExclusao === 0){
        listarReservas(cadastrosHoteis,reservas);
    } else{
        //se localizou a posição da reserva, faz a exclusão
        if(reservaIndex !== -1){
            let reserva = reservas[reservaIndex];
            //localiza o hotel da reserva para atualizar o número de quartos disponíveis
            let hotel = cadastrosHoteis.find(h => h.id === reserva.idHotel);
            hotel.quartosDisponiveis++;
            //exclui a reserva na posição localizada
            reservas.splice(reservaIndex, 1);
            console.log("Reserva cancelada com sucesso.");
        } else{
            console.log("Reserva não encontrada!");
        }
    }


}

function listarReservas(cadastrosHoteis,reservas){
    console.log("----------LISTA DE RESERVAS----------");
    //verifica se tem alguma reserva
    if(reservas.length === 0){
        console.log("Não existem reservas!");
    } else{
        for(let reserva of reservas){
            let nomeHotel;
            for(let hotel of cadastrosHoteis){
                if(reserva.idHotel === hotel.id){
                    nomeHotel = hotel.nome;
                }
            }
            console.log("Reserva: " + reserva.idReserva + " Hotel: " + nomeHotel + " Nome: " + reserva.nomeCliente);
        }
    }
}

const prompt = require("prompt-sync")();
let cadastrosHoteis = [];
let reservas = [];
let proximoIdHotel = 1;
let proximoIdReserva = 1;

escolherOpcao();

