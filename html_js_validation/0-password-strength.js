document.addEventListener("DOMContentLoaded", function () {
    const passwordForm = document.getElementById("passwordForm");
    const passwordInput = document.getElementById("password");
    const errorParagraph = document.getElementById("error");

    passwordForm.addEventListener("submit", function (event) {
        event.preventDefault();  //Prevent the form from submitting by default

        const password = passwordInput.value;
        const isValid = validatePassword(password);
        
        if (isValid) {
            // Password meets criteria, allow form submission
            passwordForm.submit();
        } else {
            //  Password does not meet criteria, display error message
            errorParagraph.textContent = 
            "password must be at least 8 characters long and at least one uppercase letter, one lowercase letter,one numeric digit, and one special character.";
        }
    });

    function validatePassword(password) {
        const minLength = 8;
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const digitRegex = /[0-9]/;
        const specialCharRegex = /[!@#$%^&*]/;
        
        return (
            password.length >= minLength &&
            uppercaseRegex.test(password) &&
            lowercaseRegex.test(password) &&
            digitRegex.test(password) &&
            specialCharRegex.test(password)
        );
    }
});
