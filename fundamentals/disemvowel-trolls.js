/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

*/

const vowels = 'aeiou';

function disemvowel(str) {
    //convert string to array
    let splitStr =  str.split('')
    
    //filter out the vowels in the string
    let filterOutVowels =  splitStr.filter((elem) => {
        return !vowels.includes(elem)
    })

    //return string 
    return filterOutVowels.join('')

}

console.log(disemvowel('This website is for losers!'))