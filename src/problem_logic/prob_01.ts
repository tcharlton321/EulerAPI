
export function prob01 () {
  let total:number = 0
  let t:number = 1000
  while (t > 0) {
    t--
    total += t % 3 === 0 || t % 5 === 0 ? t : 0
  }
  return total
}
