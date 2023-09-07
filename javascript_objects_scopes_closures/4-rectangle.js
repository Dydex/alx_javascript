#!/usr/bin/node
// This script contains a class Rectangle 

class Rectangle {
    constructor(w, h) {
    if (w > 0 && h > 0) {
        this.width = w;
        this.height = h;
    }   
        }
    
        print() {
            if (this.width && this.height) {
                for (let i = 0; i < this.height; i++){
                    console.log('X'.repeat(this.width));
                }
            }
        }

        rotate() {
            if (this.width && this.height) {
                // Exchange the width and height
                [this.width, this.height] = [this.height, this.width];
            }
        }

        double() {
            if (this.width && this.height) {
                // Double the width and height
                this.width *= 2;
                this.height *= 2;
            }
        }
}

module.exports = Rectangle;