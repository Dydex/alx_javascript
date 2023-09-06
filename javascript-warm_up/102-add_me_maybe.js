//  This script contains a function that increments and a function 

function addMeMaybe(number, theFunction) {
    number++;
    theFunction(number);
}

module.exports = { addMeMaybe };
