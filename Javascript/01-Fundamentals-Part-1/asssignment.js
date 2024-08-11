////////////////////////////////
// Values and Variables
////////////////////////////////

// let country = "India";
// let continent = "Asia";
// let population = 1.8;
// console.log(country);
// console.log(continent);
// console.log(population);

////////////////////////////////
// Data Types
////////////////////////////////

// let isIsland = false;
// let language;
// console.log(typeof country);
// console.log(typeof language);
// console.log(typeof population);
// console.log(typeof isIsland);

////////////////////////////////
//Let, const and var
////////////////////////////////

// language = "Tamil";
// const country = "India";
// const continent = "Asia";
// const isIsland = false;
// isIsland = true; // will cause error becaude of isIsland is const

////////////////////////////////
//Basic Operators
////////////////////////////////

// let population = 180;
// const splitContry = population / 2;
// console.log(splitContry);
// population += 1;
// const finlandPopulation = 6;
// if (population > finlandPopulation) {
//   console.log(
//     `${country} (${population} Million)  has more population than Finland (${finlandPopulation} Million)`
//   );
// } else {
//   console.log(
//     `${country} (${population} Million)  has less population than Finland (${finlandPopulation} Million)`
//   );
// }
// const avgCountryPopulation = 33;
// if (population > avgCountryPopulation) {
//   console.log(
//     `${country} (${population} Million)  has more population than average country (${avgCountryPopulation} Million)`
//   );
// } else {
//   console.log(
//     `${country} (${population} Million) has less population than average country (${avgCountryPopulation} Million)`
//   );
// }
// const description = `${country} is in ${continent},and its ${population} million people speak ${language}`;
// console.log(description);

////////////////////////////////
//Strings and Template Literals
////////////////////////////////

// const descriptions = `${country} is in ${continent},and its ${population} million people speak ${language}`;
// console.log(descriptions);

///////////////////////////////////////
//Taking Decison : if/ else Statement
//////////////////////////////////////
// let population = 130;
// const avgCountryPopulation = 33;
// if (population > avgCountryPopulation) {
//   console.log(`${country}'s population is above average`);
// } else {
//   console.log(
//     `${country}'s population is ${33 - population} million below average.`
//   );
// }

////////////////////////////////
// Type Conversion and Coercion
////////////////////////////////

// console.log("9" - "5"); //4
// console.log("19" - "13" + "17"); //617
// console.log("19" - "13" + 17); //23
// console.log("123" < 57); //false
// console.log(5 + 6 + "4" + 9 - 4 - 2); //1143

////////////////////////////////
// Equality Operators: == vs ===
/////////////////////////////////

// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );
// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border!");
// } else {
//   console.log("No border!");
// }

////////////////////////////////
// Logical Operators
////////////////////////////////

// const population = 18;
// const language = "English";
// const isIsland = false;
// if (language === "English" && population < 50 && !isIsland) {
//   console.log("You should live in India");
// } else {
//   console.log("India does not meet your criteria");
// }

////////////////////////////////
// The switch Statement
////////////////////////////////

// const language = "maandarin";
// switch (language) {
//   case "chinese":
//   case "maandarin":
//     console.log("MOST number of native speaker");
//     break;
//   case "spanish":
//     console.log("2nd place in number of native speaker");
//     break;
//   case "english":
//     console.log("3rd place");
//     break;
//   case "hindi":
//     console.log("Number 4");
//     break;
//   case "arabic":
//     console.log("5th most spoken language");
//     break;
//   default:
//     console.log("Great language too:D");
//     break;
// }

////////////////////////////////
//The Conditional (Ternary) Operator
////////////////////////////////

// const population = 18;
// console.log(
//   population > 33
//     ? "India's population is above average"
//     : "India's population is below average"
// );

// const Sathy = {
//   firstName: "Sathya",
//   lastName: "Narayanan",
//   Job: "Teacher",
//   birthYear: 2000,
//   friends: ["Master", "Blaster"],
//   haddriverlicence: false,
//   calAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
// };
// console.log(Sathy.calAge());
// console.log(Sathy.age);
// // console.log(
// //   `${Sathy["firstName"]} has ${Sathy["friends"].length} and his best friend is ${Sathy["friends"][0]}
// //   } `
// // );
// console.log(`${Sathy["firstName"]} is a ${Sathy["age"]}-year old ${
//   Sathy["Job"]
// }, and he
//   ${Sathy["haddriverlicence"] ? "has a" : "don't have a"} driver's licence
//   `);
