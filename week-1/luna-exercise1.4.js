/*
============================================
; Title:  luna-exercise1.4.js
; Author: Adam Luna
; Date:   10 January 2021
; Modified By: 
; Description: Creating constructors and prototypes using duck typing 
;===========================================
*/

// require reads luna-header.js file and executes it
const header = require("../luna-header.js");
// display function output
console.log(header.display("Adam", "Luna", "Exercise 1.4"));

/*
 Expected output:
 FirstName LastName
 <AssignmentName>
 <Today's Date>
 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!
 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>
*/

// start program
//Create a function constructor Car class with one parameter (model)
function Car(model) {
    this.model = model;
  }
  //Add a prototype method to each class called “start”
  Car.prototype.start = function () {
    //The prototype method should output “ added to the racetrack!”
    console.log("Car added to the racetrack!");
  };
  //Create a function constructor Truck class with two parameters (model, year)
  function Truck(model, year) {
    this.model = model;
    this.year = year;
  }
  //Add a prototype method to each class called “start”
  Truck.prototype.start = function () {
    //The prototype method should output “ added to the racetrack!”
    console.log("Truck added to the racetrack!");
  };
  //Create a function constructor Jeep class with three parameters (model, year, color)
  function Jeep(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
  }
  //Add a prototype method to each class called “start”
  Jeep.prototype.start = function () {
    //The prototype method should output “ added to the racetrack!”
    console.log("Jeep added to the racetrack!" + "\n");
  };
  //Define an empty racetrack array
  let racetrack = [];
  //Create a driveIt function with one parameter (vehicle)
  function driveIt(vehicle) {
    //From within the driveIt function call the “start” function on the vehicle
    vehicle.start();
    //Push the vehicle to the racetrack array
    racetrack.push(vehicle);
  }
  // Create three (3) vehicle classes
  const car = new Car("Audi");
  const truck = new Truck("Toyota", 2019);
  const jeep = new Jeep("Compass", "2020", "Blue");
  
  //Pass the vehicle classes through the driveIt() function
  driveIt(car);
  driveIt(truck);
  driveIt(jeep); 
  //Iterate over the racetrack array and output the results
  console.log("-- The following vehicles have been added to the racetrack --");

  for (let i = 0; i < racetrack.length; i++) {
    console.log(racetrack[i].constructor.name + ": " + racetrack[i].model);
  }
// end program