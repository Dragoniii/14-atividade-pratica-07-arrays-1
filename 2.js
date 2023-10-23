//2. Criar um array e percorrê-lo utilizando o loop for of
//a. Crie um array com o nome "numeros" e adicione 5 números de sua escolha
//b. Utilize o loop for of para percorrer o array e exibir a soma dos números na tela

const numeros = [];
let soma = 0;

function gerador(quantidade) {
  i = 0;
  console.log(quantidade)
  while (i < quantidade) {
    let numero = (Math.floor(Math.random() * 10)+1);
    numeros.push(numero);
    i++;
  }
  console.log(numeros);
}

gerador((Math.floor(Math.random() * 10)+1));

for (let valores of numeros){
    soma += valores;
    console.log("O número gerado aqui é: " + valores + ".");
    console.log("A soma até aqui é: " + soma + ".");
}

