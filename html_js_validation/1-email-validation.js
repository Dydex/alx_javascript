// Get the form element
const emailForm = document.getElementById("emailForm");

// Add an event listener for the form submission
emailForm.addEventListener("submit", function (event) {
    // prevent the default form submission behaviour
    event.preventDefault();

    // Get the value entered in the email input field
    const emailInput =document.getElementById("email");
    const emailValue = emailInput.value;
    
    // Regular expression pattern for email validation
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    
    // Check if the email format is valid 
    if (emailPattern.test(emailValue)) {
        // Clear any previous error messages
        const errorElement = document.getElementById("error");
        errorElement.textContent = "";

        // Allow the form submission 
        emailForm.submit();
    } else  {
        // Display an error message 
        const errorElement = document.getElementById("error");
        errorElement.textContent = "Please enter a valid email address.";
    }
});
