EXAMPLE TASK:
    - Write an Airplane class whose constructor initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` property of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property gets set to true.
        + If a plane lands, its `isFlying` property gets set to false.
*/
// EXAMPLE SOLUTION CODE:
class Airplane {
  constructor(name) {
    this.name = name;
    this.isFlying = false;
  }
  takeOff() {
    this.isFlying = true;
  }
  land() {
    this.isFlying = false;
  }
}
function Person() {
  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
  }
}
Person.prototype.eat = function (edible) {
  if (this.stomach.length < 10) {
    this.stomach.push(edible);
  }
};
Person.prototype.poop = function () {
  this.stomach = [];
};
Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`;
};
//creat my objects
const cam = new Person("Cam", 20);
const spencer = new Person("Spencer", 28);
console.log(cam.toString());
console.log(spencer.toString());
//eat
spencer.eat("Pizza");
spencer.eat("Taco");
spencer.eat("Sandwich");
spencer.eat("Salad");
spencer.eat("cake");
console.log(spencer.stomach);
//poop
spencer.poop();
console.log(spencer.stomach);
/*
  TASK 2
@@ -63,10 +96,33 @@ function Person() {
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/
function Car() {
  function Car(model, milesperGallon) {
    this.model = model;
    this.milesperGallon = milesperGallon;
    this.tank = 0;
    this.odometer = 0;
  }
}
Car.prototype.fill = function (gallons) {
  this.gallons = gallons;
  this.tank += gallons;
};
Car.prototype.drive = function (distance) {
  this.distance = distance;
  const drivableMiles = this.tank * this.milesperGallon;
  this.odometer += distance;
  if (drivableMiles < this.distance) {
    return `I ran out of fuel at ${this.odometer} miles`;
  } else {
    this.tank = this.tank - distance / this.milesperGallon;
  }
};
/*
  TASK 3
@@ -75,11 +131,18 @@ function Car() {
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby() {
  function Baby(name, age, favoriteToy) {
    Person.call(this, name, age);
    this.favoriteToy = favoriteToy;
  }
}
Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function () {
  return `Playing with ${this.favoriteToy}`;
};
/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo() {
  return "bar";
}
module.exports = {
  foo,
  Person,
  Car,
  Lambdasian,
  Instructor,
  Student,
  ProjectManager,
};