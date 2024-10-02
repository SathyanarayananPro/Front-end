'use strict';
///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory India: 1.33
      Odd of draw: 3.25
      Odd of victory USA: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
/*
const game = {
  team1: 'India',
  team2: 'America',
  players: [
    [
      'Annamalai',
      'Baskar',
      'Chitta',
      'Darani',
      'Gazhni',
      'Hari',
      'Iniyan',
      'Jaga',
      'Kamal',
      'Lakshman',
      'Mani',
    ],
    [
      'Arnold',
      'Bob',
      'Devid',
      'Einstain',
      'Fernandus',
      'Harrif',
      'Immanual',
      'Jacky',
      'Karmon',
      'Moye',
      'Peter',
    ],
  ],
  score: '5:0',
  scored: ['Jaga', 'Hari', 'Mani', 'Kamal', 'Chitta', 'Jaga'],
  date: 'Feb 28th 2050',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1.
for (const [num, name] of game.scored.entries()) {
  console.log(`Goal ${num + 1}:${name}`);
}
// 2.
const odd = Object.values(game.odds);
let avg = 0;
for (const sum of odd) {
  avg += sum;
}

avg /= odd.length;
console.log(avg);
// 3.`
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `Victory of ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}
// Bonus
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
*/
