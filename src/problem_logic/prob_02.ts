export function prob02 () {
  let total:number = 0
  const fib:number[] = Array(50).fill(0)
  fib[0] = 1
  fib[1] = 1
  let index:number = 1

  while (fib[index - 1] < 4000000) {
    console.log(fib[index - 1] + ' ' + fib[index] + ' ' + total)
    fib[index + 1] = fib[index - 1] + fib[index]
    total += fib[index - 1] % 2 === 0 ? fib[index - 1] : 0
    index++
  }

  return total
}
