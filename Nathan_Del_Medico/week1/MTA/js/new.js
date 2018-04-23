const allLines = {
  line1: ["Emu Plains", "Penrith", "Kingswood", "Werrington", "St Marys", "Mount Druitt", "Rooty Hill", "Doonside", "Blacktown", "Seven Hills", "Toongabbie", "Pendle Hill", "Wentworthville", "Westmead", "Parramatta", "Harris Park", "Clyde", "Lidcombe", "Strathfield", "Burwood", "Redfern", "Central", "Town Hall", "Wynyard", "Milsons Point", "North Sydney", "Waverton", "Wollstonecraft", "St Leonards", "Artarmon", "Chatswood", "Roseville", "Lindfield", "Killara", "Gordon", "Pymble", "Turramurra", "Warrawee", "Wahroonga", "Waitara", "Hornsby", "Asquith", "Mount Colah", "Mount Kuring-gai", "Berowra"],
  line2: ["Leppington", "Edmondson Park", "Glenfield", "Casula", "Liverpool", "Warwick Farm", "Cabramatta", "Canley Vale", "Fairfield", "Yennora", "Guildford", "Merrylands", "Granvile", "Clyde", "Auburn", "Lidcombe", "Flemington", "Homebush", "Strathfield", "Burwood", "Croydon", "Ashfield", "Summer Hill", "Lewisham", "Petersham", "Stanmore", "Newtown", "MacdonaldTown", "Redfern", "Central", "Town Hall", "Wynyard", "Circular Quay", "St James", "Museum"],
  line3: ["Liverpool", "Warwick Farm", "Cabramatta", "Carramar", "Villawood", "Leightonfield", "Chester Hill", "Sefton", "Birrong", "Yagoona", "Bankstown", "Punchbowl", "Wiley Park", "Lakemba", "Belmore", "Campsie", "Caterbury", "Hurlstone Park", "Dulwich Hill", "Marrickville", "Sydenham", "St Peters", "Erskineville", "Redfern", "Central", "Town Hall", "Wynyard", "Circuar Quay", "St James", "Museum"],
  line4: ["Helensburgh", "Waterfall", "Heathcote", "Engadine", "Loftus", "Sutherland", "Jannali", "Como", "Oatley", "Mortdale", "Penshurst", "Hurstville", "Allawah", "Carlton", "Kogarah", "Rockdale", "Banksia", "Arncliffe", "Wolli Creek", "Tempe", "Sydenham", "Redfern", "Central", "Town Hall", "Martin Place", "Kings Cross", "Edgecliff", "Bondi Junction"],
  line5: ["Richmond", "East Richmond", "Clarendon", "Windsor", "Mulgrave", "Vineyard", "Riverstone", "Schofields", "Quakers Hill", "Marayong", "Blacktown", "Seven Hills", "Toongabbie", "Pendle Hill", "Wentworthville", "Westmead", "Parramatta", "Harris Park", "Merrylands", "Guildford", "Yennora", "Fairfield", "Canley Vale", "Cabramatta", "Warwick Farm", "Liverpool", "Casula", "Glenfield", "Edmondson Park", "Leppington"],
  line6: ["Carlingford", "Telopea", "Dundas", "Rydalmere", "Camellia", "Rosehill", "Clyde"],
  line7: ["Olympic Park", "Lidcombe"],
  line8: ["Macarthur", "Campbelltown", "Leaumeah", "Minto", "Ingleburn", "Macquarie Fields", "Glenfield", "Holsworthy", "East Hills", "Panania", "Revesby", "Padstow", "Riverwood", "Narwee", "Beverly Hills", "Kingsgrove", "Bexely North", "Bardwell Park", "Turrella", "Sydenham", "St Peters", "Erskineville", "Redfern", "Central", "Town Hall", "Wynyard", "Circular Quay", "St James", "Museum"]
};
lineNames = ["line1", "line2", "line3", "line4","line5","line6","line7", "line8"];
lineTransfers = {
  line1: ["Blacktown", "Seven Hills", "Toongabbie", "Pendle Hill", "Wentworthville", "Westmead", "Parramatta", "Harris Park", "Clyde", "Lidcombe", "Strathfield", "Burwood", "Redfern", "Central", "Town Hall", "Wynyard"],
  line2: ["Leppington", "Edmondson Park", "Glenfield", "Casula", "Liverpool", "Warwick Farm", "Cabramatta", "Canley Vale", "Fairfield", "Yennora", "Guildford", "Merrylands", "Clyde", "Lidcombe", "Strathfield", "Burwood", "Redfern", "Central", "Town Hall", "Wynyard", "Circular Quay", "St James", "Museum"],
  line3: ["Liverpool", "Cabramatta", "Sydenham", "St Peters", "Redfern", "Central", "Town Hall", "Wynyard", "Circular Quay", "St James", "Museum"],
  line4: ["Sydenham", "Redfern", "Central", "Town Hall"],
  line5: ["Blacktown", "Seven Hills", "Toongabbie", "Pendle Hill", "Wentworthville", "Westmead", "Parramatta", "Harris Park", "Merrylands", "Guildford", "Yennora", "Fairfield", "Canley Vale", "Cabramatta", "Warwick Farm", "Liverpool", "Casula", "Glenfield", "Edmondson Park", "Leppington"],
  line6: ["Clyde"],
  line7: ["Lidcombe"],
  line8: ["Glenfield" , "Sydenham", "Refern", "Central", "Town Hall", "Wynyard", "Circular Quay", "St James", "Museum"]
}
let finalStop = "";
let totalStops = 0;
let stopsToStopAt = "";
let currentStop = "";
let testing = false;
let shortLength = 0;
let transferStation = "";
let transferStationMulti = ["not changed", "not changed 2"];
let testingReversed = false;
let lineCounter = 0;
let stationCounter1 = 0;
let stationCounter2 = 0;
let middleLine = "";
let middleLineEnd = "";
const planTrip = function (lineFrom, stopFrom, lineTo, stopTo) {
  finalStop = stopTo;
  totalStops = 0;
  stopsToStopAt = "";
  currentStop = "";
  if (lineFrom === lineTo) {
    singleLine(lineFrom, stopFrom, stopTo);
  }
  else if (lineFrom === "line3" && lineTo === "line6" || lineFrom === "line4" && lineTo === "line5" || lineFrom === "line4" && lineTo === "line6" || lineFrom === "line4" && lineTo === "line7" || lineFrom === "line5" && lineTo === "line4" || lineFrom === "line5" && lineTo === "line6" || lineFrom === "line5" && lineTo === "line7" || lineFrom === "line6" && lineTo === "line3" || lineFrom === "line6" && lineTo === "line4" || lineFrom === "line6" && lineTo === "line5" || lineFrom === "line6" && lineTo === "line7" || lineFrom === "line6" && lineTo === "line8" || lineFrom === "line7" && lineTo === "line4" || lineFrom === "line7" && lineTo === "line5" || lineFrom === "7" && lineTo === "line6" || lineFrom === "line7" && lineTo === "line8" || lineFrom === "line8" && lineTo === "line6" || lineFrom === "line8" && lineTo === "line7") {
    shortestLine2(lineFrom, stopFrom, lineTo, stopTo);
    singleLine(lineFrom, stopFrom, transferStationMulti[0]);
    console.log(`Change at ${transferStationMulti[0]} to line ${middleLineEnd.slice(4)}.`);
    singleLine(middleLineEnd, transferStationMulti[0], transferStationMulti[1]);
    console.log(`Change at ${transferStationMulti[1]} to line ${lineTo.slice(4)}.`)
    singleLine(lineTo, transferStationMulti[1], stopTo);
  }
  else {
  shortestLine(lineFrom, stopFrom, lineTo, stopTo);
  singleLine(lineFrom, stopFrom, transferStation);
  console.log(`Change at ${transferStation} to line ${lineTo.slice(4)}.`);
  singleLine(lineTo, transferStation, stopTo);
  }
};
const shortestLine = function(lineFrom, stopFrom, lineTo, stopTo) {
  shortLength = 999;
  transferStation = "";
  for (let i = 0; i < allLines[lineFrom].length; i++) {
    for (let j = 0; j < allLines[lineTo].length; j++) {
      if (allLines[lineFrom][i] === allLines[lineTo][j] ) {
        testing = true;
        singleLine(lineFrom, stopFrom, allLines[lineFrom][i]);
        singleLine(lineTo, allLines[lineTo][j], stopTo);
        if (totalStops < shortLength) {
          shortLength = totalStops;
          transferStation = allLines[lineFrom][i];
        }
        totalStops = 0;
      }
    }
  }
  testing = false;
};
const shortestLine2 = function(lineFrom, stopFrom, lineTo, stopTo) {
  shortLength = 999;
  middleLine = lineNames[lineCounter];
  for (let i = 0; i < lineTransfers[lineFrom].length; i++) {
    for (let j = 0; j < lineNames.length; j++) {
      for (let k = 0; k < lineTransfers[middleLine].length; k++) {
        for (let l = 0; l < lineTransfers[middleLine].length; l++) {
          for (let m = 0; m < lineTransfers[lineTo].length; m++) {
            if (lineTransfers[lineFrom][i] === lineTransfers[middleLine][k] && lineTransfers[middleLine][l] == lineTransfers[lineTo][m]) {
              testing = true;
              singleLine(lineFrom, stopFrom, lineTransfers[lineFrom][i]);
              singleLine(middleLine, lineTransfers[middleLine][k],lineTransfers[middleLine][l]);
              singleLine(lineTo, lineTransfers[middleLine][l], stopTo);
              if (totalStops < shortLength) {
                shortLength = totalStops;
                transferStationMulti[0] = lineTransfers[lineFrom][i];
                transferStationMulti[1] = lineTransfers[middleLine][l];
                middleLineEnd = middleLine;
              }
              totalStops = 0;
            }
          }
        }
      }
      middleLine = lineNames[j];
    }
  }
  testing = false;
};
const singleLine = function(lineName, stopFrom, stopTo) {
  line = allLines[lineName];
  stopsToStopAt = "";
  if (line.indexOf(stopFrom) > line.indexOf(stopTo)) {
    allLines[lineName].reverse();
    testingReversed = true;
  }
  startStation = line.indexOf(stopFrom)+1;
  endStation = line.indexOf(stopTo);
  while (startStation <= endStation) {
    stopsToStopAt += line[startStation]+", ";
    startStation += 1;
    totalStops += 1;
  }
  currentStop = line[startStation-1];
  if (testingReversed) {
    allLines[lineName].reverse();
    testingReversed = false;
  }
  if (!testing) {
    console.log(`You must travel through the following stops on line ${lineName.slice(4)}: ${stopsToStopAt.slice(0,-2)}.`);
  }
  if (finalStop === currentStop && !testing) {
    finish();
  }
};
const finish = function() {
  console.log(`Total stops: ${totalStops}`)
};
