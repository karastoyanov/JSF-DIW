/*
FUNCTIONS01-008: Write a function that calculates the average value of a numbers in array
*/

function calAvg(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum / arr.length;
}

const arr = [10, 15, 20, 25, 30, 35, 40, 45, 50];
const average = calAvg(arr);

console.log("Average value of all numbers is:", average);