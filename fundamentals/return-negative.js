/*
Given a number, you have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0

*/

const makeNegative = (numb) => {
    let result = (numb < 0) ? numb : -(numb)
    return result
}
console.log(makeNegative(0))