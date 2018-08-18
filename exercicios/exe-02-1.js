//Principal
const flow = require('./exe-02-2');
require('./exe-02-3');
require('./exe-02-4');

var url = process.argv.slice(2);

flow.emit('download', url);