/*
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/

const convertBoolean = (boolean) => {
    let boolToStr = (boolean === true) ?

    "Yes" : "No"

    return boolToStr;
}

console.log(convertBoolean(false))