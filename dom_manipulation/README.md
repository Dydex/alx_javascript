This file is for DOM tasks\

Code Explanation
This line uses document.getElementById('container') to select the HTML element with the id attribute set to "container" and stores it in a variable called container. This element is the <div> in which we will add or remove the <p> element.
html
Copy code
// Create a new <p> element
const newParagraph = document.createElement('p');
Here, we use document.createElement('p') to create a new <p> (paragraph) element and store it in a variable called newParagraph. This element will represent the paragraph we want to add or remove.
html
Copy code
newParagraph.textContent = 'New paragraph';
This line sets the textContent property of the newParagraph element to "New paragraph." This text will be the content of the newly created paragraph.
html
Copy code
// Append the new paragraph to the container element
container.appendChild(newParagraph);
We use container.appendChild(newParagraph) to append the newParagraph element as a child of the container element. This action effectively adds the new paragraph to the HTML document inside the specified container.
html
Copy code
// Add a click event listener to the button
const toggleButton = document.getElementById('toggleButton');
let paragraphVisible = true;
This code selects an HTML button element with the id attribute set to "toggleButton" and stores it in the variable toggleButton. We also initialize a variable paragraphVisible and set it to true to keep track of whether the paragraph is currently visible.
html
Copy code
toggleButton.addEventListener('click', () => {
Here, we add a click event listener to the toggleButton element. When the button is clicked, the function inside the parentheses will be executed.
html
Copy code
if (paragraphVisible) {
    // Remove the paragraph from the container
    container.removeChild(newParagraph);
    paragraphVisible = false;
    toggleButton.textContent = 'Show Paragraph';
} else {
    // Append the paragraph back to the container
    container.appendChild(newParagraph);
    paragraphVisible = true;
    toggleButton.textContent = 'Hide Paragraph';
}
This code block is inside the event listener function. It checks the paragraphVisible variable to determine whether the paragraph is currently visible. If it is visible (i.e., paragraphVisible is true), it removes the newParagraph from the container using container.removeChild(newParagraph), sets paragraphVisible to false, and changes the button text to "Show Paragraph." If the paragraph is not visible (i.e., paragraphVisible is false), it appends the newParagraph to the container, sets paragraphVisible to true, and changes the button text to "Hide Paragraph."
This code effectively toggles the visibility of the paragraph each time the button is clicked.