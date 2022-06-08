/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false

*/

const isIsogram = (str) => {
    let strSplit = str.split('')

    return strSplit.every((elem, index) => {
        
        return str.indexOf(elem) == index;
    
    })
}

console.log(isIsogram('Dermatoglyphics'))
