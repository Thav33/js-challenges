'use strict';

/* Create a function that takes in a number. 
The function should return an array that contains every number from 1 to that number as seperate elements */

//----------SOLUTION----------

//ask user to enter value
let InputNum = prompt('Enter Number', '0')

//create a function with one parameter 'num'
const arrReturn = (num) => {
  //create an empty array
   let arrNum = [];
   //loop through to get values in the array
   for(let i = 1; i <= InputNum; i++) {
     
    //push values into our empty arrays 
    arrNum.push(i)
    // console.log(i)
   }
   //output our array after pushing new values into it
   console.log(arrNum)
}
//call function
arrReturn(InputNum)