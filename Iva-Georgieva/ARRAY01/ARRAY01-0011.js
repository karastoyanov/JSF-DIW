//ARRAY01-011: Find the maximum elements from each row in two-dimensional array.

let arr = [[9, 98],
           [3, 256],
           [7, 7565]];

let elementColumn1_max = arr[0][0];
let elementColumn2_max = arr[0][1];



for (x = 0; x <= arr.length-1; x++) {
    if ( arr[x][0] > elementColumn1_max) {
        elementColumn1_max = arr[x][0];        
    } 
    for (y = 0; y <= arr.length-1; y++) {
        if ( arr[y][1] > elementColumn2_max) {
            elementColumn2_max = arr[y][1];        
        } 
        
    }     
} 



console.log(elementColumn1_max);
console.log(elementColumn2_max);