const weatherAPI = require('./weatherAPI');

const messageWeather = () => {
    let weather = weatherAPI.getWeather('C');
    return `Today weather is ${weather} C`
}


module.exports = { messageWeather }