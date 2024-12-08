// Accepted
// Runtime: 0 ms, faster than 100%
// Memory Usage: 51.15 MB, less than 42.09%
function climbStairs(n: number): number {
    if (n <= 2) return n

    let previous = 1;  // Represents the number of ways to reach the (n-2)th step
    let current = 2;   // Represents the number of ways to reach the (n-1)th step
    let step = 2;      // Tracks the current step

    while (step < n) {
        const next = previous + current;  // The number of ways to reach the current step
        previous = current;  // Update previous to the previous current step
        current = next;      // Update current to the next step
        step++;              // Move to the next step
    }

    return current;  // Return the number of ways to reach the nth step
};

// Accepted (Recursive version with memoization to avoid time exceed)
// Runtime: 0 ms, faster than 100%
// Memory Usage: 51.60 MB, less than 11.55%
// function climbStairs(n: number, memo: number[] = []): number {
//     // Base cases
//     if (n <= 2) return n;

//     // Check if the value is already computed
//     if (memo[n] !== undefined) {
//         return memo[n];
//     }

//     // Compute the value recursively and store it in memo
//     memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);

//     return memo[n];
// };