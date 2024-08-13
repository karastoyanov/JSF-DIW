/* ARRAY01-012: Add two N x N arrays. 
Hint: each element is the addition of the corresponding elements from both N x N 
arrays:
resultArr[0,0] = A[0][0] + B[0][0] */

const arr1 = [[7, 6, 5],
              [9, 11, 89],
              [87, 90, 765]];

const arr2 = [[8, 8, 9],
              [9, 5, 4],
              [8, 3, 7]];

resultArr = [];

 (x = 0; x <= arr1.length-1; x++) {    
    for (y = 0; y <= arr1.length-1; y++) {
        resultArr = arr1[x][y];
        for (i = 0; i <= arr2.length-1; i++) {    
            for (j = 0; j <= arr2.length-1; j++) {
                resultArr += arr2[i][j];
                console.log(resultArr);
            }        
            
        }

        
    }        
    
}




 