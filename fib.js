// this Fibs function takes a number and uses iteration method to return an array containing containing that many number of the fibonacci sequence.
function fibs(n) {
  let arr = [0, 1]
  if (n <= 0) return "invalid number, n should be a number greater than 0"
  if (n == 1) return [0]
  if (n == 2) return [0, 1]

  for (i = 2; i < n; i++) {
    let fibNum = arr[i - 1] + arr[i - 2]
    arr.push(fibNum)
  }
  return arr
}

// FibRec is a function that takes a number n and the returns the fibonacci number of that n position in the fibonacci sequence
function fibRec(n) {
  if (n <= 0) return "invalid number, n should be a number greater than 0"
  if (n == 1) return 0
  if (n == 2) return 1

  return fibRec(n - 1) + fibRec(n - 2)
}

// FibRecSeries take a number n and uses recursion to return that many number of an array containing fibonacci series.
function fibRecSeries(n) {
  let arr = [0, 1]
  if (n <= 0) return "invalid number, n should be a number greater than 0"
  if (n == 1) return [0]
  if (n == 2) return [0, 1]

  let fn = fibRecSeries(n - 1)[n - 2] + fibRecSeries(n - 2)[n - 3]

  return [...fibRecSeries(n - 1), fn]
}

function fibSeries(n) {
  if (n <= 0) return "invalid number, n should be greater than 0"
  if (n == 1) return [0]
  if (n == 2) return [0, 1]

  return [
    ...fibSeries(n - 1),
    fibSeries(n - 1)[n - 2] + fibSeries(n - 2)[n - 3],
  ]
}
console.log(fibRecSeries(8))
