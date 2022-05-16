/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7
*/
const sumTwoLowestInt = (numbers) => {

    //sort the numbers from lowest to highest
    let sortedNum = numbers.sort((a, b) => {
        return a - b
    })

    //add the first lowest and second lowest number
    return sortedNum[0] + sortedNum[1]
}

console.log( sumTwoLowestInt( [5, 5, 42, 2, 77] ))