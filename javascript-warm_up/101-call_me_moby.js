// This script contains a function that executes x times a function
function executeNTimes(x, theFunction) {
    for (let i = 0; i < x; i++) {
        theFunction();
    }
}