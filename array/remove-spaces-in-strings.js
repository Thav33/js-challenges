/*
Write a function that removes the spaces from the string, then return the resultant string.
*/

const removeSpaces = (string) => {

  let result = string.split(' ');
  return result.join('');

}

console.log( removeSpaces('my name is victor') )