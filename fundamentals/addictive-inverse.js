/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
*/


const arrInverse = (arr) => {
  const invertArr = [];

  //loop through the array to get every elements
  for(let i = 0; i < arr.length; i++) {

    //if array contains values greater than 0, invert the value
    if(arr[i] > 0) { 
       invertArr.push( -(arr[i]) )

       //if array contains values less than 0, invert the value
    } else if( arr[i] < 0) {
      invertArr.push(Math.abs(arr[i]) )

    } else if(arr[i] === 0) {
      invertArr.push( -(arr[i]) )
    }
  }

 return invertArr
 }

console.log(arrInverse( [-0, 2, 3, -45, 22] ))
