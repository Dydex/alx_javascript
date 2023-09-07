#!usr/bin/node
// This script contains a class Rectangle 

class Rectangle {
    constructor(w, h) {
    if (w > 0 && h > 0) {
        this.width = w;
        this.height = h;
    } else{
        return {}
        }
        
        }
}

module.exports = Rectangle;