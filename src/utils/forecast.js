const request = require('request');

const forecast = (longitude, latitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=36bc4b51ac3deecf2a6d9e8c020a2329&%20query=' + latitude + ',' + longitude + '&units=f';
    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined);
        } else if (body.error) {
            callback('Unable to find forecast for given location', undefined);
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out.It feels like ' + body.current.feelslike + ' degrees out. And humidity is ' + body.current.humidity + '%.')
        }
    });

}

module.exports = forecast;