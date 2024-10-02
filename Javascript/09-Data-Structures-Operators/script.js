'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${from
    .slice(0, 3)
    .replace(
      `${from.slice(0, 3)}`,
      `${from.slice(0, 3).toUpperCase()}`
    )} to ${to
    .slice(0, 3)
    .replace(
      `${to.slice(0, 3)}`,
      `${to.slice(0, 3).toUpperCase()}`
    )} (${time.replace(':', 'h')})`.padStart(60);
  console.log(output);
}
// Data needed for first part of the section
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 Enhance object literals
  openingHours,
  order(starterMenu, mainMenu) {
    return [this.starterMenu[starterMenu], this.mainMenu[mainMenu]];
  },
  orderDelivery({ time = '9pm', address, cat = 0, starter = 1 }) {
    console.log(
      `Order Received ${
        this.categories[cat] + ' ' + this.starterMenu[starter]
      } will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your Delicilus Pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIng, ...OtherIng) {
    console.log(mainIng, OtherIng);
    console.log(`Here is your delicius P`);
  },
};

/*
///////////////////////////////
// Working with STRINGS -Part-3
// ///////////////////////////

// Split and Joint
console.log('a+very+nice+string'.split('+'));

const [FirstName, LastName] = 'Master Blaster'.split(' ');
console.log(FirstName, LastName);

const newName = ['Mr', FirstName, LastName.toUpperCase()].join(' ');
console.log(newName);

const CapitalizeName = function (names) {
  const name = names.split(' ');

  const capName = [];
  for (const n of name) {
    // capName.push(n[0].toUpperCase() + n.slice(1));
    capName.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(capName.join(' '));
};
CapitalizeName('master blaster');

// Padding

const message = 'Go to Gate 23!';
console.log(message.padStart(25, '-').padEnd(40, '-'));
console.log('Master'.padStart(25, '*').padEnd(40, '*'));

const maskCreitCard = function (number) {
  const str = number + ''; //to make a number string
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreitCard(874632174562));
console.log(maskCreitCard('11874632174562'));

// Repeat
const Message2 = 'Bad Weather... All Arrival Delayed\n';
console.log(Message2.repeat(3));

const planeInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planeInLine(5);
planeInLine(2);
planeInLine(10);

*/
/*
///////////////////////////////
// Working with STRINGS -Part-2
// ///////////////////////////
const airlines = 'Air India';
console.log(airlines.toLowerCase());
console.log(airlines.toUpperCase());

// Fix Capitalization in name
const passenger = 'sAtHyA';
const passengerLower = passenger.toLowerCase();
const passengerCorrecct =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrecct);

// Comparing Email
const email = 'master@b.com';
const loginEmail = '  Master@B.Com \n';
const normalizeEmail = loginEmail.toLowerCase().trim();
console.log(normalizeEmail === email);

// replacing
const priceGB = '584,23£';
const priceINR = priceGB.replace('£', '₹').replace(',', '.');
console.log(priceINR);

const announcement =
  'All passengers come to bording point door 23. Boarding door 23!';
const crtAnou = announcement.replaceAll('door', 'gate');
const oldMethod = announcement.replace(/door/g, 'gate');
console.log(crtAnou);
console.log(oldMethod);

// Booleans
const plane = 'Airbus A320Neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));
console.log(plane.endsWith('Neo'));

// Practice Exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  baggage.includes('knife') || baggage.includes('gun')
    ? console.log('You are not allowed to on Board')
    : console.log('Welcome On Board!');
};
checkBaggage('I have a laptop, some Food and a Pocket Knife');
checkBaggage('Scoks and Camera');
checkBaggage('Got ome snacks and a gun for protection');
*/

/*
///////////////////////////////
// Working with STRINGS -Part-1
// ///////////////////////////
const airlines = 'Air India';
const plane = 'SA201';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('AS104'[0]);

console.log(airlines.length);
console.log('AS201'.length);

console.log(airlines.indexOf('i'));
console.log(airlines.lastIndexOf('i'));
console.log(airlines.indexOf('India'));

console.log(airlines.slice(1));
console.log(airlines.slice(4, 7));

console.log(airlines.slice(0, airlines.indexOf(' ')));
console.log(airlines.slice(airlines.lastIndexOf(' ') + 1));

console.log(airlines.slice(-2));
console.log(airlines.slice(1, -2));

const checkMiddleSeat = function (seat) {
  // B and E are Middle Seat
  const s = seat.slice(-1);
  const se = s === 'B' || s === 'E' ? 'in Middle' : 'not in Middle';
  console.log(`Your seat is ${se}`);
};
checkMiddleSeat('11A');
checkMiddleSeat('12B');
checkMiddleSeat('13C');
checkMiddleSeat('14D');
checkMiddleSeat('15E');

*/

