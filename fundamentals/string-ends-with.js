/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

const stringEndsWith = (string, ending) => {

    //condition to check if 'string' ends with 'ending' using 'endsWith' method
    let endStr = (string.endsWith(ending)) ? true : false;

    return endStr;
}

console.log(stringEndsWith('victor', 'tor'))