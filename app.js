const argv = require('./config/yargs.js').yargs;
const {crearTabla} = require("./crearTabla.js")
 
if(argv.listar){crearTabla(argv.base);}
