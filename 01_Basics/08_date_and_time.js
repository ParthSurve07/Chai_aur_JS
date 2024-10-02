let d = new Date()
// console.log(d.toString())
// console.log(d.toDateString())
// console.log(d.toLocaleString())

let date = new Date(2024, 0, 1)
// console.log(date.toDateString())
// console.log(date.getMonth())

let time = Date.now()
// console.log(Math.floor(time / 1000))

console.log(d.toLocaleString("default", {
    weekday: "long"
}))