/*
// ///////////////////////////////
// Maps: Iterations
// /////////////////////
const question = new Map([
  ['question', 'What is the best programming language in the world ?'],
  [1, 'C++'],
  [2, 'Python'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct🥳'],
  [false, 'Try Again!'],
]);
// convert object to Map
console.log(Object.entries(openingHours));
const hourseMap = new Map(Object.entries(openingHours));
console.log(hourseMap);
// Quiz Example
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer${key}: ${value}`);
  }
}
const q = function () {
  let answer = Number(prompt('Your Answer...'));
  if (answer === question.get('correct')) {
    console.log(question.get(true));
  } else {
    console.log(question.get(false));
    q();
  }
};
q();
// Convert Map to Array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);


*/

/*
// //////////
// Maps: Fundamentals
// ////////
const rest = new Map();
rest.set('name', 'Taj');
rest.set(1, 'Delhi');
rest.set(2, 'Mumbai');
console.log(rest);
console.log(rest.set(3, 'Chennai'));

rest
  .set('Categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('Open', 11)
  .set('Close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest);

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get('Open') && time < rest.get('Close')));

console.log(rest.has('Categories'));
rest.delete(2);
// rest.clear();
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

// Array key won't work when we call in get
// example
rest.set([1, 2], 'Number');
console.log(rest.get[(1, 2)]); //this will not work instead we need to store the array in variable and need to assign that variable
// Example
const arr = [1, 2];
rest.set(arr, 'Number');
console.log(rest.get(arr)); //This will work

*/

/*
// SETS
const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pizza']);
console.log(orderSet);

console.log(new Set('Master'));
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Bread');
orderSet.add('Bread');
orderSet.delete('Risotto');
//orderSet.clear();// clear all the value in set
console.log(orderSet);
for (const order of orderSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffSet = [...new Set(staff)]; //conversion of set into array
console.log(staffSet);
console.log(new Set('Sathyanarayanan').size);
*/

/*
// Property NAMES
const property = Object.keys(openingHours);
console.log(property);
let openStr = `we are open on ${property.length} days:`;
for (const day of property) {
  openStr += `${day}, `;
}
console.log(openStr);
// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

*/
/*
// //////
// Optional Chaining
// ////////
if (restaurant.openingHours && restaurant.openingHours.fri) {
  console.log(restaurant.openingHours.fri.open);
}

// With optional Chaining
console.log(restaurant.openingHours?.mon?.open); // will check is opening hourse is presnt first
console.log(restaurant.openingHours.fri?.open); // will check is friday is presnt first

// Examples

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'Closed';
  if (open === 'Closed') {
    console.log(`on ${day}, we are ${open}`);
  } else console.log(`on ${day},we open on ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not Exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not Exist');

// Array
const users = [
  {
    name: 'Sathya',
    email: 'Master@gmail.com',
  },
];

console.log(users[0]?.name ?? 'User Array empty');
*/

/*
// ////
// The For-of Loop
// //////
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item); // print all the menu items individually

for (const item of menu.entries()) {
  console.log(item); // print all the menu items with its position eg:[4, 'Pizza']
}
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}:${el}`); // print all the menu items with its position eg:[4, 'Pizza']
}
*/

// console.log([...menu.entries()]);
// const rest1 = {
//   name: 'Taj',
//   noGuest: 0,
// };
// const rest2 = {
//   name: 'mahal',
//   owner: 'Sajahan',
// };

/*
// OR Assign Operator
// rest1.noGuest = rest1.noGuest || 10; // or rest1.noGuest||=10
// rest2.noGuest = rest2.noGuest || 10; // or rest2.noGuest||=10

// Nullish Assign Operator
rest1.noGuest ??= 10;
rest2.noGuest ??= 10;

// AND Assign Operator
rest1.owner &&= '<Anonymous>';
rest2.owner &&= '<Anonymous>';
console.log(rest1);
console.log(rest2);
*/

