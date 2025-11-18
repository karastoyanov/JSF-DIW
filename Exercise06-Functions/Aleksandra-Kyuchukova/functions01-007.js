"use strict"
/*
FUNCTIONS01-007: Write a function that takes three numbers as arguments and returns the 
biggest sum of two of the numbers.
*/

function BiggestSum(n1, n2, n3) {
    let sumN1N2 = n1 + n2;
    let sumN1N3 = n1 + n3;
    let sumN2N3 = n2 + n3;

    if (sumN1N2 > sumN1N3 && sumN1N2 > sumN2N3) {
        console.log(`The biggest sum is: ${sumN1N2}, numbers ${n1} & ${n2}`);
    } else if (sumN1N3 > sumN1N2 && sumN1N3 > sumN2N3) {
        console.log(`The biggest sum is: ${sumN1N3}, numbers ${n1} & ${n3}`)
    } else if (sumN2N3 > sumN1N2 && sumN2N3 > sumN1N3) {
        console.log(`The biggest sum is: ${sumN2N3}, numbers ${n2} & ${n3}`)
    }
}

BiggestSum(4, 5, 6);
