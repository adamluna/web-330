/*
============================================
; Title:  luna-exercise3.2.js
; Author: Adam Luna
; Date: 24 January 2021
; Description: This program shows how to use the Factory pattern.
;===========================================
*/

// require reads luna-header.js file and executes it
const header = require("../luna-header.js");
// display function output
console.log(header.display("Adam", "Luna", "Exercise 3.2"));

/*
 Expected output:
 FirstName LastName
 <AssignmentName>
 <Today's Date>
 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }
 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }
*/

// start program
function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
  }
  
  function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7;
  }
  
  // Adding Oracle database class
  function Oracle(properties) {
      this.username = properties.username || "o-admin";
      this.password = properties.password || "o-s3cret";
      this.server = properties.server || "localhost:8080";
      this.version = properties.version || 10;
  }

  // Adding Informix database class
  function Informix(properties) {
      this.username = properties.username || "i-admin";
      this.password = properties.password || "i-s3cret";
      this.server = properties.server || "localhost:3000";
  }


  function DatabaseFactory() {}
  
  DatabaseFactory.prototype.databaseClass = MySql;
  DatabaseFactory.prototype.createDatabase = function(properties) {
    if (properties.databaseType === "Postgres") {
      this.databaseClass = Postgres;
    } else if (properties.databaseType === "MySql") {
      this.databaseClass = MySql;

       // Update createDatabase function to handle the two new classes, Oracle and Informix
    } else if (properties.databaseType === "Oracle") {
        this.databaseClass = Oracle;
    } else if (properties.databaseType === "Informix") {
        this.databaseClass = Informix;
    }
  
    return new this.databaseClass(properties);
  };
  
  var postgresFactory = new DatabaseFactory();
  var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
  });
  
  var mySqlFactory = new DatabaseFactory();
  var mySql = mySqlFactory.createDatabase({
    databaseType: "MySQL",
    username: "default",
    password: "password"
  });

  // Create a new oracleFactory and call the createDatabase prototype function (supply your own default values)
  var oracleFactory = new DatabaseFactory();
  var oracle = oracleFactory.createDatabase({
      databaseType: "Oracle",
      username: "aluna",
      password: "p@ssword1"
  });

  // Create a new informixFactory and call the createDatabase prototype function (supply your own default values)
  var informixFactory = new DatabaseFactory();
  var informix = informixFactory.createDatabase({
      databaseType: "Informix",
      username: "aluna",
      password: "p@ssword2"
  });

  // Output the results
  console.log(oracle);
  console.log("");
  console.log(informix);
  // end program