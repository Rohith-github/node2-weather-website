const request = require('request');

const geocode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoicm9oaXRoMTciLCJhIjoiY2tjMXZpaHplMG1qNDJybGY4NG00MW5xNiJ9.p2PZsJzou8b6DAjskvmolA&limit=1';

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to mapbox services', undefined);
        } else if (body.message === 'Not Found') {
            callback('Unable to find location. Please search for another location', undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            });
        }
    })
}

module.exports = geocode;