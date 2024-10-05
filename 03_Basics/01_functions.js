

function sayMyName(name) {
    console.log(`Hello ${name}`);
}

function calculateCartPrice(...price) {
    return price
}

// console.log(calculateCartPrice(10, 20, 30, 40, 50));

const user = {
    username: "Parth",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}