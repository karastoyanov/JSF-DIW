//  ARRAY01-003: Write a program to find the difference between the maximum element and the minimum element from a one-dimensional array.

let oneArray =  [5, 10, 15, 25, 30]

let maxEl = oneArray[0];

for (let i = 0; i < oneArray.length; i++) {

    if (oneArray[i] > maxEl) {

        maxEl = oneArray[i];
    }

} //console.log(maxEl)
 let minEl = oneArray[0];

for ( let i = 0; i<oneArray.length; i++)
{   if(oneArray[i] < minEl){
    
            minEl = oneArray[i];
    
        }}

console.log(`The difference between the max element: ${maxEl} and the min element: ${minEl} is:` + (maxEl - minEl));
