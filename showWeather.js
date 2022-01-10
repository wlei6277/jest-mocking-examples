const weatherAPI = require('./weatherAPI');

const showWeather = () => {
    let weather = weatherAPI.getWeather('C');
    return `Today weather is ${weather}`
}

const showWindSpeed = () =>  {

    let windRows = weatherAPI.getWind() | 1;
    let winRowLines = ''
    
    for (let index = 0; index < windRows; index++) {
        winRowLines+= '---'
    }

    return winRowLines;
}

module.exports = { showWeather, showWindSpeed}