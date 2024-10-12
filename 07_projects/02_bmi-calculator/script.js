

const form = document.querySelector('form')


form.addEventListener("submit", function(e) {
    e.preventDefault()

    const weight = parseInt(document.querySelector("#weight").value)
    const height = parseInt(document.querySelector("#height").value)
    const result = document.querySelector("#result")
    const rcontainer = document.querySelector("#rcontainer")

    if (weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = "Please give a valid weight"
    }
    else if (height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = "Please give a valid height"
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        result.innerHTML = `<span>Your BMI is ${bmi}</span>`

        const div = document.createElement("div")
        div.classList.add = "text-2xl"
        div.classList.add = "text-white"

        if (bmi < 18.6) {
            div.innerHTML = `<span>You are underweight</span>`
            rcontainer.appendChild(div)
        }
        else if (bmi >= 18.6 && bmi <= 24.9) {
            div.innerHTML = `<span>You are in normal range</span>`
            rcontainer.appendChild(div)
        }
        else {
            div.innerHTML = `<span>You are overweight</span>`
            rcontainer.appendChild(div)
        }
    }
})