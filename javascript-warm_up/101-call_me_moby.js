// This script contains a function that executes x times a function
function callMeMoby(x, theFunction) {
    for (let i = 0; i < x; i++) {
        theFunction();
    }
}

function theFunction() {
    console.log("Where I am!");
}

callMeMoby(x, theFunction);