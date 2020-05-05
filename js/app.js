//! Validation with simple approch


const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const passowrd = document.getElementById('password')
const password2 = document.getElementById('password2')



//! Show input Error massage
function showError(input, message) {
    const formContorl = input.parentElement;
    formContorl.className = "form-control error";
    const small = formContorl.querySelector('small')
    small.innerHTML = message
}

//
function showSuccess(input) {
    const formContorl = input.parentElement;
    formContorl.className = "form-control success";

}

// Email Validation
function checkEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email.value.trim())) {
        showSuccess(email)
    } else {
        showError(email, 'Email is not valid')
    }
}



/// checking Required Feilds 
function checkRequired(inputArr) {
    inputArr.forEach((input) => {
        if (input.value.trim() === '') {
            showError(input, `${getFieldNameCap(input)} is required`)
        } else {
            showSuccess(input)
        }
    })
}
// Get fieldname Capitalize 
function getFieldNameCap(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

//Check input Lenght
function checkLenght(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldNameCap(input)} must be at least ${min} characters`)

    } else if (input.value.length > max) {
        showError(input, `${getFieldNameCap(input)} must be less then ${max} characters`)

    } else {
        showSuccess(input)
    }

}


// Check Password Match
function checkPassMatch(val1, val2) {
    if (val1.value !== val2.value) {
        showError(val2, "Password do not match")
    }

}
//Event Listener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkRequired([username, email, passowrd, password2])
    checkLenght(username, 3, 15)
    checkLenght(passowrd, 8, 30)
    checkEmail(email)
    checkPassMatch(passowrd, password2)

})













////////////////////////////////////////////////////////////////////
/////////////////////// Validatinon with if Statment///////////////
// if (username.value === '') {
//     showError(username, 'Username is required')
// } else {
//     showSuccess(username)
// }

// if (email.value === '') {
//     showError(email, 'Email is required')
// } else if (!isValidemail(email.value)) {
//     showError(email, 'Email is required')
// } else {
//     showSuccess(email)
// }

// if (passowrd.value === '') {
//     showError(passowrd, 'Password is required')
// } else {
//     showSuccess(passowrd)
// }

// if (password2.value === '') {
//     showError(password2, 'Confirm Password is required')
// } else {
//     showSuccess(password2)
// }