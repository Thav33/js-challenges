/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

const fakeBinary = (str) => {
    let strToArr =  str.split('');

    let map =  strToArr.map((elem) => {
       return (elem < 5) ? 0 : 1;
    })
return map.join()
}

console.log(fakeBinary('543451209'))