/*
ARRAY01-007: Write a program to print the positive even elements, greater than a certain 
const value from one-dimensional array.
*/

const arr = [3123, 4324, 321, 452, -232, -1, 837, 110];

const VALUE = 100;

for (let i = 0; i < arr.length; i++) {
	if (arr[i] > VALUE && arr[i] % 2 === 0) {
		console.log(arr[i]);
	}
}