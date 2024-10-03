// Object singletons

const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Parth"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        usesFullName: {
            firstName: "Parth",
            lastName: "Surve"
        }
    }
}

// console.log(regularUser.fullname.usesFullName.firstName)

const obj1 = {
    1: "one",
    2: "two"
}

const obj2 = {
    3: "three",
    4: "four"
}

const obj3 = { obj1, obj2 }
// console.log(obj3)

const obj4 = Object.assign({}, obj1, obj2)
// console.log(obj4)

const obj5 = { ...obj1, ...obj2 }
// console.log(obj5)

// Destructuring
const course = {
    name: "JS",
    price: 999,
    instructor: "Parth"
}

const {instructor: ins} = course
// console.log(ins)

// {
//     "name": "Parth",
//     "course": "JS",
//     "price": "free"
// }