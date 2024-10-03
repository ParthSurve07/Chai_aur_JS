// Object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Parth",
    age: 19,
    location: "India",
    [mySym]: "mySym",
    email: "parth@google.com",
    isStudent: true
}

// console.log(jsUser.email)
// console.log(jsUser["email"])

// Freezes the object and makes it immutable
// Object.freeze(jsUser) 

jsUser.greeting = function () {
    console.log("Hello JS User")
}

jsUser.greetingTwo = function () {
    console.log(`Hello ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())