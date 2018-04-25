const allLines = {
  lineN: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  lineL: ["8th", "6th", "Union Square", "3rd", "1st"],
  line6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
};
let totalStops = 0;
let finalStop = "";
const planTrip = function (lineFrom, stopFrom, lineTo, stopTo) {
  totalStops = 0;
  finalStop = stopTo;
  if (lineFrom === lineTo) {
    singleLine(lineFrom, stopFrom, stopTo);
  } else {
    singleLine(lineFrom, stopFrom, "Union Square");
    console.log(`Change at Union Square to line ${lineTo.slice(4)}.`);
    singleLine(lineTo, "Union Square", stopTo);
  }
};
const singleLine = function(lineName, stopFrom, stopTo) {
  let stopsToStopAt = "";
  const line = allLines[lineName];
  if (line.indexOf(stopFrom) > line.indexOf(stopTo)) {
    line.reverse();
  }
  let startStation = line.indexOf(stopFrom)+1;
  const endStation = line.indexOf(stopTo);
  while (startStation <= endStation) {
    stopsToStopAt += line[startStation]+", ";
    startStation += 1;
    totalStops += 1;
  }
  console.log(`You must travel through the following stops on the ${lineName.slice(4)} line: ${stopsToStopAt.slice(0,-2)}.`);
  if (finalStop === line[startStation-1]) {
    finish();
  }
};
const finish = function() {
  console.log(`Total stops: ${totalStops}`)
};
