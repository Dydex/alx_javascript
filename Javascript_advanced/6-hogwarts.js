#!/usr/bin/node
// This script contains Private methods with closure

const studentHogwarts = (function () {
  let privateScore = 0;
  let name = null;

  function changeScoreBy(points) {
    privateScore += points;
  }

  return {
    setName: function (newName) {
      name = newName;
    },
    rewardStudent: function () {
      changeScoreBy(1);
    },
    penalizeStudent: function () {
      changeScoreBy(-1);
    },
    getScore: function () {
      return `${name}: ${privateScore}`;
    },
  };
})();

// Create an instance of studentHogwarts for Harry
const harry = Object.create(studentHogwarts);
harry.setName("Harry");

// Reward Harry four times
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();

// Log Harry's name and score
console.log(harry.getScore());

// Create an instance of studentHogwarts for Draco
const draco = Object.create(studentHogwarts);
draco.setName("Draco");

// Reward Draco one time and penalize three times
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();

// Log Draco's name and score
console.log(draco.getScore());
