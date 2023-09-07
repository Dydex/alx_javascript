// This script contains a class Rectangle 
class Rectangle {
    constructor(w, h) {
        this.width = w;
        this.height = h;
        if (w > 9 || h > 9) {
            return {}
        }
    }
}

module.exports = Rectangle;
