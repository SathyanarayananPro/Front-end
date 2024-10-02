'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
//   // console.log(this);
// };
// const call = new Person('Sathya', 2000);
// console.log(call);
///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
const BMW = new Car('BMW', 200);
const Mercedes = new Car('Mercedes', 500);
Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(`${this.make} going at ${this.speed} Km/h`);
};
Car.prototype.break = function () {
  this.speed = this.speed - 10;
  console.log(`${this.make} going at ${this.speed} Km/h`);
};
BMW.accelerate();
BMW.break();
Mercedes.accelerate();
Mercedes.break();

*/
/*
const account = {
  owner: 'Master',
  Movement: [10, 20, 30],
  last: function (mov) {
    console.log(this.owner, this.Movement);
    return this.Movement.slice(-1).pop() + mov;
  },
};
console.log(account.last(5));

const person = {
  firstName: 'John',
  lastName: 'Doe',
  // fullName: function (name) {
  //   return `${name} ${this.lastName}`;
  // },
  get fullName2() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName2(mov) {
    console.log(mov);
    this._firstName = mov;
  },
  get firstName() {
    return this._firstName;
  },
};

person.fullName2 = 'Jane';
console.log(person); // Output: Jane Doe

// This will throw an error:
// person.firstName = 123;

const a = '50 sathya';

console.log(parseInt(a));
console.log(a);
*/
///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
/*
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  acclerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} Km/h`);
  }
  break() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} Km/h`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(sp) {
    this.speed = sp * 1.6;
  }
}

const bmw = new Car('BMW', 120);
console.log(bmw.speedUS);
bmw.acclerate();
bmw.break();

bmw.speedUS = 100;
console.log(bmw.speedUS);
console.log(bmw);

*/
///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed} Km/h`);
};
Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed} Km/h`);
};

const Ev = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

Ev.prototype = Object.create(Car.prototype);

Ev.prototype.chargeBattery = function (chargeto) {
  this.charge = chargeto;
};
Ev.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} Km/h, with a charge of ${this.charge}`
  );
};

const tesla = new Ev('Tesla', 120, 25);
tesla.chargeBattery(100);
// tesla.break();
console.log(tesla);
tesla.accelerate();

*/
///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  acclerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} Km/h`);
    return this;
  }
  break() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} Km/h`);
    return this;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(sp) {
    this.speed = sp * 1.6;
  }
}
class EVCl extends Car {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(tocharge) {
    this.#charge = tocharge;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed} Km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}
const BMW = new EVCl('BMW', 120, 95);
BMW.accelerate().break().accelerate().chargeBattery(45).accelerate();
console.log(BMW);
console.log(BMW.speedUS);
