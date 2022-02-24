const add = (a, b) => {
    console.log(`Adding ${a} and ${b}`)
    return a + b
}

const subtract = (a, b) => b - a
const multiply = (a, b) => a * b
const divide   = (a, b) => {
    console.log(`Dividing ${b} by ${a}`)
    return b / a
}

module.exports = { add, subtract, multiply, divide }


