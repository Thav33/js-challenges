/*
Write a function that takes an argument and returns the square of it.
*/

const squareArgument = (num) => {

    let result = num ** 2
    return `The square of ${num} is ${result} `
}
console.log(squareArgument(9))
