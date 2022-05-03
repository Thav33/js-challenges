/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
*/

const arrInverse = (arr) => {
  const invertArr = [];

  //loop through the array to get every elements
     arr.forEach((elem) => {
       (elem > 0) ? invertArr.push( -(elem)) :
       (elem < 0) ? invertArr.push(Math.abs(elem)) :
       (elem === 0) ? invertArr.push( -(elem)) : false
    })

 return invertArr
 }

console.log(arrInverse( [-0, -2, -3, 45, 22] ))
