// Get references to form elements
const submitForm = document.getElementById("submitForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

// Add an event listener to the form element
submitForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission behavior
    handleFormSubmit();
});

// Function to handle form submission
function handleFormSubmit() {
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();

    // Check if the "name" and "email" fields are filled
    if (!nameValue || !emailValue) {
        alert("Please fill in all required fields.");
        return; // Prevent form submission
    }

    // If all validations pass, display a success message 
    else{
        submitForm.submit()
    }
    alert("Form submitted successfully!")
}