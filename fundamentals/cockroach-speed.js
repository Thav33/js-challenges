/*
The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30
*/

const cockroachSpeed = (speed) => {
    const kilometer2Centimeter = 1 * 1000 * 100
    const hours2Secs = 1 * 60 * 60

    result = speed * kilometer2Centimeter / hours2Secs
    return Math.floor(result)
}
console.log(cockroachSpeed(1.50))