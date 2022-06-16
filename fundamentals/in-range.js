/*
 Write a JavaScript program to check if two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

const inRange = (x, y) => {
    let result = ((x >= 40 && x <= 60 && y >= 40 && y <= 60) 
    || 
    (x >= 70 && x <= 100 && y >= 70 && y <= 100)) ?
     
    true : false
    
    return result
}

console.log(inRange(4006, 6000))
