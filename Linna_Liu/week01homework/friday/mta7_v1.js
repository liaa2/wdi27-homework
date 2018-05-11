// MTA Lab
// Objectives:
// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation and JS data structures.
// Activity
// Create a program that models a simple subway system.
//
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
//
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you might need to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// Hints:
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Depending on what kind of data structures you use to represent the lines and stations, you might have to make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

const trains = {
  "N": [
    "34th",
    "28th",
    "23rd",
    "Union Square",
    "8th"
  ],

  "L": [
    "8th",
    "6th",
    "Union Square",
    "3rd",
    "1st"
  ],

  "6": [
    "Grand Central",
    "33rd",
    "28th",
    "23rd",
    "Union Square",
    "Astor Place"
  ],
};

// Multiple Trip Solution - repetitive functions

const planTrip = function (line1, start, line2, end) {
  if (line1===line2) {
    let sum = singleTrip(line1,start, end);
    console.log (sum + " stops in total.")
  }

  if (line1!=line2) {
    let sum = singleTrip(line1,start,"Union Square")
    console.log("Change at Union Square.")
    // singleTrip(line2,"Union Square",end)
    sum += singleTrip2(line2,"Union Square",end)
    console.log (sum + " stops in total.")
  }

};



const singleTrip = function (train,fromStop,toStop) {

  const line = trains[train];
  const start = line.indexOf(fromStop);
  const end = line.indexOf(toStop);
  const trip = [];
  let sum=0

  if (start<end) {
    for (i=start+1;i<=end;i++) {
      trip.push(line[i])
    }
    // console.log(count);
    console.log(`You must travel through the following stops on the ${train} line: ${trip}.`)
  }

  if (start>end) {
    for (i=start-1;i>=end;i--) {
      trip.push(line[i])
    }
    // console.log(count);
    console.log(`You must travel through the following stops on the ${train} line: ${trip}.`)
  }

  sum += trip.length
  return sum;
  // console.log(sum)

};



const singleTrip2 = function (train,fromStop,toStop) {

  const line2 = trains[train];
  const start2 = line2.indexOf("Union Square");
  const end2 = line2.indexOf(toStop);
  // const transitUS= line.indexOf("Union Square") <--useless
  const trip2 = [];
  let sum=0

  if (start2<end2) {
    for (i=start2+1;i<=end2;i++) {
      trip2.push(line2[i])
    }
    // console.log(count);
    console.log(`Your journey continues through the following stops: ${trip2}.`)
  }

  if (start2>end2) {
    for (i=start2-1;i>=end2;i--) {
      trip2.push(line2[i])
    }
    // console.log(count);
    console.log(`Your journey continues through the following stops: ${trip2}.`)
  }


  sum += trip2.length
  return sum;
  // console.log(sum)
};

planTrip("6","Union Square","6","33rd");
console.log("-------------------------")
planTrip("6","Astor Place","6","33rd");
console.log("-------------------------")
planTrip("L","8th","6","33rd");
console.log("-------------------------")
planTrip("L","8th","N","8th");
console.log("-------------------------")
planTrip("N","34th","6","Grand Central");
