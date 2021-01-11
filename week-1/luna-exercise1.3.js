/*
============================================
; Title:  luna-exercise1.3.js
; Author: Adam Luna
; Date:   10 January 2021
; Modified By: 
; Description: Using functions, create a cell phone object with the following properties / methods 
;===========================================
*/

// require reads luna-header.js file and executes it
const header = require("../luna-header.js");
// display function output
console.log(header.display("Adam", "Luna", "Exercise 1.3"));

/*
 Expected output:
 FirstName LastName
 <AssignmentName>
 <Today's Date>
 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>
*/

// start program
//Using functions, create a cell phone object with the following properties / methods.
function Cellphone(manufacturer, model, color, price) {
  this.manufacturer = manufacturer;
  this.model = model;
  this.color = color;
  this.price = price;

  //Return cell phone price
  this.getPrice = function () {
    return this.price;
  };
  //Return cell phone model
  this.getModel = function () {
    return this.model;
  };
  //Return manufacturer, model, color, and price
  this.getDetails = function () {
    return (
      "Manufacturer: " + 
      this.manufacturer +
      "\n" + 
      "Model: " +
      this.getModel() +
      "\n" + 
      "Color: " + 
      this.color +
      "\n" + 
      "Price: " +
      this.getPrice()
    );
  };
}
//Instantiate a new cell phone object (supply your own default values) and call the getDetails() function.
var phone = new Cellphone("Apple", "iPhone XR", "White", 599.99);
//Output phone details
console.log(phone.getDetails());
// end program
