// Check if they are on the right line. If they are use a correctLine()
// If they arent on the correct line. Send them towards Union square and swap to the correct line.
const allLines = {
  lineN: [
   {stop: "Times Square", number: 0},
   {stop: "34th", number: 1},
   {stop: "28th", number: 2},
   {stop: "23rd", number: 3},
   {stop: "Union Square", number: 4},
   {stop: "8th", number: 5}
 ],
 lineL: [
   {stop: "8th", number: 0},
   {stop: "6th", number: 1},
   {stop: "Union Square", number: 2},
   {stop: "3rd", number: 3},
   {stop: "1st", number: 4}
 ],
 line6: [
   {stop: "Grand Central", number: 0},
   {stop: "33rd", number: 1},
   {stop: "28th", number: 2},
   {stop: "23rd", number: 3},
   {stop: "Union Square", number: 4},
   {stop: "Astor Place", number: 5}
 ]
}
let finalStop = "";
const planTrip = function (lineFrom, stopFrom, lineTo, stopTo) {
  finalStop = stopTo;
  if (lineFrom === lineTo) {
    line = lineFrom;
    singleLine(line, stopFrom, stopTo);
  }
  if (lineFrom !== lineTo) {
    line = lineFrom;
    goToUnion(line, stopFrom, lineTo, stopTo);
  }
}
const goToUnion = function(line, stopFrom, lineTo, stopTo) {
  let newStartStationNumber = 0;
  let newEndStationNumber = stopTo;
  if (line === "N") {
    line = "lineN";
    unionNumber = 4;
  }
  else if (line === "L") {
    line = "lineL";
    unionNumber = 2;
  }
  else if (line === "6") {
    line = "line6";
    unionNumber = 4;
  }
  if (lineTo === "N") {
    newLine = "lineN";
    newStartStationNumber = 4;
  }
  else if (lineTo === "L") {
    newLine = "lineL";
    newStartStationNumber = 2;
  }
  else if (lineTo === "6") {
    newLine = "line6";
    newStartStationNumber = 4;
  }
  let startStationNumber = 0;
  let endStationNumber = unionNumber;
  for (let i = 0; i<allLines[line].length; i++) {
    if (allLines[line][i].stop === stopFrom) {
      startStationNumber = allLines[line][i].number;
    }
  }
  if (startStationNumber < endStationNumber) {
    travelDownToUnion(startStationNumber, endStationNumber, line, newStartStationNumber, newEndStationNumber, newLine);
  }
  else if (startStationNumber > endStationNumber) {
    travelUpToUnion(startStationNumber, endStationNumber, line, newStartStationNumber, newEndStationNumber, newLine);
  }
};
const travelDownToUnion = function(startStationNumber, endStationNumber, line, newStartStationNumber, newEndStationNumber, newLine) {
  startStationNumber += 1;
  while (startStationNumber <= endStationNumber) {
    stopsToStopAt += allLines[line][startStationNumber].stop+",";
    startStationNumber += 1;
    totalStops += 1;
  }
  console.log(`You need to stop at ${stopsToStopAt}`);
  console.log(`Change at Union Square`);
  fromUnion(newStartStationNumber, newEndStationNumber, newLine);
};
const travelUpToUnion = function(startStationNumber, endStationNumber, line, newStartStationNumber, newEndStationNumber, newLine) {
  startStationNumber -= 1;
  while (startStationNumber >= endStationNumber) {
    stopsToStopAt += allLines[line][startStationNumber].stop+",";
    startStationNumber -= 1
    totalStops += 1;
  }
  console.log(`You need to stop at ${stopsToStopAt}`);
  console.log(`Change at Union Square`);
  fromUnion(newStartStationNumber, newEndStationNumber, newLine);
}

const fromUnion = function (startStationNumber, endStationNumber, line) {
  for (let i = 0; i<allLines[line].length; i++) {
    if (allLines[line][i].stop === endStationNumber) {
      endStationNumber = allLines[line][i].number;
    }
  }
  if (startStationNumber < endStationNumber) {
    travelDown(startStationNumber, endStationNumber,line);
  }
  else if (startStationNumber > endStationNumber) {
    travelUp(startStationNumber, endStationNumber,line);
  }
}
const singleLine = function(line, stopFrom, stopTo) {
  if (line === "N") {
    line = "lineN";
  }
  else if (line === "L") {
    line = "lineL";
  }
  else if (line === "6") {
    line = "line6";
  }
  let startStationNumber = 0;
  let endStationNumber = 0;
  for (let i = 0; i<allLines[line].length; i++) {
    if (allLines[line][i].stop === stopFrom) {
      startStationNumber = allLines[line][i].number;
    }
    if (allLines[line][i].stop === stopTo) {
      endStationNumber = allLines[line][i].number;
    }
    if (startStationNumber < endStationNumber) {
      startStationNumber += 1;
      travelDown(startStationNumber, endStationNumber,line);
    }
    else if (startStationNumber > endStationNumber) {
      startStationNumber -= 1;
      travelUp(startStationNumber, endStationNumber,line);
    }
  }
}
let totalStops = 0;
let stopsToStopAt = "";
let currentStop = "";
const travelDown = function (startStationNumber, endStationNumber,line) {
  startStationNumber += 1;
  stopsToStopAt = "";
  while (startStationNumber <= endStationNumber) {
    stopsToStopAt += allLines[line][startStationNumber].stop+",";
    startStationNumber += 1;
    totalStops += 1;
    currentStop = allLines[line][startStationNumber-1].stop;
  }
  console.log(`You need to stop at ${stopsToStopAt}`);
  if (finalStop === currentStop) {
    finish();
  }
}
const travelUp = function (startStationNumber, endStationNumber,line) {
  startStationNumber -= 1;
  stopsToStopAt = "";
  while (startStationNumber >= endStationNumber) {
    stopsToStopAt += allLines[line][startStationNumber].stop+",";
    startStationNumber -= 1;
    totalStops += 1;
    currentStop = allLines[line][startStationNumber+1].stop;
  }
  console.log(`You need to stop at ${stopsToStopAt}`);
  if (finalStop === currentStop) {
    finish();
  }
}

const finish = function() {
  console.log(`Total stops: ${totalStops}`)
}

























//
// const startFrom = function (lineFrom, stopFrom, lineTo, stopTo) {
//   let startStationNumber = 0;
//   let endStationNumber = 0;
//   if (lineFrom === "N") {
//     for( let i=1; i <lineN.length; i++) {
//       if (lineN[i].stop === stopFrom) {
//         startStationNumber = lineN[i].number;
//       }
//       if (lineN[i].stop === stopTo) {
//         endStationNumber = lineN[i].number;
//       }
//     }
//     if (startStationNumber < endStationNumber) {
//       travelDown(startStationNumber, endStationNumber);
//     }
//     else if (startStationNumber > endStationNumber) {
//       travelUp(startStationNumber, endStationNumber);
//     }
//   }
// }
