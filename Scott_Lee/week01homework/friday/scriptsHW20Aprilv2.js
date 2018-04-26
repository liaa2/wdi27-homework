// MTA, a more general solution (failed attempt)

// assumption 1: trains are always available
// assumption 2: distance between any two adjacent stations are uniform (not a big deal)
// assumption 3: there is at most 1 intermediate train line which
// connects origin station train line and destination station train line

mta = {
    lines: {
        lineN: [
            "Times Square",
            "34th",
            "28th",
            "23rd",
            "Union Square",
            "8th"
        ],
        lineL: [
            "1st",
            "3rd",
            "Union Square",
            "6th",
            "8th"
        ],
        lineSix: [
            "Grand Central",
            "33rd",
            "28th",
            "23rd",
            "Union Square",
            "Astor Place"
        ],
        lineA: [
            "A1",
            "A2",
            "3rd",
            "Deadend"
        ]
    },

    // returns true, if currently at destination
    areWeThereYet: function(a,b){
        return (a === b);
    },

    // returns array of lines to which a station belongs
    linesThrough: function(station){
        // obtain list of all lines
        let lineKeys = Object.keys(this.lines);
        let linesThroughStation = [];
        // iterate through all lines
        for (var i=0; i<lineKeys.length; i++){
            // check stations of each line for a match
            for (var j=0; j<this.lines[lineKeys[i]].length; j++){
                // push any matches to array
                if (station === this.lines[lineKeys[i]][j]){
                    linesThroughStation.push(lineKeys[i]);
                }
            }
        }
        return linesThroughStation;
    },

    // returns array of lines in common between 2 stations
    commonLine: function(a,b){
        let linesInCommon = [];
        // check lines going through a
        for (var i=0; i<this.linesThrough(a).length; i++){
            // check lines going through b
            for (var j=0; j<this.linesThrough(b).length; j++){
                // push any matches to array
                if (this.linesThrough(a)[i]===this.linesThrough(b)[j]){
                    linesInCommon.push(this.linesThrough(a)[i]);
                }
            }
        }
        return linesInCommon;
    },

    // returns true, if line exists between 2 stations
    commonLineExistence: function(a,b){
        return (this.commonLine(a,b).length ? true : false);
    },

    // given a line, checks for junctions
    // returns object of junctions and its connections
    connectorsInLine: function(line){
        let junctions = {};
        // iterate through a line
        for (var i=0; i<this.lines[line].length; i++){
            // find stations with connections
            if (this.linesThrough(this.lines[line][i]).length > 1){
                junctions[this.lines[line][i]] = this.linesThrough(this.lines[line][i]).length;
            }
        }
        return junctions;
    },

    // returns object of junctions on a line, and their distances from current non-junction station
    nearestJunctions: function(station){
        // array of line going through given station
        let originLine = this.linesThrough(station);
        let currentPosition = this.lines[originLine].indexOf(station);
        // find stations on origin line which are junctions
        let connectorsOnOriginLine = Object.keys(this.connectorsInLine(originLine));
        let distancesToJunction = {};
        // loop through connecting stations on origin line, find their distance from origin
        for (var i=0; i<connectorsOnOriginLine.length; i++){
            distancesToJunction[connectorsOnOriginLine[i]] = this.lines[originLine].indexOf(connectorsOnOriginLine[i]) - currentPosition;
        }
        return distancesToJunction;
    },

    // check junctions on given a line for connections to destination station's line
    // these junctions are returned in an object with their distances from origin
    junctionConnections: function(a,b){
        // obtain keys of junctions to on current line
        let junctionsToCheck = Object.keys(this.nearestJunctions(a));
        let linesThroughDestination = this.linesThrough(b);
        let availableJunctions = [];
        // loop through lines through destination to see if they contain junctions on origin station's line
        for (var i=0; i<junctionsToCheck.length; i++){
            for (var j=0; j<linesThroughDestination.length; j++){
                if (this.lines[linesThroughDestination[j]].indexOf(junctionsToCheck[i])!== -1){
                    availableJunctions.push(junctionsToCheck[i]);
                }
            }
        }
        return availableJunctions;
    },

    // stringBuilder uses the travelLog to build final result
    stringBuilder: function(){
        // check this shit later
        let junctionPath = [];
        // this array will be of the form [{stationName:station, lineName:line}]
        let recordOfTravel = [];
        // build string for final return statement (list stations in order, list line change, list total stations traversed)
        // console.log(`Station and line info.`);
        // console.log(`Your trip requires ${recordOfTravel.length} stops.`)
        // let subArraysToCombine = this.linesInCommon(a,b);
        // for (var i=0; i < subArraysToCombine; i++){
        //     for (var j=0; j<this.travelLog[i].length; j++){
        //         recordOfTravel.push(this.travelLog[i][j]);
        //     }
        // }
        // console.log(recordOfTravel);
        console.log(this.travelLog);
    },

    // logs travel
    travelLog: [],
    
    // initial journey
    findPath: function(a,b){
        if (this.areWeThereYet){
            this.stringBuilder();
        }
        if (this.commonLineExistence(a,b)){
            this.finalJourneyLeg(a,b);
        }
        if (this.linesThrough(a).length === 1){
            this.goToJunction(a,b);
        }
        else this.junctionFinder(a,b);
    },

    // from current non-connecting station, find the nearest junction and travel to it
    goToJunction: function(a,b){
        // below is object of junctions and relative distance from station a
        // this step is useful in the case where a station in the middle of a line is not a junction
        let junctionsOnCurrentLine = this.nearestJunctions(a);
        let currentLine = this.linesThrough(a)[0];
        let currentPosition = this.lines[currentLine].indexOf(a);
        let junctionsInArray = [];
        // each key value pair in the object is added as subarray
        for (eachJunction in junctionsOnCurrentLine){
            // distance, not displacement is desired, so that absolute distance from origin to junction can be found
            junctionsInArray.push([eachJunction, Math.sqrt((junctionsOnCurrentLine[eachJunction])**2)]);
        }
        let sortedDistanceFromOrigin = junctionsInArray.sort(function(x,y){
            return x[1] > y[1];
        });
        // sort function returns array of subarrays showing station name and distance from origin station
        // therefore the closest junction to origin can be found as follows:
        let closestJunction = sortedDistanceFromOrigin[0][0];
        let displacementToJunction = this.lines[currentLine].indexOf(closestJunction) - this.lines[currentLine].indexOf(a);
        let distToJunction = sortedDistanceFromOrigin[0][1];
        // for the current line, slice the segment of array from origin to nearest junction
        let stationsPassedThrough = [];
        stationsPassedThrough = this.lines[currentLine].slice(this.lines[currentLine].indexOf(a)+1,this.lines[currentLine].indexOf(a)+displacementToJunction);
        // pushing of the temporary destinatin junction is done to ensure a single trip doesn't return empty array
        stationsPassedThrough.push(closestJunction);
        this.travelLog.push(stationsPassedThrough);
        this.findPath(closestJunction,b);
    },


    // junctionFinder finds the shortest possible path to the junction that exists on destination station's line
    junctionFinder: function(a,b){
        // if our origin had a line in common with the destination, the findPath method would cut straight to finalJourneyLeg
        let lineHistory = [];
        // Having only one intermediate train line at most means can automatically push the single line through a
        
    },


    // finalJourneyLeg returns array of stations from a to b
    // checks for every possible path between a and b and selects the shortest one
    finalJourneyLeg: function(a,b){
        let stationsStoppedBy = [];
        let lastLegDistances = {};
        // loop through array of lines common to a and b, 
        for (var i=0; i<this.commonLine(a,b).length; i++){
            // for each line, find index of b - index of a for displacement
            lastLegDistances[this.commonLine(a,b)[i]] = this.lines[this.commonLine(a,b)[i]].indexOf(b) - this.lines[this.commonLine(a,b)[i]].indexOf(a);
        }
        let unorderedDistances = [];
        // loop through lineName:stationNumber pair in lastLegDistances by pushing onto array
        for (lineName in lastLegDistances){
            unorderedDistances.push([lineName, Math.sqrt((lastLegDistances[lineName])**2)]);
        }
        // sort subarrays in array from longest to shortest path
        // to see this in action, cf. inputs "Union Square","8th" and "8th","Union Square"
        let orderedDistances = unorderedDistances.sort(function(x,y){
            return x[1] > y[1];
        })
        // due to the sort function, the first subarray in the orderedDistances array will always return
        // the common line between a and b that yields the shortest path
        let finalLine = this.lines[orderedDistances[0][0]];
        let finalDistance = orderedDistances[0][1];
        let finalDisplacement = finalLine.indexOf(b) - finalLine.indexOf(a);
        stationsStoppedBy = finalLine.slice(finalLine.indexOf(a)+1,finalLine.indexOf(b));
        // instead of adding +1 to indexOf(b) in the line above, we push (b) to the final array
        // Why? .slice() method's second argument slices up to but not including b, so if 
        // a and b are next to each other, stationsStoppedBy will be empty
        stationsStoppedBy.push(b);
        // refresh after each search or stationsStopped will continue to have (b) pushed onto it
        this.travelLog.push(stationsStoppedBy);
    },

    // MUST BE ON SAME LINE
    // returns displacement between two stations on the same line (+ve for forward, -ve for backward)
    // check which line is being used
    displacement: function(a,b){
        // find line to travel on to get from first to second station
        let lineToTravel = this.lines[ this.commonLine(a,b)[0] ];
        return lineToTravel.indexOf(b) - lineToTravel.indexOf(a);
    },
    // returns distance between 2 stations, i.e. magnitude of displacement
    distance: function(a,b){
        let x = this.displacement(a,b);
        return (x>0 ? x: -x);
    },
    // describes iterative movement between 2 stations
    movement: function(a,b){
        let unitMovement = (this.displacement(a,b)/this.distance(a,b));
        let currentPosition = a;
        for (var i=0; i<this.distance(a,b); i++){

        }
    }
}