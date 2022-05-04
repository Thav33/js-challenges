/*
Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/

const capitalize = (string) => {

  //split the string into an array
  let splitWords = string.split(' ')
 
  //loop through the array to get every word and capitalize first letter
   for(let i = 0; i < splitWords.length; i++) {
     
    splitWords[i] = splitWords[i].charAt(0).toUpperCase() + splitWords[i].substring(1)

  }
  //join the array back to a string
   return splitWords.join(' ')
}

console.log( capitalize("how can mirrors be real if our eyes aren't real") )
