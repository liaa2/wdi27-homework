// // # MTA Lab
// //
// // ## Objectives:
// // * Apply your knowledge of Javascript to solve a real world problem.
// // * Get really good at array manipulation and JS data structures.
// //
// // #### Activity
// // * Create a program that models a simple subway system.
// //
// // * The program takes the line and stop that a user is getting on at and the line
// // and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
// //
// // ```javascript
// // planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
// //
// // // console.log() shows output similar to this:
// // // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // // "Change at Union Square."
// // // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // // "7 stops in total."
// // ```
// //
// // * There are 3 subway lines:
// //   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// //   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// //   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// //   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you might need to differentiate this when you name your stops in the arrays.)
// // * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.


// // #### Hints:
// // * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// // * Get the program to work for a single line before trying to tackle multiple lines.
// // * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```prompt()``` later to make it more interactive.
// // * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// // * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// // * Depending on what kind of data structures you use to represent the lines and stations, you  might have to make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)




const railwayslines = {
  "N": [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ],
  "L": [ "8th", "6th", "Union Square", "3rd", "1st" ],
  "6": [ "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place" ],
};

let totalStations = 0; // increment totalStations by one for each station traveled past
// let journey = []; // add each station travel past to "journey"
const commonStation = "Union Square";
let travelled = 0; // stations travelling past


const trainTravel = function(firstStop, lastStop, line) {
  const myLineStops = railwayslines[line];
  const stopA = myLineStops.indexOf(firstStop);
  const stopB = myLineStops.indexOf(lastStop); // + 1; // get the last stop
  // console.log({stopA, stopB});
  if ( stopB < stopA ) { //check if traveling backwards
    travelled = myLineStops.slice(stopB, stopA);
    travelled = travelled.reverse();
  } else {
     travelled = myLineStops.slice(stopA+1, stopB+1);
  }
  return travelled;
  // for ( let stop in travelled ) {
  //   console.log('HELLO');
  //   journey.push(`${line}: ${travelled[stop]}`); // Record the line and stop
  //   totalStations++; // adding stations
  // }
}

const planTrip = function(firstLine, firstStop, lastLine, lastStop) {
  totalStations = 0;
  if (firstLine === lastLine) {
    console.log("single line trip");
    let journey = trainTravel(firstStop, lastStop, firstLine);
    console.log(`You need to travel through the follwing stops: ${journey.join(", ")}`);
    console.log(`Total stops: ${journey.length}`);
  } else {
    // multi-line trip
    let journey = trainTravel(firstStop, commonStation, firstLine); // Travel to union square
    let secondJourney = trainTravel(commonStation, lastStop, lastLine); // Travel from union square
    console.log(`The number of stations you need to travel are ${journey.length + secondJourney.length}`);
    console.log(`You need to follow ${journey.join(", ")}`);
    console.log(`Change at ${commonStation}`);
    console.log(`You need to follow ${secondJourney.join(", ")}`);
  }
};

console.log(planTrip("6", "Grand Central", "6", "Astor Place"));
console.log(planTrip("6", "Astor Place", "6", "Grand Central"));
//
console.log('Multi-line trip =============================');
console.log(planTrip("6", "Grand Central", "N", "8th"));
console.log(planTrip("N", "34th", "L", "1st"));
console.log(planTrip("N", "Times Square", "6", "33rd"));
// console.log(planTrip("N", "8th", "L", "1st"));
// console.log(planTrip("L", "1st", "N", "8th"));
