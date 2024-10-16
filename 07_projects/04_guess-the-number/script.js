
let randomNumber = parseInt(Math.random() * 100 + 1)

const guess = document.querySelector("#guessField")
const submit = document.querySelector("#submit")
const guesses = document.querySelector(".guesses")
const rGuess = document.querySelector(".rguess")
const loOrHigh = document.querySelector(".loOrHigh")

let playGame = true

let prevGuess = []
let guessCount = 1