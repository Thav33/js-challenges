  'use strict';
  //--------------ARRAY------------------


  /*1. Create a function that takes in a number. 
  The function should return an array that contains every number from 1 to that number as seperate elements */

  //----------SOLUTION----------

  // //ask user to enter value
  // // let InputNum = prompt('Enter Number', '0')

  // //create a function with one parameter 'num'
  // const arrReturn = (num) => {
  //   //create an empty array
  //    let arrNum = [];
  //    //loop through to get values in the array
  //    for(let i = 1; i <= InputNum; i++) {
      
  //     //push values into our empty arrays 
  //     arrNum.push(i)
  //     // console.log(i)
  //    }
  //    //output our array after pushing new values into it
  //    console.log(arrNum)
  // }
  // //call function
  // arrReturn(InputNum)


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


  /* 3. Write a function add that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
    Example: add([1, 2], 3) should return [1, 2, 3] and add([1, 2], 2) should return [1, 2]. */

    const arrayElems = [10, 20, 30, 40];
    let inputValue = +prompt('Enter a number', '10')

    const addElemToArray = () => {

      //check if the new value is already in the array, if not add it.
      (arrayElems.indexOf(/*element to check for */ inputValue, /*index*/ 0) === -1) ? arrayElems.push(inputValue) :console.log( 'Value exist already' )
 
      console.log(arrayElems)
    }
  addElemToArray()
