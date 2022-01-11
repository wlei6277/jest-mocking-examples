const weatherAPI = require('./weatherAPI');
const { messageWeather } = require('./showWeather');

jest.mock('./weatherAPI');
test('should return weather message with celsius temperature', () => {
    
    const result = messageWeather();
    const expected = `Today weather is 20, have a nice day!`;
    expect(weatherAPI.getWeather).toHaveBeenCalledWith('C');
    
    expect(result).toBe(expected);

    weatherAPI.getWeather.mockRestore();
    
})

