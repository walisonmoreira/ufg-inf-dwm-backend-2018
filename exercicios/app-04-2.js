var url = 'http://meuservidordelog.com.br';

function log(message) {
    //Faz log remoto via http.
    console.log(message);
}

//exports.log = log;
module.exports.log = log;