const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Impreme en consola la tabla de multiplicar', opts)
    .command('crear', 'Generar la tabla de multiplicar en un fichero', opts)
    .help()
    .argv;

module.exports = {
    argv
}