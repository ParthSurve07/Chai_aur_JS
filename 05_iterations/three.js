const myObj = {
    js: "JavaScript",
    py: "Python",
    rb: "Ruby",
    go: "Golang",
    ts: "TypeScript"
}

for (const key in myObj) {
    // console.log(myObj[key])
}

const programmingLanguages = ["JavaScript", "Python", "Ruby", "Golang", "TypeScript"]

for (const key in programmingLanguages) {
    // console.log(programmingLanguages[key])
}

const map = new Map()
map.set("IN", "India")
map.set("US", "United States")
map.set("UK", "United Kingdom")
map.set("IN", "India")

for (const key in map) {
    console.log(map[key])
}