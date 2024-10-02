// Primitive Data Types
// This is done using call by value method i.e the value is copied to the new variable and the original value is not changed
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. BigInt
// 7. Symbol

// Non-Primitive Data Types or Reference Data Types
// This is done using call by reference method i.e the reference is copied to the new variable and the original value is changed
// 1. Object
// 2. Array
// 3. Function


// ************************ Memory Allocation ************************
// Stack memory
// All premitive data types are stored in stack memory
// We get copy of the value in stack memory
// Example
let name = "parth"
let name2 = name
name2 = "parth2"
console.log(name)
console.log(name2)

// Heap memory
// All non-premitive data types are stored in heap memory
// We get reference of the value in heap memory
// Example
let obj = {
    name: "parth"
}
let obj2 = obj
obj2.name = "parth2"
console.log(obj.name)
console.log(obj2.name)