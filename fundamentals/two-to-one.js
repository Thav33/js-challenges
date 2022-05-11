/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

let string1 = 'xyaabbbccccdefww';
let string2 = 'xxxxyyyyabklmopq';

const sortedString = () => {
    //combine both strings
    let combinedString = string1.concat(string2)

    //split combined string to array
    let splitString = combinedString.split('')

    //create new array
    let newArr = [];

    //loop through array
    for(str of splitString) {
        (!newArr.includes(str)) ? newArr.push(str) : false;
    }
    return newArr.sort().join('')

}

console.log(sortedString())