/*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
*/

const middleCharacter = (str) => {

    //divide the string length by 2 to get the midpoint
    let middle = str.length / 2;
    
    //if str is even, return the 2 middle characters, else return the middle character.
    let middleElements = (str.length % 2 == 0) ? 
    
    str.slice(middle - 1, middle + 1) : 

    str.slice(middle, middle + 1)

    return middleElements;


}

console.log(middleCharacter('iamvictorr'))