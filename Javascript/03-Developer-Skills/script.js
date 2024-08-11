// Remember, we're gonna use strict mode in all scripts now!
"use strict";
// Problem 1: find the Temperature AMplitude of the given array
//First Try
const temperature = [3, -2, -6, "error", 9, 13, 17, 15, 14, 9, 5];
// let min = 0;
// let max = 0;

// for (let i = 0; i < temperature.length; i++) {
//   if (typeof temperature[i] !== "String") {
//     if (temperature[i] < min) {
//       min = temperature[i];
//       console.log(`min:${min}`);
//     } else if (temperature[i] > max) {
//       max = temperature[i];
//       console.log(`max:${max}`);
//     }
//   }
// }
// console.log(min, max);
// console.log(max - min);

// Second Try
// const calcTempAmplitude = function (temp) {
//   let min = temp[0];
//   let max = temp[0];
//   for (let i = 0; i < temp.length; i++) {
//     if (typeof temp[i] !== "String") {
//       if (temp[i] < min) {
//         min = temp[i];
//       } else if (temp[i] > max) {
//         max = temp[i];
//       }
//     }
//   }
//   return max - min;
// };
// const amplitude = calcTempAmplitude(temperature);
// console.log(`Temperature Amplitude is ${amplitude}`);

// Problem 2: find the Temperature Amplitude of the given 2 arrays

// const calcTempAmplitude = function (temp1, temp2) {
//   const temp = temp1.concat(temp2);
//   let min = temp[0];
//   let max = temp[0];
//   for (let i = 0; i < temp.length; i++) {
//     if (typeof temp[i] !== "String") {
//       if (temp[i] < min) {
//         min = temp[i];
//       } else if (temp[i] > max) {
//         max = temp[i];
//       }
//     }
//   }
//   return max - min;
// };
// const amplitude = calcTempAmplitude([1, 2, 3], [3, 2, 1]);
// console.log(`Temperature Amplitude is ${amplitude}`);

// Coding Challenge 1
// Given array in Numbers but needs to be printed in String format

const printForcast = function (arr) {
  let statement = "";
  for (let i = 0; i < arr.length; i++) {
    const state = `...${arr[i]}°C in ${i + 1} days`;
    statement = statement.concat(state);
  }
  return statement;
};
console.log(printForcast([5, 1, 2, -5]));
