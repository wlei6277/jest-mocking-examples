const weatherAPI = require('./weatherAPI');
const { showWeather } = require('./showWeather');

jest.mock('./weatherAPI');
test('Return the Weather message', () => {
    const format = 'C'
    //weatherAPI.getWeather = jest.fn((format) => `${format} Fire`);

    // jest.spyOn(weatherAPI, 'getWeather')
    // weatherAPI.getWeather.mockImplementation((format) => `${format} Fire`)

    const result = showWeather();
    const expected = `Today weather is ${format} Fire`;

    expect(weatherAPI.getWeather.mock.calls).toEqual([
        ['C']
    ])
    
    expect(weatherAPI.getWeather).toHaveBeenCalledTimes(1);
    expect(weatherAPI.getWeather).toHaveBeenCalledWith('C');
    expect(weatherAPI.getWeather).toHaveBeenNthCalledWith(1,'C');
    expect(result).toBe(expected);
    weatherAPI.getWeather.mockRestore();
})

