const math = require('./math')

jest.mock('./math')

test('Mocking the entire module', () => {
    // Observe no logging as actual implementation is not called
    math.add(1, 1)
    expect(math.add).toBeCalledWith(1, 1)
})
