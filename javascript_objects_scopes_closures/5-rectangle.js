#!/usr/bin/node
// This class Sqaure inherits from 4-rectangle

const Rectangle = require("./4-rectangle");

class Square extends Rectangle {
    constructor(size) {
        super(size, size);
    }
}
