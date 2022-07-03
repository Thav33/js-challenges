/*
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

 | Case |                | Return | 

 | name equals owner  | 'Hello boss' | 
 | Otherwise          |'Hello guest' | 

*/

const personalizedMsg = (name, owner) => {
    let message = (name === owner) ? `Hello boss` : `Hello guest`

    return message
}

console.log( personalizedMsg('victor', 'victor'))