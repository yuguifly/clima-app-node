const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=e2080e8471c71c997b5accf03c80f34c`)
    if (resp.data.cod === 400) {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }
    return resp.data.main.temp;
}


module.exports = {
    getClima
}