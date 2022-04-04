  'use strict';
  //--------------ARRAY------------------


  /*1. Create a function that takes in a number. 
  The function should return an array that contains every number from 1 to that number as seperate elements */

  //----------SOLUTION----------

  // //ask user to enter value
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


  /* 2. Take an array and remove every second element from the array. 
  Always keep the first and start removing from the next element. */

  //----------SOLUTION----------
  let arrayOne = ['array', 'object', 'string', 'function', 'boolean', 'number'];

  const removeEverySecondElem = () => {

  //loop through the array
  for(let i = 0; i < arrayOne.length; i++) {
    
  //use the splice method to remove every second element from the array
  arrayOne.splice(i +1, 1) //i+1 is the index, 1 is the number of elements to remove
    }
    console.log(arrayOne)
  }
  console.log(removeEverySecondElem())


  /* 3. Write a function add that adds an element to the end of an array. 
        However, the element should only be added if it is not already in the array.
    Example: add([1, 2], 3) should return [1, 2, 3] and add([1, 2], 2) should return [1, 2]. */

//----------SOLUTION----------
    
const arrayElems = [10, 20, 30, 40];
    let inputValue = +prompt('Enter a number', '10')

    const addElemToArray = () => {

      //check if the new value is already in the array, if not add it.
    console.log(  (arrayElems.indexOf(/*element to check for */ inputValue, /*index*/ 0) === -1) ? arrayElems.push(inputValue) : console.log( 'Value exist already' ) )
 
      console.log(arrayElems)
    }
  addElemToArray()


  /*4. Create a function that takes string, Print the reverse of that string to the console
      Create a function that takes in a string 
      Alert if the string is a palindrome or not  */

      //----------SOLUTION----------

      let strVal = prompt('Enter any word(s)', '');

      const strValFunc = (strVal) => {

      //convert string to array. string can't be reversed. 
       let splitStr =  strVal.split('');
       console.log(splitStr)

       //reverse array
       let reverseArr = splitStr.reverse();
       console.log(reverseArr)
     

      // //reverse back to string
      let arrToString = reverseArr.join('')
      console.log(arrToString)

      let output;
      // check if input word is a palindrome
      (strVal.toLowerCase() === arrToString.toLowerCase() ) ? output = `${strVal} is a palindrome` : output = `${strVal} is not a Palindrome. Try again`;
      // console.log(output)

      while(strVal.toLowerCase() !== arrToString.toLowerCase() ) {
        strVal = prompt(`${strVal} is not a Palindrome, try again...`)
     }
      console.log (`${strVal} is a palindrome `)

      }


    // }
      strValFunc(strVal)



/*5. Create a function named 'divisors' that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' */

//----------SOLUTION----------

let userPromptNumb = prompt('Enter Number', '0');
const divisors = () => {
  //create an empty array
  let arrNumb = [];

 // 2 is assigned to i because the question says the returned array should not include 1
  for(let i = 2; i < userPromptNumb; i++){
//  alert(i)
  if(userPromptNumb % i === 0) {
 //if condition is met, put values to array
    arrNumb.push(i)
  }
}

//check if integer is a prime number
if(userPromptNumb % 2 !== 0) {

  document.querySelector('#paragraph').innerHTML = `${userPromptNumb} is a PRIME NUMBER.`;
  // console.log(`${userPromptNumb} is a PRIME NUMBER.`)
} else {
  document.querySelector('#paragraph').innerHTML = `${userPromptNumb} is NOT a PRIME NUMBER`;
  // console.log(`${userPromptNumb} is NOT a PRIME NUMBER`)
}
 console.log(arrNumb)
// }
}
divisors(userPromptNumb)

/* 6.
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
*/

//----------SOLUTION----------

//Using Reduce Method
const sumOfArr = (arrOfNums) => {

  let sum = arrOfNums.reduce((a, c) => {
    return a + c;
  })
  return `the sum of the array is ${sum} `;
}

let outputFunc = sumOfArr( [3,2,2,4])
console.log(outputFunc)


//Using for-loop method
const arraySum = (arrNums) => {

  let total = 0

  for(let i = 0; i < arrNums.length; i++) {
    total = total + arrNums[i];
  }

  return `the sum of the array equals ${total} `;
}

let funcCall = arraySum( [5,4,2,1]);
console.log(funcCall)