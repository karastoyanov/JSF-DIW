// ARRAY01-010: Find the minimum elements from each column in two-dimensional array.

let arr = [[9, 98],
           [3, 256],
           [7, 7565]];

let elementColumn1 = arr[0][0];
let elementColumn2 = arr[0][1];



for (x = 0; x <= arr.length-1; x++) {
    if ( arr[x][0] < elementColumn1) {
        elementColumn1 = arr[x][0];        
    } 
    for (y = 0; y <= arr.length-1; y++) {
        if ( arr[y][1] < elementColumn2) {
            elementColumn2 = arr[y][1];        
        } 
   } 
} 

console.log(elementColumn1);
console.log(elementColumn2);





    
    


