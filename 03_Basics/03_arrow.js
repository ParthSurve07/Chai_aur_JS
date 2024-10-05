const user = {
    username: "Parth",
    price: 999,

    welcomeMsg: function () {
        console.log("Welcome " + this.username);
    }
}

// console.log(user.welcomeMsg())
// user.username = "Sam"
// console.log(user.welcomeMsg())

const chai = () => {
    let username = "Parth"
    console.log(this)
}

// chai()

const addTwo = (a, b) => {
    return a + b
}

const addTwo1 = (a, b) => a + b