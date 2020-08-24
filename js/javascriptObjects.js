"use strict";

// var rubberDuck = {
//     color: "yellow",
//     role: "emotional support",
//     name: "cody"
// }
//
// //Two ways to instatiate objects:
//
// var car = new Object();
// //or
// var cars = {};
//
// console.log(typeof car);
// console.log(cars);
// // "object"
//
// car.make = "Toyota";
// car['model'] = "Camry";
//
// console.log(car);
//
// console.log(car.model);
// console.log(car.make);
//
// car.color = "blue";
// console.log(car.color);
//
// car.mileage = "55,555";
//
// car.message1 = function (){
//     alert("This " +car["color"] + " " + car["make"] + " " + car["model"] + " has " + car["mileage"] + " miles.");
// }
// console.log(car);
// car.message1();
// myDogs.sayHi();


var ourDogs = [
    {
    name: "Charlee",
    breed: "Australian Labradoodle",
    sex: "female",
    color: "brown",
    coat: ["curly", "long", "non-shedding"],
    owner: {
        name: "Donelle",
        gender: "female",
        formerOccupation: "educator"
    },
    report: function (){
        console.log(this.name + " is a " + this.breed + " belonging to " + this.owner.name + ".")
    }
    },
    {
        name: "Tex",
        breed: "Red Heeler",
        sex: "male",
        color: "red",
        coat: ["smooth", "short", "shedding"],
        owner: {
            name: "Ryan",
            gender: "male",
            formerOccupation: "gunny"
        },
        report: function (){
            console.log(this.name + " is a " + this.breed + " belonging to " + this.owner.name + ".")
        }
    },
    {
        name: "Roxie",
        breed: "Yorkshire Terrier",
        sex: "female",
        coat: ["silky", "long", "non-shedding"],
        owner: {
            name: "Linda",
            gender: "female",
            formerOccupation: "office manager"
        },
        report: function (){
            console.log(this.name + " is a " + this.breed + " belonging to " + this.owner.name + ".")
        }
    },
    {
      name: "Farley",
      breed: "labrador retriever",
      sex: "male",
      coat: ["smooth", "short", "shedding"],
      owner: {
          name: "Jeff",
          gender: "male",
          formerOccupation: "chip guy"
      },
        report: function (){
            console.log(this.name + " is a " + this.breed + " belonging to " + this.owner.name + ".")
        }
    },
]

console.log(ourDogs);

ourDogs.forEach(function (name){
    name.report();
})

