/*
ARRAY01-022: Array A has N elements. The two-dimensional array B has N x N size. Check if
the array A matches any of the rows in array B. Print the row number if matches,
otherwise – print “no match with the rows”.
*/

const twoDimArr = [[43, 95, 68, 89], [-9, 0, 84, 300], [-16, -19, -158, 222], [65, -19, 5, 53]];
//const oneDimArr = [-16, -19, -158, 222];

const oneDimArr = [14, -19, -158, 222];   //for testing

for (let i = 0; i < twoDimArr.length; i++) {
    if (twoDimArr[i].toString() == oneDimArr.toString()) {
        console.log (oneDimArr);
        break;
    }
    if (i == twoDimArr.length - 1 && twoDimArr[i].toString() != oneDimArr.toString()) {
        console.log (`no match with the rows`);
    }
}