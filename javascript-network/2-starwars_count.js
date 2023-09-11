#!/usr/bin/node
// A script that prints the number of movies where the character Wedges Antilles is present

const request = require('request');

// Get the API URL from the command line arguments
const apiUrl = process.argv[2];

// Character ID for wedge antilles
const characterId = 18;

// Make a GET request to the API endpoint
request.get(apiUrl, function (error, response, body) {
    if (error) {
        console.error('Error:', error);
    } else if (response.statusCode !== 200) {
        console.error('Request failed with status code:', response.statusCode);
    } else {
        try{
            // parse the JSON response
            const filmData = JSON.parse(body);

            // Filter the films where Wedge Antilles is present
            const filmsWithWedge = filmData.results.filter(function (film) {
                return film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`);
            });
        
            // Display the count of films with Wedge Antilles
            console.log(filmsWithWedge.length);
        } catch (parseError) {
            console.error('Error parsing JSON response:', parseError);
        }
    }
});