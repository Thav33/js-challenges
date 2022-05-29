/*
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
0 => [0]
*/

const reversedArray = (numb) => {
    //conver int argument to string
    numb = String(numb)

    //convert string to array
    let numArr = numb.split('')
    // return numArr

    //reverse array and convert back to string
    let reversedArr = numArr.reverse()

    //convert each value in array to Number type
    return reversedArr.map((el) => +(el)
)
    
}

console.log(reversedArray(654321))