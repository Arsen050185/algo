// memorization
// js objects, kes will be arg to fn, value will return value


const fib = (n, memo = {}) => {
    if (n in memo) return memo[n]
    if (n <= 2) return 1
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    return memo[n]
}

// O(n)

// const fib = (n) => {
//     if (n <= 2) return 1
//     return fib(n - 1) + fib(n - 2)
// }

console.log(fib(500))

// O(2^n)