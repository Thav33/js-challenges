/*
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

90 <= score <= 100	- 'A'
80 <= score < 90	- 'B'
70 <= score < 80	- 'C'
60 <= score < 70	- 'D'
0 <= score < 60	    - 'F'
*/

const gradeScore = (s1, s2, s3) => {
    //average score
    let avgScore = (s1 + s2 + s3) / 3
 
    //conditions
    let grade = (avgScore < 60) ? 'F' :
    (avgScore < 70) ? 'D' :
    (avgScore < 80) ? 'C' :
    (avgScore < 90) ? 'B' : 'A'
    return grade
}

console.log(gradeScore(100, 40, 120))