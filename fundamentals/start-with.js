/*
Write a JavaScript program to check if a string starts with 'Java' and false otherwise.
*/
const startWith = (string) => {
    
    //get the first four letters of the string
    let strStart = string.substring(0, 4)
    // return strStart

    //return true if the first four letters is 'java'
    return (strStart.toLowerCase() === 'java') ? ` true, the string starts with '${strStart}' ` : false
}

console.log(startWith('javaScript'))