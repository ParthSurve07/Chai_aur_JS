const buttons = document.querySelectorAll(".box")
const body = document.querySelector("body")

buttons.forEach(function (button) {
    // console.log(button)
    button.addEventListener("click", function (e) {
        console.log(e.target.id)
        if (e.target.id === "purple") {
            body.style.backgroundColor = e.target.id
        } 
        else if (e.target.id === "red") {
            body.style.backgroundColor = e.target.id
        }
        else if (e.target.id === "green") {
            body.style.backgroundColor = e.target.id
        }
        else if (e.target.id === "fuchsia") {
            body.style.backgroundColor = e.target.id
        }
    })
})