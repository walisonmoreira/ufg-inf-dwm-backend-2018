//Processador de Download
const flow = require('./exe-02-2');

flow.on('download', (url) => {
    console.log(`Download da url "${url}"`);
    //...
    flow.emit('showFile', 'arquivo.html');
});