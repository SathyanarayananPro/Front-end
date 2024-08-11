//Functions

// const describeCountry = function (country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital is ${capitalCity}\n`;
// };
// const desctamil = describeCountry("Tamil Nadu", 15, "Chennai");
// const desckerala = describeCountry("Keralam", 5, "Thiruvanandhapuram");
// const desckanna = describeCountry("Karnadakam", 10, "Bengaluru");
// console.log(desctamil, desckerala, desckanna);

// Function Declaration vs Expressions
//function Expression
// const percentageOfWorld1 = function (population) {
//   return (population / 7900) * 100;
// };
// console.log(`China's population percentage is ${percentageOfWorld1(2900)}`);
// console.log(`India's population percentage is ${percentageOfWorld1(3000)}`);
// console.log(`USA's population percentage is ${percentageOfWorld1(2000)}`);
// //function decleration
// function percentageOfWorld2(population) {
//   return (population / 7900) * 100;
// }
// console.log(`China's population percentage is ${percentageOfWorld2(2900)}`);
// console.log(`India's population percentage is ${percentageOfWorld2(3000)}`);
// console.log(`USA's population percentage is ${percentageOfWorld2(2000)}`);

// Arrow Function

// const percentageOfWorld3 = (population) => {
//   return (population / 7900) * 100;
// };
// console.log(`China's population percentage is ${percentageOfWorld3(2900)}`);

// Function Calling Other Functions

// const percentageOfWorld1 = function (population) {
//   return (population / 7900) * 100;
// };
// const describePopulation = (country, population) => {
//   return `${country} has ${population} million people, which is about ${Math.round(
//     percentageOfWorld1(population)
//   )}% of the world`;
// };
// console.log(describePopulation("India", 3000));
// console.log(describePopulation("China", 2900));
// console.log(describePopulation("USA", 2000));

// Introduction to Arrays

// const percentageOfWorld1 = function (population) {
//   return (population / 7900) * 100;
// };

// const populations = [3000, 2900, 2000, 5000];
// console.log(populations.length === 4);
// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];
// console.log(percentages);

// Basic Array Operations (Methods)

// const neighbours = ["China", "Sri Lanka"];
// console.log(neighbours);
// neighbours.push("Utopia");
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes("Germany")) {
//   console.log("Probably not a central europian country");
// }
// neighbours[neighbours.indexOf("China")] = "Republic of China";
// console.log(neighbours);

// Introduction to Objects

// const myCountry = {
//   country: "India",
//   capital: "New Delhi",
//   language: "Tamil",
//   population: 180,
//   neighbours: ["China", "Sri Lanka"],
// };
// console.log(myCountry);

// Dot vs Bracket Notation

// const myCountry = {
//   country: "India",
//   capital: "New Delhi",
//   language: "Tamil",
//   population: 180,
//   neighbours: ["China", "Sri Lanka"],
// };
// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital is called ${myCountry.capital}`
// );
// myCountry.population += 2;
// console.log(myCountry.population);

// myCountry["population"] -= 2;
// console.log(myCountry.population);

// Object Method

// const myCountry = {
//   country: "India",
//   capital: "New Delhi",
//   language: "Tamil",
//   population: 180,
//   neighbours: ["China", "Sri Lanka"],
//   describe: function () {
//     this.desc = `${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbours.length} neighbouring countries and a capital is called ${this.capital}`;
//   },

//   checkIsland: function () {
//     this.Island = this.neighbours.length === 0 ? true : false;
//   },
// };
// myCountry.describe();
// myCountry.checkIsland();
// console.log(myCountry);

// Iteration: The for Loop

// for (i = 0; i < 50; i++) {
//   console.log(`Voter number ${i} is currently Voting`);
// }

// Looping Array, Breaking and Continue

// const percentageOfWorld1 = function (population) {
//   return (population / 7900) * 100;
// };
// const populations = [3000, 2900, 2000, 5000];
// const percentages2 = [];
// for (i = 0; i < populations.length; i++) {
//   const percen = percentageOfWorld1(populations[i]);
//   percentages2.push(percen);
// }
// console.log(percentages2);

// Looping Backwards and Loops in Loops

// const listOfNeighbours = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Noray", "Sweden", "Russia"],
// ];
// for (i = 0; i < listOfNeighbours.length; i++) {
//   for (j = 0; j < listOfNeighbours[i].length; j++) {
//     console.log(`Neighbours:${listOfNeighbours[i][j]}`);
//   }
// }

// While Loop

// const percentageOfWorld1 = function (population) {
//   return (population / 7900) * 100;
// };
// const populations = [3000, 2900, 2000, 5000];
// const percentages2 = [];
// let i = 0;
// while (i < populations.length) {
//   const percen = percentageOfWorld1(populations[i]);
//   percentages2.push(percen);
//   i++;
// }
// console.log(percentages2);
