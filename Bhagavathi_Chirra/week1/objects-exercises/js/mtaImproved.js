
const lineL = ['8th','6th','Union Square','3rd','1st'];
const lineN = ['Times Square','34th','28th','23rd','Union Square','8th'];
const line6 = ['Grand Central','33rd','28th','23rd','Union Square','Astor Place'];
const interchangeStation = 'Union Square';

const planTrip = function(strLine, strStation, endLine, endStation){
  let stationsToPrint = [];
  if(strLine == endLine)
  {
    stationsToPrint = singleLineTrip(strLine, strStation, endStation);
    console.log(`${stationsToPrint}`);
  }
  else {
    let stationsToPrintMulti = [];
    let toPrint = [];
    stationsToPrint = singleLineTrip(strLine, strStation, interchangeStation);
    stationsToPrintMulti = singleLineTrip(endLine, interchangeStation, endStation);
    toPrint = stationsToPrint.concat(stationsToPrintMulti);
    console.log(`${toPrint}`);
  }
};

const singleLineTrip = function(strLine, strStation, endStation){
  let strStIndex = strLine.indexOf(strStation);
  let endStIndex = strLine.indexOf(endStation);
  if(strStIndex < endStIndex){
    stationsToPrint = strLine.slice(strStIndex+1, endStIndex+1);
  }
  else {
    stationsToPrint = strLine.slice(endStIndex, strStIndex);
    stationsToPrint = stationsToPrint.reverse();
  }
  return stationsToPrint;
};

console.log(planTrip(lineL,'6th',lineL,'1st'));
console.log(planTrip(lineL,'1st',lineL,'6th'));
console.log(planTrip(lineL,'8th',lineN,'23rd'));
console.log(planTrip(lineL,'8th',lineN,'8th'));
console.log(planTrip(line6,'28th',lineL,'8th'));
console.log(planTrip(line6,'28th',lineL,'1st'));
