// Get references to form elements
const dynamicForm = document.getElementById("dynamicform");
const numFieldsSelect = document.getElementById("numFields");
const inputContainer = document.getElementById("inputContainer");

// Event listener for form submission
dynamicForm.addEventListener("submit", function (event) {
    event.preventDefault(); //Prevent default form submission behavior
    validateForm();
});

// Function to generate dynamic input fields
function generateInputFields(numFields) {
    inputContainer.innerHTML = ""; //Clear previous fields

    for (let i = 1; i <= numFields; i++) {
        const input = document.createElement("input");
        input.type = "text";
        input.name = `field${i}`;
        input.placeholder `Field ${i}`;
        inputContainer.appendChild(input);
    }
}

// Function to validate the form 
function validateForm() {
    const inputs = inputContainer.querySelectorAll("input");

    for (const input of inputs) {
        if (!input.value.trim()) {
            alert("Please fill in all fields.")
            return; // Prevent form submission 
        }
    }

    // If all fields are filled, submit the form
    dynamicForm.submit();
}

// Initialize the form with one field 
generateInputFields(1);