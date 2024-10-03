const marvelHeros = ["Thor", "Ironman", "Hulk", "Captain America", "Black Widow", "Hawkeye"]
const dcHeros = ["Superman", "Batman", "Wonder Woman", "Flash", "Aquaman", "Cyborg"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros)

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros)

const allNewHeros = [...marvelHeros, ...dcHeros]
// console.log(allNewHeros)

const newArr = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10]]]
const flatArr = newArr.flat(2)
// console.log(flatArr)

