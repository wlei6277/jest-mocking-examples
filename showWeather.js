const weatherAPI = require('./weatherAPI');

const messageWeather = () => {
    let weather = weatherAPI.getWeather('C');
    return `Today weather is ${weather}, have a nice day!`
}

const showWeatherStatus = async () => {
    let weather =  await weatherAPI.getMetaWeather();
    return `${weather}, Enjoy!`
}

module.exports = { messageWeather, showWeatherStatus }