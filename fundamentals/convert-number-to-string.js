/*
Write a function to transform a number into a string.

Examples:
123 --> "123"
999 --> "999"
*/

const numbToString = (numb) => {

    let str = String(numb)
    return `${typeof str} - ${str} `

}
console.log(numbToString(123))