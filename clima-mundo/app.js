const argv  = require('./config/yargs').argv;
const place  = require('./place/place');
const clima = require('./clima/clima');

const getInfo = async ( direccion ) => {
     dir = await place.getLugarLatLng(direccion);
     res = await clima.getClima(dir.lat, dir.lon);
     return res;
}

getInfo(argv.direccion)
    .then(res =>  console.log (`La temperatura de ${ argv.direccion } es ${ res }`))
    .catch( err => console.log (`No se pudo determinar la temperarutra de ${ argv.direccion }`));