/*
ARRAY01-023: Array A has N elements. The two-dimensional array B has N x N size. Check if
the array A matches any of the columns in array B. Print the column number if matches,
otherwise – print “no match with the columns”.
*/
const twoDimArr = [[43, 95, 68, 89], [-9, 0, 84, 300], [-16, -19, -158, 222], [65, -19, 5, 53]];
const oneDimArr = [68, 84, -158, 5];
//const oneDimArr = [69, 84, -158, 5]; //for testing
let j = 0;

for (let index = 0; index < twoDimArr.length; index++) {
    const tempArr = [];
    for (let i = 0; i < twoDimArr.length; i++) {

        tempArr.push(twoDimArr[i][j]);
        if (i == twoDimArr[i].length - 1) {
            j++;
        }
    }
    if (oneDimArr.toString() == tempArr.toString()) {
        console.log(`The column number is ${j} and the column numbers are ${tempArr}`);
        break;
    }
    if (index == twoDimArr.length - 1 && oneDimArr.toString() != tempArr.toString()) {
        console.log(`no match with the columns`);
    }
}
