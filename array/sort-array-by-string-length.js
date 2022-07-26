/*
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

*/

const sortedArray = (arr) => {
    let result = arr.sort((a, b) => {
        return (a.length - b.length)
    })
    return result

}

console.log(sortedArray( ["Glasses", "Telescopes", "Glasses", "Eyes", "Monocles"] ))