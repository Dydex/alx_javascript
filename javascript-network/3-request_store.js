#!/usr/bin/node
// A script that gets the contents of webpage and storess it in a file

const request = require('request');
const fs = require('fs');

// Get the URL and file path from the command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Make a GET request to the specified URL
request.get(url, function (error, response, body) {
    if (error) {
        console.error('Error:', error);
    } else if (response.statusCode !== 200) {
        console.error('Request failed with status code:', response.statusCode);
    } else {
        // save the response body to a file with UTF-8 encoding
        fs.writeFile(filePath, body, 'utf-8', function (writeError) {
            if (writeError) {
                console.error('Error writing to file:', writeError);
            } else {
                console.log(body)
            }
        });
    }
});
