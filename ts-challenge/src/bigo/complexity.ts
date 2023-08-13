export const constantComplexity = () => {
  let x: number

  x++

  const y: number = x * 2

  return { x, y }
}

console.log(constantComplexity()) // O(1)

export const linearComplexity = (n: number) => {
  const y = n + 2 // O(1)
  for (let i = 0; i < n; i++) {
    console.log(i) // O(n)
    console.log(y) // O(n)
  }
}

export const quadraticComplexity = (n: number) => {
  for (let i = 0; i < n; i++) {
    console.log(i) // O(n)
    for (let j = 0; j < n; j++) {
      console.log(j) // O(n^2)
    }
  }
}

console.log(linearComplexity(10)) // O(n)
