//planTrip();

// const planTrip = function(line, strStation, ){
//
// };
const line = {
  
};
const lineL = ['8th','6th','Union Square','3rd','1st'];
const lineN = ['Times Square','34th','28th','23rd','Union Square','8th'];
const line6 = ['Grand Central','33rd','28th','23rd','Union Square','Astor Place'];

const planTrip = function(strLine, strStation, endLine, endStation){

};

const singleLineTrip = function(strLine, strStation, endStation){
  let strStIndex = strLine.indexOf(strStation);
  let endStIndex = strLine.indexOf(endStation);
  let stationsToPrint = [];
  if(strStIndex < endStIndex){
    stationsToPrint = strLine.slice(strStIndex+1, endStIndex+1);
  }
  else {
    stationsToPrint = strLine.slice(endStIndex+1, strStIndex+1);
    stationsToPrint = stationsToPrint.reverse();
  }
  console.log(`${stationsToPrint}`);
};

const multiLineTrip = function(strLine, strStation, endLine, endStation){
  //****** Starting Line Trip *********
  let strStIndex = strLine.indexOf(strStation);
  const interchangeStation = 'Union Square';
  const interchagStIndex = strLine.indexOf(interchangeStation);
  let stationsToPrint = [];

  if(strStIndex < interchagStIndex){
    stationsToPrint = strLine.slice(strStIndex+1, interchagStIndex+1);
  }
  else {
    stationsToPrint = strLine.slice(interchagStIndex+1, strStIndex+1);
    stationsToPrint = stationsToPrint.reverse();
  }
  //********** Ending Line Trip ***********
  let endStIndex = endLine.indexOf(endStation);
  const interchangeEndStIndex = endLine.indexOf(interchangeStation);
  let stationsToPrintL = [];

  if(endStIndex < interchangeEndStIndex){
    stationsToPrintL = endLine.slice(endStIndex, interchangeEndStIndex);
    stationsToPrintL = stationsToPrintL.reverse();
  }
  else{
    stationsToPrintL = endLine.slice(interchangeEndStIndex+1, endStIndex+1);
  }
  //******** Concat after interchange **********
  console.log(`${stationsToPrint.concat(stationsToPrintL)}`);
};

console.log(singleLineTrip(lineL,'6th','1st'));
console.log(singleLineTrip(lineL,'1st','6th'));
console.log(multiLineTrip(lineL,'8th',lineN,'23rd'));
console.log(multiLineTrip(lineL,'8th',lineN,'8th'));
console.log(multiLineTrip(line6,'28th',lineL,'8th'));
console.log(multiLineTrip(line6,'28th',lineL,'1st'));
