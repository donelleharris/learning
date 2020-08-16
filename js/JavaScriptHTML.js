"use strict";
// var num2 = 3+8;
// var greeting = "Hello";
// var cohort = "IO"
// var message = greeting + ' ' + cohort + '!';
// console.log(message);

// console.log("The files are connected.")

var offerExpired = false;
var numberItems = 3;
var premiumMembership = false;
var offerApplied = (numberItems > 2 || premiumMembership) && !offerExpired;
console.log("Offer applied: " + offerApplied);

var maxClassSize = 24;
var numberEnrolled = 21;
var classFull = numberEnrolled >= maxClassSize;
var scheduleConflict = false;
var canEnroll = !classFull && !scheduleConflict;
console.log("Student may enroll: " + canEnroll);

var aggie = "Whoop!!"
var answer = confirm(aggie);
console.log(answer);

var question2 = "What is your sign?"
var answer2 = prompt(question2);
console.log(answer2);

var question3 = "What is your favorite number?"
var answer3 = prompt(question3);
console.log(answer3);


