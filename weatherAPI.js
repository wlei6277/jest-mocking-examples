const getWeather = (format) => {
    const min = format = 'C' ? 50 : 100;
    return  Math.trunc(Math.random() * (min - 0) + min);
}



module.exports = { getWeather}