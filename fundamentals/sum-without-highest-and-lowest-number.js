/*
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

*/

const sumOfArray = (array) => {
  //get the max value of the array
  let maxValue = Math.max(...array)
  // console.log(maxValue)

  //get the max value of the array
  let minValue = Math.min(...array)
  // console.log(minValue)

  //calculate the sum of the array
  let result = array.reduce((acc, val) => {
   return acc + val
  }, 0)
  
  //sum of array minus the highest and lowest
  return result - maxValue - minValue
}

console.log( sumOfArray( [1,5,10,4]))