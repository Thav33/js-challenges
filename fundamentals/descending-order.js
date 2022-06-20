/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421
*/

const descendingOrder = (numb) => {

    //split argument to array
    let splitNumb = numb.split('')

    //sort array in descending order 
   let sortSplitNumb = splitNumb.sort((a, b) => {
        return (b - a)
    })

    return +(sortSplitNumb.join(''))

}
console.log(descendingOrder('03425101'))