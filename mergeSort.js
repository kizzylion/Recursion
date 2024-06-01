//merge is a function that merges two sorted arrays together and returns a sorted array that contains both arrays
function merge(arr1, arr2) {
  let arr = []

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      arr.push(arr1.shift())
    } else {
      arr.push(arr2.shift())
    }
  }
  return arr.concat(arr1, arr2)
}

// merge2 is same as merge but for more clarity and understanding
function merge2(arr1, arr2) {
  let arr = []
  let i = 0
  let j = 0

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr.push(arr1[i])
      i++
    } else {
      arr.push(arr2[j])
      j++
    }
  }

  return arr.concat(arr1.slice(i), arr2.slice(j))
}

let arrA = [2, 4, 7, 8, 12]
let arrB = [3, 5, 6, 9, 10, 11, 15]

console.log(merge2(arrA, arrB)) //[(2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)]

//merge sort is a sorting algorithm that works by dividing the array into two halves, then merging the two halves together
function mergeSort(arr) {
  if (arr.length <= 1) return arr

  let mid = Math.floor(arr.length / 2)

  let left = arr.slice(0, mid)
  let right = arr.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}

// MergeSort examples
console.log(mergeSort([5, 4, 3, 2, 1])) // [ 1, 2, 3, 4, 5 ]
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])) // [ 0, 1, 1, 2, 3, 5, 8, 13 ]
