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
// Horrible version - to review how to improve:
// const lines = {
//   N: ["Times Square", "34th", "28th-N", "23rd-N", "Union Square", "8th-N"],
// 	L: ["8th-L", "6th", "Union Square", "Astor Place-L"],
// 	6: ["Grand Central", "33rd", "28th-6", "23rd-6", "Union Square", "Astor Place-6"]
// };
//
// const tripPlan = function(lineFrom, a, lineTo, b) {
//   // TO-DO lineFrom equals lineTo
//   const unionSqr = "Union Square";
//   const departFrom = lines[lineFrom].indexOf(a);
//   const arriveTo = lines[lineTo].indexOf(b);
//   let stopsToGo;
//
//   // 1. travel within one line
//
//   if (lineFrom === lineTo){
//   const forthPartOfTrip = function (lineFrom, a, b,lineTo){
//     if (departFrom < arriveTo){
//               stopsToGo = lines[line].slice(departFrom + 1, arriveTo - departFrom);
//      } else {
//               stopsToGo = lines[line].slice(arriveTo + 1,  departFrom - arriveTo).reverse();
//      }
//      console.log(`You are at the station ${a} and you will pass ${stopsToGo.join()}`);
//    }
//  }else if (lineFrom !== lineTo){
//     //2. travel to unionSqr:
//      const firstPartOfTrip = function (a, unionSqr, lineFrom){
//     if (departFrom < lines[lineFrom].indexOf(unionSqr)){
//       stopsToGo = lines[lineFrom].slice(departFrom + 1, lines[lineFrom].indexOf(unionSqr)- departFrom);
//     } else {
//       stopsToGo = lines[lineFrom].slice(lines[line].indexOF(unionSqr) + 1,  departFrom - lines[line].indexOF(unionSqr)).reverse();
//     }   console.log(`You are at station ${departFrom} and line ${lineFrom}. You will have travel through the stattions ${stopsToGo}, please change at ${unionSqr} `)
//   }
//   // Change at Union Square and travel for the last stops
//     const secondPartOfTrip = function (unionSqr, b, lineTo){
//     if (lines[lineTo].indexOf(unionSqr) < arriveTo){
//       stopsToGo = lines[lineTo].slice(lines[lineTo].indexOf(unionSqr) + 1, arriveTo -lines[lineTo].indexOf(unionSqr));
//     } else {
//       stopsToGo = lines[lineFrom].slice(arriveTo + 1,  arriveTo - lines[line].indexOF(unionSqr)).reverse();
//     }   console.log(`You will need to travel on line ${lineTo} through the stations ${stopsToGo.join()} `)
//   }
// }
// };
//
//
//
// tripPlan("N", "Times Square",'6', "Astor Place-6")


// Works with buts, mentioned in the code:
const lines = {
	N: ["Times Square", "34th", "28th-N", "23rd-N", "Union Square", "8th-N"],
	L: ["8th-L", "6th", "Union Square", "Astor Place-L"],
	6: ["Grand Central", "33rd", "28th-6", "23rd-6", "Union Square", "Astor Place-6"]
};

const planTrip = (from, to, line) => {
	const a = line.indexOf(from);
	const b = line.indexOf(to)
	const indexA = Math.min(a, b);
	const indexB = Math.max(a, b);
	const destination = b - a > 0;

	const stopsToGo = line.slice(indexA + 1, indexB - indexA);
	return destination ? stopsToGo : stopsToGo.reverse();
};

const tripPlan = function (lineFrom, a, lineTo, b) {
	const unionSqr = "Union Square";
	const departFrom = lines[lineFrom].indexOf(a);
	const arriveTo = lines[lineTo].indexOf(b);
	let stopsToGo;

	if (lineFrom === lineTo) {
		const road = planTrip(a, b, lines[lineFrom]);
		return console.log(`You're going from ${a} to ${b} on line ${lineFrom} you're path inclides ${road.join()}`);
	}
// TO-DO show unionSqr and stop following after unionSqr if it is only one stop.
	const firstPart = planTrip(a, unionSqr, lines[lineFrom]);
	const secondPart = planTrip(unionSqr, b, lines[lineTo]);
	console.log(`You're going from ${a} to ${b} on line ${lineFrom} you're path inclides ${firstPart.join()}, please change at ${unionSqr} and take line ${lineTo}. You will pass stations ${secondPart.join()}`);
};

tripPlan("N", "Times Square","6", "Grand Central")
