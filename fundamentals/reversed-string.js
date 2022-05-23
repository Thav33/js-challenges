/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
*/

const reverseString = (str) => {
    //convert str to array
    let splitStr = str.split('');

    //reverse array element
    let reversStr = splitStr.reverse(); 

    //return reversed element and convert to string
    return reversStr.join('');
}
console.log(reverseString('niraloba rotciv'))