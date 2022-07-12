/*
 Write a JavaScript function to check whether an `input` is an array or not.

 Example:

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
 */

 const isInputArray = (arr) => {

    let output = Array.isArray(arr)
    return output

 }

 console.log(isInputArray([2,3,5]))