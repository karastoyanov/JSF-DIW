// FUNCTIONS03-003: Write a recursive function that takes two numbers and returns their 
// greatest common divisor (GCD) – най-голям общ делител. The greatest common divisor 
// (GCD) of two numbers is the greatest common factor number that divides them without 
// reminder (без остатък, точно).
// For example: The GCD of 21 and 14 is 7.

const findGreatestCommonDivisor = (a, b) => {
    if(b === 0){
        return a;
    }

    return findGreatestCommonDivisor(b, a % b);
}

console.log(findGreatestCommonDivisor(21, 14));