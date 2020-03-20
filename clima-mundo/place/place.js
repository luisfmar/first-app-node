const axios = require('axios').default;

const getLugarLatLng = async ( direccion ) => {
    const encodeUlr = encodeURI(direccion);
    const instance = axios.create({
        baseURL:`https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}`,
        timeout: 2500,
        headers: {
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key': 'h5T0L3QPN8mshwWavzSsKXOviNALp1rxJw5jsnEFgrZgWcOAaC'
        }
    });

    const respuesta = await instance.get();
    if (!respuesta || !respuesta.data || respuesta.data.Results.length === 0) {
        throw new Error(`No hay resultados para la dirección: ${ direccion }`);
    } else {
        direccion = respuesta.data.Results[0].name;
        lat = respuesta.data.Results[0].lat;
        lon = respuesta.data.Results[0].lon;
        return {
            direccion,
            lat,
            lon
        }
    }
}

module.exports = {
    getLugarLatLng
}