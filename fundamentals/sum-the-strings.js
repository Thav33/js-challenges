/*
Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"", "" --> "0"
*/

const sumTheString = (str1, str2) => {

    str1 = Number(str1)
    str2 = Number(str2)

    return (str1 + str2).toString()

}
console.log(sumTheString('2', '34'))