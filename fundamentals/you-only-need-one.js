/*
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
*/

const arrayContainsValue = (arr, val) => {

    let result = (arr.includes(val)) ? true : false
    return result;

}
console.log(arrayContainsValue( [2,3,5], 50 ))