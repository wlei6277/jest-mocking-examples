const getWeather = (format) => {
    const min = format = 'C' ? 50 : 100;
    return  Math.trunc(Math.random() * (min - 0) + min);
}

const getWind = () => {
    return Math.trunc(Math.random() * (10 - 0) + 0);
}

module.exports = { getWeather, getWind}