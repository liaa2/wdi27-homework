
const mtiLines = {
// Declaring variables
  lineL : ['8th','6th','Union Square','3rd','1st'],
  lineN : ['Times Square','34th','28th','23rd','Union Square','8th'],
  line6 : ['Grand Central','33rd','28th','23rd','Union Square','Astor Place'],
  stationsToPrint : [],
  interchangeStation : 'Union Square',
  stationsCount : 0,

// Function for single trip (forward or reverse)
  singleLineTrip : function(strLine, strStation, endStation){
    let strStIndex = this[strLine].indexOf(strStation);
    let endStIndex = this[strLine].indexOf(endStation);
    if(strStIndex < endStIndex){
      this.stationsToPrint = this[strLine].slice(strStIndex+1, endStIndex+1);
    }
    else {
      this.stationsToPrint = this[strLine].slice(endStIndex, strStIndex);
      this.stationsToPrint = this.stationsToPrint.reverse();
    }
    return this.stationsToPrint;
  },
// Funciton for multiple trips
  multiLineTrip : function(strLine, strStation, endLine, endStation){
    this.singleLineTrip(strLine, strStation, this.interchangeStation);
    console.log(`You must travel through the following stops on the ${strLine}: ${this.stationsToPrint}`);
    console.log('Change at Union Square');
    this.stationsCount = this.stationsToPrint.length;
    this.singleLineTrip(endLine, this.interchangeStation, endStation);
    console.log(`Your journey continues through the following stops: ${this.stationsToPrint}`);
    this.stationsCount = this.stationsCount + this.stationsToPrint.length;
    console.log(`${this.stationsCount} stops in total`);
  },
// Function for whole trip
  planTrip : function(strLine, strStation, endLine, endStation){
    if(strLine == endLine)
    {
      this.singleLineTrip(strLine, strStation, endStation);
      console.log(`You must travel through the following stops on the ${strLine}: ${this.stationsToPrint}`);
      console.log(`${this.stationsToPrint.length} stops in total`);
    }
    else{
      this.multiLineTrip(strLine, strStation, endLine, endStation);
    }
  }
};

 console.log(mtiLines.planTrip('lineL','6th','lineL','1st'));
 console.log(mtiLines.planTrip('lineL','1st','lineL','6th'));
 console.log(mtiLines.planTrip('lineL','8th','lineN','23rd'));
 console.log(mtiLines.planTrip('lineL','8th','lineN','8th'));
 console.log(mtiLines.planTrip('line6','28th','lineL','8th'));
 console.log(mtiLines.planTrip('line6','28th','lineL','1st'));
