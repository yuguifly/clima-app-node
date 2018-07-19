//const axios = require('axios');

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {

        try {
            let coors = await lugar.getLugarLatLng(direccion);
            let temp = await clima.getClima(coors.lat, coors.lng);
            return `el clima en ${coors.direccion} es de ${temp}`;
        } catch (error) {
            return `No se pudo determinar el clima para ${direccion}`;
        }

    }
    // lugar.getLugarLatLng(argv.direccion)
    //     .then(resp => {
    //         console.log(resp);
    //     })
    //     .catch(e => console.log(e));

// clima.getClima(36.7707159, -2.797901)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(e => console.log(e));

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error))

// let encodedUrl = encodeURI(argv.direccion);

// axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyBiAYxUXIQtFk__XS0jWpea7hCuuTGdgU0`)
//     .then(resp => {
//         //console.log(resp.data);

//         let location = resp.data.results[0];
//         let cordenadas = location.geometry.location;
//         console.log(location.formatted_address);
//         //console.log(JSON.stringify(resp.data, undefined, 2));
//         console.log('lat', cordenadas.lat);
//         console.log('lng', cordenadas.lng);
//     })
//     .catch(e => console.log('Error!!!', e));