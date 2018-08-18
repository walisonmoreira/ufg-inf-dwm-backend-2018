const os = require('os');

module.exports = {
    show: function() {
        console.log(os.freemem());
        console.log(os.totalmem());
        console.log(os.cpus());
        console.log(os.arch());
        console.log(os.hostname());
    }
}