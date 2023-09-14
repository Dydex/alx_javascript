#!/usr/bin/node
// This script contains a function named welcome

function welcome(firstName, lastName) {
    let fullName = firstName + ' ' + lastName;

    function displayFullName() {
        alert('Welcome' + ' ' + fullName + '!');
    }

    displayFullName()
}
