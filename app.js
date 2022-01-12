const weatherApp  = require('./showWeather');

weatherApp.showWeatherStatus().then(data =>  console.log(data));
console.log(weatherApp.messageWeather());