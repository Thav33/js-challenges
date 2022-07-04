    /*
    Complete the solution so that the function will break up camel casing, using a space between words.

    Example
    "camelCasing"  =>  "camel Casing"
    "identifier"   =>  "identifier"
    */

    const breakCamelCase =  (str) => {

        const strToArr = str.split('')

        const checkForCamelCasing = strToArr.map((element) => {

            return (element === element.toUpperCase()) ? 
            " " + element : element
        
        })
        
        return checkForCamelCasing.join('')

    }
    console.log(breakCamelCase('breakCamelCase'))