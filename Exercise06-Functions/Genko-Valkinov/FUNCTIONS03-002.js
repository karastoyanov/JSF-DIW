// FUNCTIONS03-002: Write a recursive function that takes a number n and returns the n-th 
// Fibonacci sequence number (assume that the first 2 numbers are: 0, 1).

const fibonacci = (n, memo = {}) => {
    if (n in memo) {
        return memo[n];
    }

    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }

    const result = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    memo[n] = result;

    return result;
};

console.log(fibonacci(1000));

// Uses memoization to calculate large numbers