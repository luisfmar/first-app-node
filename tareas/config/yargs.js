
const descripcion = {
    demand: true,
    alias: 'd',
    description: 'Descripción de la tarea por hacer'
}
const optsCrear = {
    descripcion: descripcion
}
const optsActualizar = {
    descripcion: descripcion,
    estado: {
        alias: 'e',
        default: true,
        description: 'Estado de la tarea por hacer'
    }
}

const optsBorrar = {
    descripcion: descripcion
}

const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea por hacer', optsCrear)
    .command('actualizar', 'Actualiza el estado de una tarea', optsActualizar)
    .command('borrar', 'Borra una tarea', optsBorrar)
    .help()
    .argv;

module.exports = {
    argv
}