/*
============================================
; Title:  luna-exercise2.2.js
; Author: Adam Luna
; Date: 17 January 2021
; Description: Creating a prototype.
;===========================================
*/

// require reads luna-header.js file and executes it
const header = require("../luna-header.js");
// display function output
console.log(header.display("Adam", "Luna", "Exercise 2.2"));

/*
 Expected output:
 FirstName LastName
 <AssignmentName>
 <Today's Date>
 The person's full name is '<fullname>.'
 The person's age is '<age>.'
*/

// start program
//Create an object literal Person with one function, getAge()
let person = {
  getAge: function () {
    //The getAge() function should return the Person’s age
    return this.age;
  },
};

//Create a new object literal, passing in the getAge() function
let tim = Object.create(person, {
  //From within the new object literal define age and fullname
  age: {
    value: 44,
  },
  fullName: {
    value: "Tim Duncan",
  },
});

//Call the console.log() function and output the Persons fullname
console.log("The person's full name is " + tim.fullName + ".");

//Call the console.log() function and output the age (use the getAge() function)
console.log("The person's age is " + tim.getAge() + ".");

// end program
