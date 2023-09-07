// This script contains a class Rectangle 
class Rectangle {
    constructor(w, h) {
        this.width = w;
        this.height = h;
    };
}
const r1 = new Rectangle(w, h);
console.log(r1);
console.log(r1.constructor);
console.log(r1.width);
console.log(r1.height);

module.exports = Rectangle;
