const math = require('./math')

test('Reassign a function directly with jest.fn()', () => {
    expect(math.add(1, 1)).toBe(2)
    math.add = jest.fn().mockReturnValue(3)
    expect(math.add(1, 1)).toBe(3)
})


