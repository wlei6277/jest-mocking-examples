const weatherAPI = require('./weatherAPI');
const { messageWeather, showWeatherStatus } = require('./showWeather');

jest.mock('./weatherAPI');
describe('Show Weather functions', () => {
    test('should return weather message with celsius temperature', () => {
    
        const result = messageWeather();
        const expected = `Today weather is 20, have a nice day!`;
        expect(weatherAPI.getWeather).toHaveBeenCalledWith('C');
        
        expect(result).toBe(expected);
    
        weatherAPI.getWeather.mockRestore();
        
    })
    
    test('Should return async weather', async () => {
        const result = await showWeatherStatus();
        const expected = 'Great day, Enjoy!';
        expect(result).toBe(expected);
    })
})


