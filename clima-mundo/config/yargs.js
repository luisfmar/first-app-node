const direccion = {
    alias: 'd',
    desc: 'Dirección de la ciudad para obtener el clima',
    demmand: true
}

const argv = require('yargs')
    .options({
        direccion: direccion
    })
    .help()
    .argv;

module.exports = {
    argv
}