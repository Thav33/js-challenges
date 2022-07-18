/*
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]
*/

const inBetween = (int1, int2) => {
    let arrayNum = [];

    for(let i = int1; i <= int2; i++) {
         arrayNum.push(i)
    }
    return arrayNum

}
console.log(inBetween(-5, 10))