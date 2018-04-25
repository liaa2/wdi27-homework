// # MTA Lab
//
// ## Objectives:
// * Apply your knowledge of Javascript to solve a real world problem.
// * Get really good at array manipulation and JS data structures.
//
// #### Activity
// * Create a program that models a simple subway system.



// * The program takes the line and stop that a user is getting on at and the line
// and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
//
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// ```
//
// * There are 3 subway lines:
//   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you might need to differentiate this when you name your stops in the arrays.)
// * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

// const mtaVersion1 = {
// 	lineN:["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
// 	//both ways reversing function...
// 	lineL:["8th", "6th", "Union Square", "Astor Place"],
// 	line6:["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.
// The program takes the line and stop that a user is getting on at and the line
// and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
//
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//* Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

// Works :

const planTrip = function(a, b) {
  const line6 = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];

  const departFrom = line6.indexOf(a);
  const arriveTo = line6.indexOf(b);
  const listOfStops = [];

  // TO-DO depart equals arrive
  if (departFrom < arriveTo) {
    for (let i = departFrom+1; i < arriveTo; i++) {
      listOfStops.push(line6[i]);
    }
  } else if (departFrom > arriveTo) {
    for (let i = departFrom-1; i > arriveTo; i--) {
      listOfStops.push(line6[i]);
    }
  }

  console.log(`You are at the station ${a} and you will pass ${listOfStops.join()}`);
};

planTrip("Times Square", "Union Square");
planTrip("Union Square", "Times Square");

// Works
const planTrip = function(a, b) {
  const line6 = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];

  const departFrom = line6.indexOf(a);
  const arriveTo = line6.indexOf(b);
  let road;

if (departFrom < arriveTo){
          road = line6.slice(departFrom + 1, arriveTo - departFrom);
 } else {
// TO-DO equal
          road = line6.slice(arriveTo + 1,  departFrom - arriveTo).reverse();
 }
 console.log(`You are at the station ${a} and you will pass ${road.join()}`);
};

planTrip("Union Square", "Times Square");
planTrip("Times Square", "Union Square");
