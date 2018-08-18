const EventEmitter = require('events');

const emitter = new EventEmitter();

var auditarOrigem = function() {
    console.log('Listener de auditoria da origem.');
}
var auditarDestino = function() {
    console.log('Listener de auditoria do destino.');
}
emitter.on('auditarTransferencia', auditarOrigem);
emitter.on('auditarTransferencia', auditarDestino);


//...
//if (valor >= 10000) {
emitter.emit('auditarTransferencia');
//}
//...