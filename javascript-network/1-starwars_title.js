#!/usr/bin/node
// This script prints the title of a star wars movie

const request = require('request');

const movieID = process.argv[2];

const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieID}`;

// Make a GET request to the API endpoint
request.get(apiUrl, function (error, response, body) {
    if (error) {
        console.error('Error:', error);
    } else if (response.statusCode !== 200) {
        console.error('Request failed with status code:', response.statusCode);
    } else {
        try{
            // parse the JSON response
            const movieData = JSON.parse(body);
        
            // extract and display the movie title
            console.log(movieData.title);
        } catch (parseError) {
            console.error('Error parsing JSON response:', parseError);
        }
    }
});
