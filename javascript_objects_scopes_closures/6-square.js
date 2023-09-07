#!/usr/bin/node
// This class Sqaure inherits from 5-square

const Sqaure = require("./5-square");

class Square extends Sqaure {
    charPrint(c) {
        if (c === undefined) {
            c = 'X';
        }

        for (let i = 0; i < this.height; i++){
            console.log(c.repeat(this.width));
        }
    }
}

module.exports = Square;
