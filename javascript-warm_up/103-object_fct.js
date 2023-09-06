//  This script adds a new function 'incr' that increments the integer value
const myObject = {
    type: 'object'
};
    function incr() {
        this.value++;
    };

console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
