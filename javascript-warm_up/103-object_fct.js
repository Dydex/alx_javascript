//  This script adds a new function 'incr' that increments the integer value
const myObject = {
    type: 'object'
};
console.log(myObject);

function incr() {
    this.value++;
};

myObject.incr = incr;
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);

