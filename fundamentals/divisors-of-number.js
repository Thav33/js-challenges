/*
output the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
*/

const divisors = (numb) => {

    for(let i = 1; i <= numb; i++) {

        
        (numb % i === 0) ? console.log(` ${i} is a divisor of ${numb}`) : false
        }
}

console.log(divisors(4))