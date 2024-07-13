/*Print on the console all elements (numbers) of a table (N x N), using exactly 5 
positions for each element, right justified*/

let table = [
    [`1`, `2`, `3`],
    [`4`, `5`, `6`],
    [`7`, `8`, `9`]
];

//console.log(num1.padStart(3, 0));
for (let i = 0; i < table.length; i++) {
    for (let k = 0; k < table.length; k++) {
        let currentNum = table[i][k];
        console.log(currentNum.padStart(5, 0));
        
    }
    
}