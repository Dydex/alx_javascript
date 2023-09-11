#!/usr/bin/node
// A script that prints all characters of a Star Wars movie

// Import the 'request' module
const request = require('request');

// Get the Movie ID from the command line arguments
const movieId = process.argv[2];


// Define the Star Wars API URL with the Movie ID
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make a GET request to the API endpoint
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Request failed with status code:', response.statusCode);
  } else {
    try {
      // Parse the JSON response
      const movieData = JSON.parse(body);

      // Print the character names from the movie
      console.log(`Characters in "${movieData.title}":`);
      movieData.characters.forEach((characterUrl) => {
        request.get(characterUrl, (characterError, characterResponse, characterBody) => {
          if (characterError) {
            console.error('Error:', characterError);
          } else if (characterResponse.statusCode !== 200) {
            console.error('Request failed with status code:', characterResponse.statusCode);
          } else {
            const characterData = JSON.parse(characterBody);
            console.log(characterData.name);
          }
        });
      });
    } catch (parseError) {
      console.error('Error parsing JSON response:', parseError);
    }
  }
});
