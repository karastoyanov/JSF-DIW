/*
ARRAY01-006: Write a program to print the odd elements greater than a certain const value 
from one-dimensional array.
*/

const arr = [433, 311, 524, -22, 52, -1];

let value = 200

for (let i = 0; i < arr.length; i++) {
	if (arr[i] >= value && arr[i] % 2 !== 0) {
		console.log(arr[i])
	}
}