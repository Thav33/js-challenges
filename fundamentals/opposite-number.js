/*
Given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
-34: 34

*/

const oppositeNumber = (numb) => {

    let result = (numb) ? -(numb) : numb

    return result;

}
console.log(oppositeNumber(7464))