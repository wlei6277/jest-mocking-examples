const math = require('./math')

const addMock = jest.spyOn(math, 'add').mockReturnValue(10)

test('Spy on add function', () => {
    // Observe no console log
    expect(math.add(1, 1)).toBe(10)
    expect(addMock).toBeCalledWith(1, 1)
})

test('Divide implementation stays the same', () => {
    // Observe console logs
    expect(math.divide(2, 4)).toBe(2)
})