/*
Return the number (count) of vowels in the given string.

We will consider (a, e, i, o, u) as vowels.

The input string will only consist of lower case letters and/or spaces.
*/

const vowelCount = (str) => {

    let vowelCount = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    //loop through each string character
    for(let elem of str) {

        //check if there are vowels in the string. if true, return the number of vowels
        vowels.includes(elem) ? vowelCount++ : false
    }
    return vowelCount

}

console.log(vowelCount('victor'))