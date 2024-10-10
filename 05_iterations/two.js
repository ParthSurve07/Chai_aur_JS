// for of

const arr = [1, 2, 3, 4, 5]

for (const value of arr) {
    // console.log(value)
}

const greetings = 'Hello World!'
for (const greet of greetings) {
    if (greet === " ") {
        continue
    }
    // console.log(`Character: ${greet}`)
}

// maps

const map = new Map()
map.set("IN", "India")
map.set("US", "United States")
map.set("UK", "United Kingdom")
map.set("IN", "India")

// console.log(map)

for (const [key, value] of map) {
    // console.log(`${key}: ${value}`)
}

const myObj = {
    "game1": "NFS",
    "game2": "FIFA",
    "game3": "COD",
    "game4": "GTA"
}

for (const [key, value] of myObj) {
    console.log(`${key}: ${value}`)
}
// object is not iterable by for of loop