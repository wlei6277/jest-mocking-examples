module.exports = {
    getWeather: jest.fn((format) => `20`),
    getMetaWeather: jest.fn(() => new Promise((resolve) => resolve('Great day') ))
}