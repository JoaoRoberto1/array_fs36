// como criar um array/lista vazio
const nomes = [];

const nomesPessoas = ['Alberto', 'Pedro', 'Dárquio', 'Rafa'];

const anos = [12, '25', 30];

// adicionando novos elementos à array
nomes.push('Roberto');

//console.log(nomes);

nomes.push('Edmar');

//console.log(nomes);

nomes.push(2)

//console.log(nomes)

////////////////////

const idades = [1,23,92,8,58,60,20,87,22,36];

//console.log(idades)

//imprimir o 6 elemento, assim o indice = 1, 6-1 = 5 (indice)
//console.log(idades[5]);

//iterar um array

/*for (let i = 0; i < idades.length; i++) {
   console.log(idades[i])
    
} */

idades.forEach(function(value, index, idades) {
    console.log(value*3)
});

