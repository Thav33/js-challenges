/*

You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

area_or_perimeter(6, 10) --> 32
area_or_perimeter(3, 3) --> 9
Note: Assume that it is a square if its length and width are equal, otherwise it is a rectangle.
*/

const areaOrPerimeter = (length, width) => {

    //check if the value of length and width are the same
    let result = (length === width) ? 
    //if length & width are the same, calculate square area
    length * width :
    //else, calculate rectangle perimeter
    2 * (length + width)

    return result

}
console.log(areaOrPerimeter( 3, 3 ))