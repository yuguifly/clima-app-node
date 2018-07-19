const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyBiAYxUXIQtFk__XS0jWpea7hCuuTGdgU0`)
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }
    let location = resp.data.results[0];
    let cordenadas = location.geometry.location;

    console.log(location.formatted_address);
    //console.log(JSON.stringify(resp.data, undefined, 2));
    console.log('lat', cordenadas.lat);
    console.log('lng', cordenadas.lng);

    return {
        direccion: location.formatted_address,
        lat: cordenadas.lat,
        lng: cordenadas.lng
    }

}

module.exports = {
    getLugarLatLng
}