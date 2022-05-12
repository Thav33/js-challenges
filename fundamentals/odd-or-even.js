/*
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

*/

const oddOrEven = (arr) => {

    //calculate the sum of elements in the array
    let sum = arr.reduce((a, c) => {
        return a + c
    }, 0)
    // return sum

    //condition to check if the sum is even or odd
   return (sum % 2 === 0) ? 'even' : 'odd';
}

console.log(oddOrEven([-5, -5]))
