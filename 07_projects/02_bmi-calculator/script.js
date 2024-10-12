

const submit = document.querySelector('#subBtn')


submit.addEventListener("click", function() {
    console.log("Button clicked")
    const weight = parseInt(document.querySelector('#weight').value)
    const height = parseInt(document.querySelector('#height').value)
    const result = parseInt(document.querySelector('#result').value)

    if (weight === "" || weight < 0 || isNaN(weight)) {
        result.textContent = "Please enter a valid weight"
    }
    else if (height === "" || height < 0 || isNaN(height)) {
        result.textContent = "Please enter a valid height"
    }
    else {
        const bmi = weight / (height * height);
        result.textContent = `Your BMI is ${bmi}`
    }
})