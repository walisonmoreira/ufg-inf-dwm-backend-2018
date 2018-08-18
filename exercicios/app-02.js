var mensagem = 'Hello Walison';

//Não está na global.
console.log(global.mensagem);

global.mensagem = mensagem;

//Está na global.
console.log(global.mensagem);