# Recursion Exercise

This is the solution to TOP's Recursion exercise. 
The assignment has 3 parts

## Assignment Prompt
1a.  Using iteration, write a function fibs which takes numbers and returns an 
    array containing that many numbers from the fibonacci sequence. Using an 
    example input of 8, this function should return the array 
    [0, 1, 1, 2, 3, 5, 8, 13].

1b.  Write another function FibRecSeries, which solves the same problem recursively

2.  Build a function mergeSort that takes in an array and return a sorted array,
    using the merge sort algorithm. An input of [3, 2, 1, 13, 8, 5, 0, 1] 
    should return [0, 1, 1, 2, 3, 5, 8, 13],
    and an input of [105, 79, 100, 110] should return [79, 100, 105, 110].

## Help

- [Fibonacci Sequence](https://en.wikipedia.org/wiki/Fibonacci_sequence)
- [Video from Khan Academy on Recursive Fibonacci](https://www.youtube.com/watch?v=zg-ddPbzcKM)
- [Merge Sort](https://en.wikipedia.org/wiki/Merge_sort)
- [Merge sort from Harvard’s CS50x course](https://youtu.be/Ns7tGNbtvV4)
- [The concept of merging](https://youtu.be/6pV2IF0fgKY)
- [How Merge Sort Works](https://youtu.be/mB5HXBb_HY8)
- [Running This project Code](https://github.com/nodejs/nodejs.dev/blob/aa4239e87a5adc992fdb709c20aebb5f6da77f86/content/learn/command-line/node-run-cli.en.md)

## Fibonacci_sequence
1. fibs(n) function uses the iteration to produce the fibonacci sequence
2. FibRecSeries(n) function uses the recursion to produce the fibonacci sequence
3. fibRec(n) returns the value of the nth term of the fibonnaci sequence

## MergeSort
1. mergeSort(array) takes in an array and returns a sorted array
2. The solution first created a merge function that takes in 2 sorted array,
    and returns a combined array that is sorted.
3. The solution has 2 types of merge function that returns the same array.
    the first solution made use of the `shift()` method while the second type doesn't.

