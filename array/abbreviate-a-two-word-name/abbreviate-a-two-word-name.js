/*
  Write a function to convert a name into initials. The input strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H
*/

const convertToInitials = (fullName) => {
  fullName = fullName.split( ' ' )
  
//[0][0]- get the first letter of the firstname, [1][0]- get the first letter of the second name
  return `${fullName[0][0]}.${fullName[1][0]}`.toUpperCase()

}
let output = convertToInitials('victor abolarin')
console.log(`My Initials are ${output} `)

