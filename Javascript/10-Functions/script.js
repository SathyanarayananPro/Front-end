'use strict';
/*
const bookings = [];
// ES6 Default method
const createBooking = function (
  flightNo,
  numPassenger = 2,
  price = 2000 * numPassenger
) {
  // ES5 Default Method
  // numPassenger = numPassenger || 1;
  // price ||= 1999;
  const booking = {
    flightNo,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(bookings);
};
createBooking('LH123');
createBooking('LH124', undefined);
*/
/*
const flight = 'LH123';
const sathya = {
  name: 'Sathya Narayanan',
  passport: 987456321,
};
const checkIn = function (flightNo, passenger) {
  flightNo = 'LH789';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 987456321) {
    alert('Checked In');
  } else {
    alert('Wrong Passport!');
  }
};
checkIn(flight, sathya);
console.log(flight); //flight no will be LH123 because LH789 is inside a function not on global
console.log(sathya); //here Name will be printed with MR. Prefix because name is declared in global then called inside a function. so it will be updated in global variable

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};
newPassport(sathya); //passport is manipulated using function call
checkIn(flight, sathya);
*/

/*
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};
const upperFirtWord = function (str) {
  const [First, ...other] = str.split(' ');
  return [First.toUpperCase(), ...other].join(' ');
};
// Higher Order Function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed  String: ${fn(str)}`);
  console.log(`Transformed  by: ${fn.name}`);
};
transformer('Javascript is the best!', upperFirtWord);
transformer('Javascript is the best!', oneWord);
// JS uses callback all time
const high5 = function () {
  console.log('✋');
};
document.body.addEventListener('click', high5);

['1', '2', '3'].forEach(high5); // here 3 time the High5 function will be called
*/
/*
///////////////////////////////
//Function returning Function
//////////////////////////////
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greeterHey = greet('Hey');

// greeterHey('Sathya');
// greet('Hello')('Mani');

// Using arrow Function
// const greet = greeting => {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };  (or)

const greet = greeting => name => console.log(`${greeting} ${name}`);
const greeterHey = greet('Hey');
greeterHey('Sathya');
greet('Hello')('Mani');

*/

/*
const Indigo = {
  airline: 'Indigo',
  iataCode: 'IN',
  booking: [],
  book(flightNo, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNo}`
    );
    this.booking.push({ flight: `${this.iataCode}${flightNo}`, name });
  },
};
Indigo.book(123, 'Gopal');
Indigo.book(456, 'Hari');
console.log(Indigo);

const AirIndia = {
  airline: 'AirIndia',
  iataCode: 'AI',
  booking: [],
};
const book = Indigo.book;

// does not work
// book(23, 'Ganapathi');

// Call Method
book.call(AirIndia, 23, 'Ganapathi'); //(First will refer a this key word )
console.log(AirIndia);
book.call(Indigo, 458, 'Master');
console.log(Indigo);

// Apply Method
const flightData = [857, 'Blaster'];
book.apply(AirIndia, flightData);
console.log(AirIndia);

// using call method to apply
book.call(AirIndia, ...flightData);

// Bind Method

const bookAI = book.bind(AirIndia); //This key word is defined
const bookIN = book.bind(Indigo);
bookAI(789, 'Palani');

const bookAI23 = book.bind(AirIndia, 23); //both This key word and fligth no is defined
bookAI23('Uthistra');

// With event Listeners

Indigo.planes = 300;
Indigo.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', Indigo.buyPlane.bind(Indigo));

// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.18);
console.log(addVAT(500));

// Challenge
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.12);
console.log(addVAT2(500));
console.log(addVAT2(9));
*/
///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: Javascript', '1: Python', '2: Rust', '3. C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get Answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // Register the Answer (used Short Circuit method)

    typeof answer === 'number' &&
      answer < this.options.length &&
      this.answers[answer]++;
    this.displayResult();
    this.displayResult('string');
  },
  displayResult(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

//   BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

poll.displayResult.call({ answers: [5, 2, 3] });
poll.displayResult.call({ answers: [1, 5, 3, 9, 6, 1] });

*/

/*
// Immediately Invoked Function

(function () {
  console.log('This will  never run again');
})();

(() => console.log('This will also never run again'))();

*/

/*
// Closure
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
console.dir(booker);
*/
/*
// Example-1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
const h = function () {
  const b = 47;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
console.dir(f);
// Re-assigned f function
h();
f();
console.dir(f);

// Example-2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers `);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};
boardPassengers(180, 3);

*/
/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/
/*
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('h1').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
*/
/*
// Palindrome challenge
function isPalindrome(inputString) {
  // Your code here
  const normalString = inputString.toLowerCase().replace(/[^a-z0-9]/g, '');
  console.log(`${/[^a-z0-9]/g}`);
  const reverseString = normalString.split('').reverse().join('');

  return normalString === reverseString;
}
console.log(isPalindrome('madam')); // true
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello')); // false
console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome("No 'x' in Nixon")); // true
*/
