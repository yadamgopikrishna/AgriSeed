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

registerForm.addEventListener("submit", function (event) {

    // Stop the normal submit first
    event.preventDefault();


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