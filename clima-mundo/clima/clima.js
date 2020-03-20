const axios = require('axios').default;


const getClima = async ( lat, lon ) => {
    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f426f667ac6eb856711e8582f1414520`);
    if (!respuesta || !respuesta.data || !respuesta.data.main || !respuesta.data.main.temp) {
        throw new Error(`No hay resultados del tiempo para la latitud ${ lat } y la lonigtud ${ lon }`);
    } else {
        return respuesta.data.main.temp;
    }
}

module.exports = {
    getClima
}