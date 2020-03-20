const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');
const argv  = require('./config/yargs').argv;
const colors = require('colors');

let command = argv._[0];

switch( command ) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then( archivo => console.log(`El archivo ${archivo.blue} ha sido creado`)).catch( e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}

/*
const { crearArchivo } = require('./multiplicar/multiplicar.js');

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];
console.log(base);

crearArchivo(base).then( archivo => console.log(`El archivo ${archivo} ha sido creado`)).catch( e => console.log(e));*/
