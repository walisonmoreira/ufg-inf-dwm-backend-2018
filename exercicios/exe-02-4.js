//Mostrador de Arquivo
const flow = require('./exe-02-2');

flow.on('showFile', (arquivo) => {
    console.log(`Mostrando arquivo "${arquivo}"`);
});