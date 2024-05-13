// console.log("Olá Mundo de verdade!");
//Comentário simples, não executa nada no código
/* Comentário  
Múltiplo, também não executa nada  
no código*/

//Captura de um elemento e atrelar a ele um evento click.
// const elementoH1 = document.getElementById("titulo");
// // elementoH1.addEventListener("evento","função anônima");
// elementoH1.addEventListener("click", function(){
//     console.log("Agora vitaminado!");
// });

// //Declaradores em JavaScript
// //Var
// var nome = "João";
// console.log(nome);
// //Let
// let sobrenome = "Sousa";
// //Const
// const idade = 25;
// // idade = 30; //Erro! Não pode alterar o valor da variável

// var pessoaJuridica = "eu";
// //Interpolação
// console.log(`A empresa ${pessoaJuridica} é Jurídica.`);

// //Tipos de dados
// //String
// var frase = "Eu amo programação.";
// console.log(frase);

// frase = 1000;
// console.log(frase);
// //Números
// var num1 = 4;
// var num2 = 6;
// console.log(num1 + num2);

// console.log(num1 + num2 + frase);

// //Boolean (Verdadeiro ou Falso)
// var condicao = true;
// if (condicao) {
//   console.log("É Verdadeiro.");
//   console.log(num1 + num2 + frase + condicao);
// } else {
//   console.log("É Falso.");
// }

// //Objetos
// /* 
//  Propriedades: Chaves, atributos 
//  Métodos: Parênteses, funções 
//  */
// var carro = {
//   marca: "Fiat",
//   modelo: "Palio",
//   ano: 2018,
//   cor: "Branco",
// };

// console.log(carro["modelo"]);
// console.log(carro.ano);

// carro.marca = "volkswagen";
// console.log(carro.marca);
// console.log(carro["marca"]);

//Funções

//Tradicional
// function soma(param1,param2){
//   //Escopo da função
// }

// //Arrow
// const soma = (args,args)=>{
//   //Escopo da função
// }

// const soma = (a,b)=>{
//   this.a = a;
//   this.b = b;
//   return a + b;
// }

// function soma2 (a,b){
//   this.a = a;
//   this.b = b;
//   return  a + b;
// }

// console.log(soma(2,2));

// const obj ={
//   nome :"José",
//   saudacao: function () {
//     return "Oi, " + this.nome + "!";
//   }
// }
// console.log(obj.saudacao());

// const obj ={
//   nome :"José",
//   saudacao:  ()=> {
//     return "Oi, " + this.nome + "!";
//   }
// }
// console.log(obj.saudacao());

// let elInputEmail = document.getElementById("idEmail");
// console.log(elInputEmail);

// let elLabelEmail = document.querySelector("label[for=idEmail]");
// console.log(elLabelEmail.innerText);

// const pegaTexto = (texto)=>{
//   console.log(texto.value);
// }


//Arrays

//Recuperar todos os inputs através de funções do DOM.
// const listaDeInputs = document.getElementsByTagName("input");
// console.log(listaDeInputs);

// //Criando um array de números
// let numeros1 = [1,2,3,4,5];
// let numeros2 = [6,7,8,9,10];

// //Concatenar os arrays em um único array utilizando a função concat.
// let numeros3 = numeros1.concat(numeros2);
// console.log(numeros3);

// //Concatenar os arrays em um único array utilizando ooperador SPREAD ( ... );
// let numeros4 = [...numeros1, ...numeros2];
// console.log(numeros4);

// //Converter uma HTMLCollections em Array com SPREAD (...);
// const novaListaDeElementos = [...listaDeInputs];
// console.log(novaListaDeElementos);

let listaUsuarios = [
    {nome:"João José",emailUsuario: "jo@email.com",senhaUsuario: "123456"},
    {nome:"Maria Chiquinha",emailUsuario: "ma@email.com",senhaUsuario: "123456"},
    {nome:"Zezinho Trovão",emailUsuario: "ze@email.com",senhaUsuario: "123456"},
    {nome:"Neiva Lurdes",emailUsuario: "ne@email.com",senhaUsuario: "123456"},
    {nome:"Beto Carlos",emailUsuario: "be@email.com",senhaUsuario: "123456"},
  ];
  
  // let ulLista = document.querySelector("#menu");
  
  // listaUsuarios.forEach((u)=>{
  //   let li = document.createElement("li");
  //   li.setAttribute("class","link");
  //   li.innerHTML = `<a href="#">${u.nome}</a>`;
  //   ulLista.appendChild(li);
  // });
  
  
  const validacao = (input1,input2)=>{
  
    //Vamos recuperar o elemento da msgStatus:
    let msgStatus = document.querySelector(".valida");
    
    if(!msgStatus && msgStatus.className == "sucesso"){
        msgStatus = document.querySelector(".valida");
    }else if(!msgStatus && msgStatus.className == "erro"){
      msgStatus = document.querySelector(".valida");
    }
  
    for (let x = 0; x < listaUsuarios.length; x++) {
  
        if ((input1.value == listaUsuarios[x].emailUsuario) && (input2.value == listaUsuarios[x].senhaUsuario)) {
            msgStatus.innerText = "Login validado com SUCESSO!";
            //Vamos trocar a classe css da msgStatus
            msgStatus.setAttribute("class","sucesso");
  
            document.querySelector("form").reset();
          return false;
        }
      }
  
        msgStatus.innerText = "Nome de usuário ou senha incorretos.";
        msgStatus.setAttribute("class","erro");
        return false;
  
  }
  
  
  
  
  
  
  
  