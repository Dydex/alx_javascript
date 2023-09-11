#!/usr/bin/node
// This script displays the status code of a GET request

// Import the request module
const request = require('request');

const url = process.argv[2];

request.get({url, followRedirect: true }, function(error, response) {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log(`code: ${response.statusCode}`);
    }
});

