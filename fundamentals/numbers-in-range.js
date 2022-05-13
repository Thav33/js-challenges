"use strict"
/*
Write a program to check if two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

const numbsInRange = (num1, num2) => {

    let isRange = (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60 ) || 
    
    (num1 >= 70 && num1 <= 100 && num2 >= 70 && num2 <= 100) ? 

    true : false

    return isRange;

}

console.log(numbsInRange(77, 88))