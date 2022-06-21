/*
Create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
*/

const listFilter = (list) => {

    let result = list.filter((list) => {
       return typeof list != 'string'
    })

    return result
}

console.log(listFilter([1,2,'a',5,'b',8,'321']))