#!/usr/bin/node
// A script that computes the number of tasks completed by user id

// Import the 'request' module
const request = require('request');

// Define the API URL
const apiUrl = 'http://localhost:5050/route_1';

// Make a GET request to the API endpoint
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Request failed with status code:', response.statusCode);
  } else {
    try {
      // Parse the JSON response
      const userTasks = JSON.parse(body);

      // Initialize an object to store the count of completed tasks per user
      const completedTasksByUser = {};

      // Loop through the user tasks and count completed tasks for each user
      userTasks.forEach((task) => {
        const userId = task.userId;
        if (completedTasksByUser[userId]) {
          completedTasksByUser[userId]++;
        } else {
          completedTasksByUser[userId] = 1;
        }
      });

      // Print the count of completed tasks per user
      console.log(completedTasksByUser);
    } catch (parseError) {
      console.error('Error parsing JSON response:', parseError);
    }
  }
});


