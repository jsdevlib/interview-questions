// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// https://es.javascript.info/task/fibonacci-numbers

export const fibonacci = (n) => {
    // return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2)

    let a = 1
    let b = 1

    for (let i = 3; i <= n; i++) {
        let c = a + b
        a = b
        b = c
    }

    return b
}
