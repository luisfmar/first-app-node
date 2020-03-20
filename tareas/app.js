// const argv = require('yargs').argv;

const argv  = require('./config/yargs').argv;
const services = require('./services/services');

let comando = argv._[0];



switch ( comando ) {
    case 'crear':
        let tarea = services.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let list = services.getList();
        for (let tarea of list) {
            services.mostrarTarea(tarea);
        }
        break;
    case 'actualizar':
        let completa;
        if (argv.estado && argv.estado.toString().toLowerCase() === 'true') {
            completa = true;
        } else if (argv.estado && argv.estado.toString().toLowerCase() === 'false') {
            completa = false;
        } else {
            throw new Error('Debe indicar un valor boolean para el estado completado');
        }
        services.actualizar(argv.descripcion, completa);
        break;
    case 'borrar':
        let borrado = services.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('El comando no es reconocido');
}