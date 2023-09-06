//  This script adds a new function 'incr' that increments the integer value
const myObject = {
    type: 'object',
    value: 12,
};

console.log(myObject);

function incr() {
    myObject.value++;
}

myObject.incr = incr;

for (let i = 0; i < 3; i++) {
    myObject.incr();
    console.log(myObject);
}

