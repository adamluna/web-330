/*
============================================
; Title:  luna-exercise3.3.js
; Author: Professor Krasso
; Date: 24 January 2021
: Modified by: Adam Luna
; Description: This program shows how to use the Singleton pattern.
;===========================================
*/

// require reads luna-header.js file and executes it
const header = require("../luna-header.js");
// display function output
console.log(header.display("Adam", "Luna", "Exercise 3.3"));

/*
 Expected output:
 FirstName LastName
 <AssignmentName>
 <Today's Date>
 Same database instance? true
*/

// start program
var DatabaseSingleton = (function () {
  var instance;
  function createInstance() {
    var postgresDatabase = new Object("Database instance initialized!");
    return postgresDatabase;
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// Create a new function and name it databaseSingletonTest
function databaseSingletonTest() {
  // Create two new database instances
  var database1 = DatabaseSingleton.getInstance();
  var database2 = DatabaseSingleton.getInstance();
  // Call the console.log() function and output whether the two instances match
  console.log("Same database instance?" + (database1 === database2));
}

// Call the databaseSingletonTest() function
databaseSingletonTest();
// end program