/*
// ///////////////////////////
// Nullish Coalescing operator
// ////////////////////
restaurant.numGuests = 0;
// Nullish values are 'null' and 'Undefined' (not '0' nor '')
const guest2 = restaurant.numGuests ?? 2; //here 0 will be returned
console.log(guest2);
*/

/*
// /////////
// Short Circuiting (|| and &&)
// ////////
// use any Data type, return any data type,short circuiting-
//->once the first value is True then it will not check the 2nd value and return 1st value
// ->if 1st value is false then it will return 2nd value even if it is false
console.log('---------------OR------------------');
console.log(3 || 'Sathya');
console.log(0 || false);
console.log(false || 0);
console.log(undefined || null);
console.log(null || undefined);
console.log('' || 'Sathya');
// ->If more than 2 value are present then fist true value will be returned from left to right
console.log(undefined || null || 0 || false || 'sathya');

restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 2;
console.log(guest2);
console.log('---------------------------AND----------------------');

// Returns falsy Value
// if all the values are true then last value will be returned
console.log(0 && 'Sathya');
console.log(1 && 'Sathya');
console.log(null && undefined);
console.log(1 && 'sathya' && true && undefined);

// Prctical Example
if (restaurant.orderPizza) {
  restaurant.orderPizza('Mushroom', 'Chicken');
}
// In this way it can replace if condition
// if the 1st value is true then it goes to 2nd so
// we can use it in place of if condition
restaurant.orderPizza && restaurant.orderPizza('Mushroom', 'Chicken');

*/

/*// ////////////////////////////////////
// Rest Pattern and Parameters
// 1.Destructuring
// Spread, because on Right Side of =(Equal to sign)
const arr = [1, 2, ...[3, 4]];

// REST, because on Left Side of =(Equal to sign)
const [a, b, ...other] = [1, 2, 3, 4, 5];
console.log(a, b, other);

const [pizza, risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2.Function
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 30);
add(1, 2, 3, 4, 5, 6, 7, 8, 9);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('Onion', 'Meat', 'Chicken');
*/
// Spread Operator(...)
// const arr = [4, 5, 6];
// const badarr = [1, 2, 3, arr[0], arr[1], arr[2]];
// console.log(badarr);

// const newarr = [1, 2, 3, ...arr];
// console.log(newarr);
// console.log(...newarr); //this will make an array into seperate values

// // Adding new menu
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy Array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);
// // join 2 arrays
// const mergerMenu = [...restaurant.starterMenu, ...mainMenuCopy];
// console.log(mergerMenu);

// // Iterables: Arrays, Strings, Maps, sets. Not objects
// const str = 'Sathya';
// const letter = [...str, '', 'p.'];
// console.log(letter);
// console.log(...str); //This will work
// console.log(`${...str}`); // This will not work

// const ingredients = [
//   prompt("Let's make Pasta!, Ingrdient 1?"),
//   prompt('Ingrdient 2?'),
//   prompt('Ingrdient 3?'),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// Objects
// const newRestaurant = { Foundedin: 1999, ...restaurant, founder: 'Master' };
// console.log(newRestaurant);

// const restaurantcopy = { ...restaurant };
// restaurantcopy.name = 'Blaster';

// console.log(restaurantcopy.name);

// restaurant.orderDelivery({
//   time: '8:30pm',
//   address: 'Master Blaster Street',
//   cat: 2,
//   starter: 3,
// });

// Destructuring objects from restaurant
// let { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// assigining new name to objects
// const {
//   name: RestaurantName,
//   openingHours: OpeningTime,
//   categories: Tag,
// } = restaurant;
// console.log(RestaurantName, OpeningTime, Tag);

// Mutating Variables
// let a = 1;
// let b = 2;
// const obj = { a: 5, b: 10 };
// ({ a, b } = obj);
// console.log(a, b);

// Nested Objects

// const {
//   fri: { open: Opening_Time, close: Closing_Time },
// } = openingHours;
// console.log(Opening_Time, Closing_Time);

// Switching Variables

// console.log(name, openingHours);
// [name, openingHours] = [openingHours, name];
// console.log(name, openingHours);

// destructuring an array

// const arr = [2, 5, 9];
// const [a, b, d] = arr;
// console.log(a, b, d);
// const [x, , z] = arr;
// console.log(x, z);

// // Nested Destructure

// const arr2 = [1, 2, [3, 4]];
// const [i, , [j, k]] = arr2;
// console.log(i, j, k);

// // default values

// const [p = 1, q = 1, r = 1] = [8, 2];
// console.log(p, q, r);
