// array

const arr = [0, 1, 2, 3, 4, 5]
const heros = ['Ironman', 'Thor', 'Hulk', 'Captain America', 'Black Widow', 'Hawkeye']

const arr2 = new Array(1, 2, 3, 4, 5)

// Array methods
arr.push(6)
arr.push(7)
arr.pop()

// arr.unshift(0) // add element at the beginning of the array
// arr.shift() // remove element from the beginning of the array

// console.log(arr)

// console.log(arr.includes(3)) // true

const newArr = arr.join(' ')

// console.log(arr)
// console.log(newArr)

// slice and splice
const a1 = [1, 2, 3, 4, 5]
const a2 = a1.slice(1, 3) // slice from index 1 to 3
console.log(a2)
console.log(a1)

const a3 = [1, 2, 3, 4, 5]
const a4 = a3.splice(1, 2) // remove 2 elements starting from index 1
console.log(a4)
console.log(a3)