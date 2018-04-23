const mta = {
  stations: { // list of stations for each line. Provided as arrays to enforce order
    'L': [
      '8th',
      '6th',
      'Union Square',
      '3rd',
      '1st'
    ],
    'N': [
      'Times Square',
      '34th',
      '28th',
      '23rd',
      'Union Square',
      '8th'
    ],
    '6': [
      'Grand Central',
      '33rd',
      '28th',
      '23rd',
      'Union Square',
      'Astor Place'
    ]
  },
  interchangeStation: { // interchange station to switch between lines
    'L': { 'N': 'Union Square', '6': 'Union Square' },
    'N': { 'L': 'Union Square', '6': '23rd' },
    '6': { 'L': 'Union Square', 'N': 'Union Square' }
  },
  journeyLines: { // Arrays that specify what line combinations to travel to move from any
    // starting line to any ending line. This is used to handle situations where not all
    // lines route via a single interchange station.
    //
    // E.g. given the following line map (stations are represented by 'x', 'y' and 'z')
    // LINE-1 : x1 - x2 - x3 - x4 - x5
    //                    |
    // LINE-2 : y1 - y2 - x3 - y4 - y5 - y6
    //                         |
    // LINE-3 : z1 - z2 - z3 - y4 - z5 - z6 - z7 - z8
    //
    // To journey from LINE-1->x1 to LINE-3->z5 the route needs to be:
    // LINE-1 : x1 - x2 - x3
    //                    |
    // LINE-2 :           x3 - y4
    //                         |
    // LINE-3 :                y4 - z5
    //
    // To support the above we would store journeyLines['LINE-1']['LINE-3'] = '[ LINE-1, LINE-2, LINE-3 ]'
    // This would get used in conjunction with interchangeStation defined separately
    // You would read this entry as "To complete a journey starting at a station on 'LINE-1'
    // and ending at a station on 'LINE-3' your would need to first travel from LINE-1 to
    // LINE-2 and then LINE-2 to LINE-3 to complete the journey"

    'L': { 'L': [ 'L' ], 'N': [ 'L', 'N'], '6': [ 'L', 'N', '6' ] },
    'N': { 'N': [ 'N' ], 'L': [ 'N', 'L'], '6': [ 'N', '6' ] },
    '6': { '6': [ '6' ], 'N': [ '6', 'N'], 'L': [ '6', 'L' ] },
  },

  isValidLine: function(line){
    // Check that a line is valid
    return (line in this.stations);
  },

  isValidStationOnLine: function(line, station){
    // Check that a station is on a line
    const stationArray = this.getStationListByLineName(line);
    return (stationArray.indexOf(station) >= 0);
  },

  getStationListByLineName: function(line){
    // Return array with list of stations on a given line
    return (this.stations[line]);
  },

  getInterchangeStation: function(startLine, endLine){
    // Return interchange station for a line combination
    return (this.interchangeStation[startLine][endLine]);
  },

  getJourneyLines: function(startLine, endLine){
    // Return array of lines to from a starting line to an ending line
    // any starting
    return (this.journeyLines[startLine][endLine]);
  },

  getStationsBetweenOnSameLine: function(line, startStation, endStation, journeyArray){
    // Add stations to a journey array
    let stationArray = this.getStationListByLineName(line);
    let startStationNumber = stationArray.indexOf(startStation);
    let endStationNumber = stationArray.indexOf(endStation);

    if(startStationNumber > endStationNumber){
      // Reverse the stations array as we are moving in the opposite direction
      stationArray = stationArray.reverse();
      startStationNumber = stationArray.indexOf(startStation);
      endStationNumber = stationArray.indexOf(endStation);
    }

    // Add combinations of station and line to the journey array
    for ( let i = startStationNumber; i <= endStationNumber; i++ ) {
      journeyArray.push({ station: stationArray[i], line: line });
    }
  },

  displayTripDetail: function(journeyArray){
    let currLine;                     // current line in the journey
    let currStation;                  // current station in the journey
    let prevLine = journeyArray[0].line;   // previous line to detect line changes
    let totalStops = 0;               // total number of stops in journey
    let totalLines = 1;               // count of the number of lines in the journey
    let stationString = [];           // string to be used to display journey details

    // Requirement is to not show the start station where the passgenger got onto the train
    // Therefore, we start looping over the array from the 2nd array element (i.e. index = 1)
    for (let i = 1; i < journeyArray.length; i++) {
      currLine = journeyArray[i].line;
      currStation = journeyArray[i].station;

      // The journey has involved a line change. Therefore display initial part of journey
      if( currLine != prevLine ){
        console.log(`You must travel through the following stops on the ${ prevLine } line: ${ stationString.join(', ') }`);

        // Display the interchange station. The test will surpress the display of the
        // end station is the interchange but specified on a different line. E.g.
        // Start: { Line-1, Station2 } End: { Line-2, InterchangeStation } we surpress
        // the interchange as there is no change required
        if( i != journeyArray.length-1 ){
          console.log(`Change at ${ currStation } to the ${ currLine } line.`);
          totalLines++;
        }

        // Reset the list of stations array that we use for display purposes
        stationString = [];
        prevLine = currLine;
        continue; // move to the next iteration of the loop
      }

      stationString.push(currStation); // add the current station to the display list
      prevLine = currLine;
      totalStops++;
    }

    // Display the final parts of the journey. If only a single line was travelled we use a different format
    if( stationString.length > 0 ){
      if( totalLines === 1 ){
        console.log(`You must travel through the following stops on the ${ currLine } line: ${ stationString.join(', ') }`);
      }else{
        console.log(`Your journey continues through the following stops on the ${ currLine } line: ${ stationString.join(', ') }`);
      }
    }

    // If only 1 station then display singular and not plural form of output
    console.log(`${ totalStops } ${ totalStops === 1 ? 'stop' : 'stops' } in total.`);
  },

  tripPlanner: function(startLine, startStation, endLine, endStation){
    // Force start line and end line parameters to uppercase
    startLine = startLine.toUpperCase();
    endLine = endLine.toUpperCase();

    // Check Start Line is valid
    if(!this.isValidLine(startLine)){
      console.error(`Invalid start line. The MTA does not have a line [${ startLine }]`);
      return false;
    }

    // Check End Line is valid if Start Line and End Line are different
    if(startLine != endLine){
      if(!this.isValidLine(endLine)){
        console.error(`Invalid end line. The MTA does not have a line [${ endLine }]`);
        return false;
      }
    }

    // Check Start Station is a station on the Start Line
    if(!this.isValidStationOnLine(startLine, startStation)){
      console.error(`Line [${ startLine }] does not a station called [${ startStation }]`);
      return false;
    }

    // Check End Station is a station on the End Line
    if(!this.isValidStationOnLine(endLine, endStation)){
      console.error(`Line [${ endLine }] does not a station called [${ endStation }]`);
      return false;
    }

    // Create a "journey" array to hold combinations of Line and Station that are part of the journey
    let journey = [];

    // Next section of code will loop over all lines we need to use to move
    // from our start line to our end line
    let journeyLines = this.getJourneyLines(startLine, endLine);
    let interchangeStation1;
    let interchangeStation2;
    let currLine;
    let nextLine;
    let prevLine;

    if(journeyLines.length === 1){
      // Handle a single line journey
      this.getStationsBetweenOnSameLine(startLine, startStation, endStation, journey);
    }else{
      // Handle a multi-line journey
      for (let i = 0; i < journeyLines.length; i++) {
        currLine = journeyLines[i];

        if(i === 0){
          // We are at the first line in the journey
          nextLine = journeyLines[i + 1];
          interchangeStation1 = this.getInterchangeStation(currLine, nextLine);
          interchangeStation2 = interchangeStation1;
          this.getStationsBetweenOnSameLine(currLine, startStation, interchangeStation1, journey);
        }else if(i === journeyLines.length-1){
          // We are at the last line in the journey
          this.getStationsBetweenOnSameLine(currLine, interchangeStation2, endStation, journey);
        }else{
          // We are in an intermediate line of the journey and only need to move
          // between interchange stations on the line
          prevLine = journeyLines[i - 1];
          nextLine = journeyLines[i + 1];
          interchangeStation1 = this.getInterchangeStation(prevLine, currLine);
          interchangeStation2 = this.getInterchangeStation(currLine, nextLine);

          this.getStationsBetweenOnSameLine(currLine, interchangeStation1, interchangeStation2, journey);
        }
      }
    }
    // Once the "journey" array has been populated run the function to display the trip details
    this.displayTripDetail(journey);

    // Empty the "journey" array to cater for future trip plans
    journey = [];

    return true;
  }
}
