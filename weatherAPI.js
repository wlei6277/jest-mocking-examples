const getWeather = (format) => {
    const min = format = 'C' ? 50 : 100;
    return  50;
}

const getMetaWeather = async () => {
    return new Promise((resolve) => {
        resolve('Summer time!')
    })
    
}

module.exports = { getWeather, getMetaWeather}