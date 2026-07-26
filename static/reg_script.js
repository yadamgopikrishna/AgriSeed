// 1. Select all HTML elements
const registerForm = document.querySelector("#registerForm");

const fullname = document.querySelector("#fullname");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const village = document.querySelector("#village");
const district = document.querySelector("#district");
const state = document.querySelector("#state");
const pincode = document.querySelector("#pincode");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");

const togglePassword = document.querySelector("#togglePassword");
const toggleConfirmPassword = document.querySelector("#toggleConfirmPassword");

const strength = document.querySelector("#strength");
const confirmMessage = document.querySelector("#confirm-message");

const lengthRule = document.querySelector("#length-rule");
const uppercaseRule = document.querySelector("#uppercase-rule");
const lowercaseRule = document.querySelector("#lowercase-rule");
const numberRule = document.querySelector("#number-rule");
const specialRule = document.querySelector("#special-rule");
function showMessage(icon, title, message, input = null, callback = null) {

    Swal.fire({
        icon: icon,
        title: title,
        text: message,
        confirmButtonColor: "#2E7D32"
    }).then(function () {

        if (callback) {
            callback();
        }

    });

    if (input) {
        input.focus();
    }

}




// 2. Password Show/Hide

togglePassword.addEventListener("click", function () {

    if (password.type === "password") {
        password.type = "text";
        togglePassword.textContent = "🙈";
    } else {
        password.type = "password";
        togglePassword.textContent = "👁";
    }

});


// 3. Confirm Password Show/Hide

toggleConfirmPassword.addEventListener("click", function () {

    if (confirmPassword.type === "password") {
        confirmPassword.type = "text";
        toggleConfirmPassword.textContent = "🙈";
    } else {
        confirmPassword.type = "password";
        toggleConfirmPassword.textContent = "👁";
    }

});


// 4. FUNCTION (Create it here)

function checkPasswords() {

    if (confirmPassword.value === "") {

        confirmMessage.textContent = "";

    }
    else if (password.value === confirmPassword.value) {

        confirmMessage.textContent = "✅ Passwords Match";
        confirmMessage.style.color = "green";

    }
    else {

        confirmMessage.textContent = "❌ Passwords Do Not Match";
        confirmMessage.style.color = "red";

    }

}


// 5. Password Strength Checker

password.addEventListener("input", function () {

    let userPassword = password.value;

    let hasUppercase = /[A-Z]/.test(userPassword);
    let hasLowercase = /[a-z]/.test(userPassword);
    let hasNumber = /[0-9]/.test(userPassword);
    let hasSpecial = /[@#$%^&*!]/.test(userPassword);

    // Rules

    if (userPassword.length >= 8)
        lengthRule.textContent = "✅ At least 8 characters";

    else
        lengthRule.textContent = "❌ At least 8 characters";

    if (hasUppercase)
        uppercaseRule.textContent = "✅ One uppercase letter";
    else
        uppercaseRule.textContent = "❌ One uppercase letter";

    if (hasLowercase)
        lowercaseRule.textContent = "✅ One lowercase letter";
    else
        lowercaseRule.textContent = "❌ One lowercase letter";

    if (hasNumber)
        numberRule.textContent = "✅ One number";
    else
        numberRule.textContent = "❌ One number";

    if (hasSpecial)
        specialRule.textContent = "✅ One special character";
    else
        specialRule.textContent = "❌ One special character";


    // Strength Message

    if (userPassword.length === 0) {

        strength.textContent = "";

    }
    else if (
        userPassword.length >= 8 &&
        hasUppercase &&
        hasLowercase &&
        hasNumber &&
        hasSpecial
    ) {

        strength.textContent = "🟢 Strong Password";
        strength.style.color = "green";

    }
    else if (userPassword.length >= 6) {

        strength.textContent = "🟡 Medium Password";
        strength.style.color = "orange";


    }
    else {

        strength.textContent = "🔴 Weak Password";
        strength.style.color = "red";
        // Check password match whenever password changes

        checkPasswords();

    }
});


// 6. Check password match whenever confirm password changes

confirmPassword.addEventListener("input", checkPasswords);

registerForm.addEventListener("submit", function (event) {

    // Stop the normal submit first
    event.preventDefault();

    let userPassword = password.value;

    let hasUppercase = /[A-Z]/.test(userPassword);
    let hasLowercase = /[a-z]/.test(userPassword);
    let hasNumber = /[0-9]/.test(userPassword);
    let hasSpecial = /[@#$%^&*!]/.test(userPassword);

    if (
        userPassword.length < 8 ||
        !hasUppercase ||
        !hasLowercase ||
        !hasNumber ||
        !hasSpecial
    ) {
        showMessage(
            "warning",
            "Validation Error",
            "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character.",
            password
        );
        return;
    }

    // Continue with your Fullname, Phone,
    // Email, Village...


    // Full Name
    if (fullname.value.trim() == "") {

        showMessage("error", "Validation Error", "Please enter Full Name", fullname);

        return;

    }

    // Phone Number

    if (phone.value.trim() == "") {

        showMessage("error", "Validation Error", "Please enter Phone Number", phone);

        return;

    }

    if (phone.value.length !== 10) {

        showMessage("error", "Validation Error", "Phone Number must contain exactly 10 digits", phone);

        return;

    }

    // Email

    if (email.value.trim() === "") {

        showMessage("info", "Validation Error", "Please enter Email", email);


        email.focus();

        return;

    }

    // Village

    if (village.value.trim() === "") {

        showMessage("info", "Validation Error", "Please enter Village", village);

        village.focus();

        return;

    }

    // District

    if (district.value.trim() === "") {

        showMessage("info", "Validation Error", "Please enter District", district);

        district.focus();

        return;

    }

    // State

    if (state.value.trim() === "") {

        showMessage("info", "Validation Error", "Please enter State", state);

        state.focus();

        return;

    }

    // Pincode

    if (pincode.value.trim() === "") {

        showMessage("info", "Validation Error", "Please enter Pincode", pincode);

        pincode.focus();

        return;

    }

    if (pincode.value.length !== 6) {

        showMessage("error", "Validation Error", "Pincode must contain exactly 6 digits", pincode);

        pincode.focus();

        return;

    }

    // Password

    if (password.value.trim() === "") {

        showMessage("error", "Validation Error", "Please enter Password", password);


        password.focus();

        return;

    }

    // Confirm Password

    if (confirmPassword.value.trim() === "") {

        showMessage("error", "Validation Error", "Please enter Confirm Password", confirmPassword);

        confirmPassword.focus();

        return;

    }

    // Password Match

    if (password.value !== confirmPassword.value) {

        showMessage("error", "Validation Error", "Passwords do not match", confirmPassword);

        return;

    }

    // Everything is correct
    showMessage(
        "success",
        "Success",
        "Registration Successful!",
        null,
        function () {
            registerForm.submit();
        }
    )
});