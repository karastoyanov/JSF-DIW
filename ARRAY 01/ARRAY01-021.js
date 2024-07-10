/*
ARRAY01-021: Print on the console all elements (numbers) of a table (N x N), using exactly 5
positions for each element, right justified.
*/

const arr = [[43, 95, 68, 89], [-9, 0, 84, 300], [-16, -19, -158, 222], [65, -19, 5, 53]];


for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j].toString().padStart(5,' '));
    }
}
