#!/usr/bin/node
// A script that contains a function that alert welcome messages by closures

function welcomeMessage(fullName) {
    return function() {
        alert('Welcome' + ' ' + fullName)
    }
}

let guillaume = welcomeMessage('Guillaume');
let alex = welcomeMessage('Alex');
let fred = welcomeMessage('Fred');

guillaume();
alex();
fred();
