// const coding = ["JavaScript", "Python", "Ruby", "Java", "C++"]

// const values = coding.forEach ( (item) => {
//     console.log(item)
// } )

// console.log(values)

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const nums = num.filter((item) => item > 4)
// console.log(nums)

const books = [
    { title: "Book one", genre: "History", publish: 1981, edition: 2014},
    { title: "Book two", genre: "Fiction", publish: 1988, edition: 2000},
    { title: "Book three", genre: "Science", publish: 2004, edition: 2015},
    { title: "Book four", genre: "Kids", publish: 1991, edition: 1999},
    { title: "Book five", genre: "Science", publish: 2005, edition: 2010},
    { title: "Book six", genre: "Fiction", publish: 2000, edition: 2014},
    { title: "Book seven", genre: "Novel", publish: 2014, edition: 2023},
    { title: "Book eight", genre: "Fiction", publish: 1999, edition: 2005},
    { title: "Book nine", genre: "Non-Fiction", publish: 2003, edition: 2024}
]

const userBooks = books.filter((book) => book.genre === "Fiction")

console.log(userBooks)