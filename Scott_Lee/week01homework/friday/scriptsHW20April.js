/// MTA Lab attempt #1

// const lineN = [
//     "Times Square",
//     "34th",
//     "28th",
//     "23rd",
//     "Union Square",
//     "8th"
// ];
// const lineSix = [
//     "Grand Central",
//     "33rd",
//     "28th",
//     "23rd",
//     "Union Square",
//     "Astor Place"
// ];
// const lineL = [
//     "1st",
//     "3rd",
//     "Union Square",
//     "6th",
//     "8th"
// ];

// construct MTA object
// MTA object contains routes object and methods
// routes object contains line and respective array
// methods to travel from 1 route to another
// methods to log train station route and length

const mta = {
    path: {
        lineN: [
            "Times Square",
            "34th",
            "28th",
            "23rd",
            "Union Square",
            "8th"
        ]
    },
    // takes starting station and final station
    displacement: function(a,b){
        // check position of stations in array
        // positive indicates forward direction, index increasing
        // negative indicates backward direction, index decreasing
        const finalIndex = this.path.lineN.indexOf(b);
        let startIndex = this.path.lineN.indexOf(a);
        return finalIndex-startIndex;
    },
    // station to station method
    unitDirection: function(a,b){
        // Unit direction of travel is given by 
        // this.direction(a,b) / (Math.sqrt(this.direction(a,b)**2))
        // Add unit direction of travel to startIndex 
        return this.displacement(a,b) / (Math.sqrt(this.displacement(a,b)**2));
    },
    tripLength: function(a,b){
        return (this.displacement(a,b) / this.unitDirection(a,b));
    },
    // Add unit direction of travel to starting index
    // return the station at the index of this sum
    nextStop: function(a,b){
        let indexOfNextStop = this.path.lineN.indexOf(a);
        (this.displacement(a,b)>0 ? indexOfNextStop++ : indexOfNextStop--);
        return indexOfNextStop;
    },
    // Loop nextStops til count reaches tripLength
    // Log route and number of trips
    travel: function(a,b){
        var stationStopList = [];
        for (var i=0; i<this.tripLength; i++){
            console.log("test");
            stationStopList[i] = this.nextStop(a,b);
        }
        return stationStopList;
    }
    // route method
    // route logger method
}
