/*
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
*/

const binaryAddition = (num1, num2) => {

    let sum = num1 + num2

    //use 'toString' method to convert to binary
    return sum.toString(2)

}
console.log(binaryAddition(3,3))