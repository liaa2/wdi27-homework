const allLines = {
  line1: ["Emu Plains", "Penrith", "Kingswood", "Werrington", "St Marys", "Mount Druitt", "Rooty Hill", "Doonside", "Blacktown", "Seven Hills", "Toongabbie", "Pendle Hill", "Wentworthville", "Westmead", "Parramatta", "Harris Park", "Clyde", "Lidcombe", "Strathfield", "Burwood", "Redfern", "Central", "Town Hall", "Wynyard", "Milsons Point", "North Sydney", "Waverton", "Wollstonecraft", "St Leonards", "Artarmon", "Chatswood", "Roseville", "Lindfield", "Killara", "Gordon", "Pymble", "Turramurra", "Warrawee", "Wahroonga", "Waitara", "Hornsby", "Asquith", "Mount Colah", "Mount Kuring-gai", "Berowra"],
  line1a: ["Epping", "Eastwood", "Denistone", "West Ryde", "Meadowbank", "Rhodes", "Concord West", "North Strathfield", "Strathfield"],
  line1b: ["Hornsby", "Normanhurst", "Thornleigh", "Pennant Hills", "Beecroft", "Cheltenham", "Epping", "Macquarie University", "Macquarie Park", "North Ryde", "Chatswood"],
  line2: ["Leppington", "Edmondson Park", "Glenfield", "Casula", "Liverpool", "Warwick Farm", "Cabramatta", "Canley Vale", "Fairfield", "Yennora", "Guildford", "Merrylands", "Granvile", "Clyde", "Auburn", "Lidcombe", "Flemington", "Homebush", "Strathfield", "Burwood", "Croydon", "Ashfield", "Summer Hill", "Lewisham", "Petersham", "Stanmore", "Newtown", "MacdonaldTown", "Redfern", "Central", "Town Hall", "Wynyard", "Circular Quay", "St James", "Museum"],
  line3: ["Liverpool", "Warwick Farm", "Cabramatta", "Carramar", "Villawood", "Leightonfield", "Chester Hill", "Sefton", "Birrong", "Yagoona", "Bankstown", "Punchbowl", "Wiley Park", "Lakemba", "Belmore", "Campsie", "Caterbury", "Hurlstone Park", "Dulwich Hill", "Marrickville", "Sydenham", "St Peters", "Erskineville", "Redfern", "Central", "Town Hall", "Wynyard", "Circuar Quay", "St James", "Museum"],
  line4: ["Helensburgh", "Waterfall", "Heathcote", "Engadine", "Loftus", "Sutherland", "Jannali", "Como", "Oatley", "Mortdale", "Penshurst", "Hurstville", "Allawah", "Carlton", "Kogarah", "Rockdale", "Banksia", "Arncliffe", "Wolli Creek", "Tempe", "Sydenham", "Redfern", "Central", "Town Hall", "Martin Place", "Kings Cross", "Edgecliff", "Bondi Junction"],
  line5: ["Richmond", "East Richmond", "Clarendon", "Windsor", "Mulgrave", "Vineyard", "Riverstone", "Schofields", "Quakers Hill", "Marayong", "Blacktown", "Seven Hills", "Toongabbie", "Pendle Hill", "Wentworthville", "Westmead", "Parramatta", "Harris Park", "Merrylands", "Guildford", "Yennora", "Fairfield", "Canley Vale", "Cabramatta", "Warwick Farm", "Liverpool", "Casula", "Glenfield", "Edmondson Park", "Leppington"],
  line6: ["Carlingford", "Telopea", "Dundas", "Rydalmere", "Camellia", "Rosehill", "Clyde"],
  line7: ["Olympic Park", "Lidcombe"],
  line8: ["Macarthur", "Campbelltown", "Leaumeah", "Minto", "Ingleburn", "Macquarie Fields", "Glenfield", "Holsworthy", "East Hills", "Panania", "Revesby", "Padstow", "Riverwood", "Narwee", "Beverly Hills", "Kingsgrove", "Bexely North", "Bardwell Park", "Turrella", "Sydenham", "St Peters", "Erskineville", "Redfern", "Central", "Town Hall", "Wynyard", "Circular Quay", "St James", "Museum"]
};
const lineNames = ["line1", "line1a", "line1b", "line2", "line3", "line4", "line5", "line6", "line7", "line8"];
const lineTransfers = {
  line1: ["Blacktown", "Seven Hills", "Toongabbie", "Pendle Hill", "Wentworthville", "Westmead", "Parramatta", "Harris Park", "Clyde", "Lidcombe", "Strathfield", "Burwood", "Redfern", "Central", "Town Hall", "Wynyard", "Chatswood","Hornsby"],
  line1a: ["Epping", "Strathfield"],
  line1b: ["Hornsby", "Epping", "Chatswood"],
  line2: ["Leppington", "Edmondson Park", "Glenfield", "Casula", "Liverpool", "Warwick Farm", "Cabramatta", "Canley Vale", "Fairfield", "Yennora", "Guildford", "Merrylands", "Clyde", "Lidcombe", "Strathfield", "Burwood", "Redfern", "Central", "Town Hall", "Wynyard", "Circular Quay", "St James", "Museum"],
  line3: ["Liverpool", "Cabramatta", "Sydenham", "St Peters", "Redfern", "Central", "Town Hall", "Wynyard", "Circular Quay", "St James", "Museum"],
  line4: ["Sydenham", "Redfern", "Central", "Town Hall"],
  line5: ["Blacktown", "Seven Hills", "Toongabbie", "Pendle Hill", "Wentworthville", "Westmead", "Parramatta", "Harris Park", "Merrylands", "Guildford", "Yennora", "Fairfield", "Canley Vale", "Cabramatta", "Warwick Farm", "Liverpool", "Casula", "Glenfield", "Edmondson Park", "Leppington"],
  line6: ["Clyde"],
  line7: ["Lidcombe"],
  line8: ["Glenfield" , "Sydenham", "Redfern", "Central", "Town Hall", "Wynyard", "Circular Quay", "St James", "Museum"]
}
let totalStops = 0;
let finalStop = "";
let stopsToStopAt = "";
let testing = false;
let shortLength = 0;
let shortLength2 = 0;
let transferStation = "";
let transferStationMulti = ["", ""];
let middleLine = "";
let middleLineEnd = "";
const planTrip = function (lineFrom, stopFrom, lineTo, stopTo) {
  totalStops = 0;
  stopsToStopAt = "";
  finalStop = stopTo;
  if (lineFrom === lineTo) {
    singleLine(lineFrom, stopFrom, stopTo);
  } else {
    testing = true;
    shortestLine(lineFrom, stopFrom, lineTo, stopTo);
    shortestLine2(lineFrom, stopFrom, lineTo, stopTo);
    testing = false;
    if (shortLength <= shortLength2) {
      singleLine(lineFrom, stopFrom, transferStation);
      console.log(`Change at ${transferStation} to line ${lineTo.slice(4)}.`);
      singleLine(lineTo, transferStation, stopTo);
    } else {
      singleLine(lineFrom, stopFrom, transferStationMulti[0]);
      console.log(`Change at ${transferStationMulti[0]} to line ${middleLineEnd.slice(4)}.`);
      singleLine(middleLineEnd, transferStationMulti[0], transferStationMulti[1]);
      console.log(`Change at ${transferStationMulti[1]} to line ${lineTo.slice(4)}.`)
      singleLine(lineTo, transferStationMulti[1], stopTo);
    }
  }
};
const shortestLine = function(lineFrom, stopFrom, lineTo, stopTo) {
  shortLength = 999;
  for (let i = 0; i < allLines[lineFrom].length; i++) {
    for (let j = 0; j < allLines[lineTo].length; j++) {
      if (allLines[lineFrom][i] === allLines[lineTo][j] ) {
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
};
const shortestLine2 = function(lineFrom, stopFrom, lineTo, stopTo) {
  shortLength2 = 999;
  //let counter = 0;
  for (let i = 0; i < lineTransfers[lineFrom].length; i++) {
    for (let j = 0; j < lineNames.length; j++) {
      middleLine = lineNames[j];
      for (let k = 0; k < lineTransfers[middleLine].length; k++) {
        for (let l = 0; l < lineTransfers[middleLine].length; l++) {
          for (let m = 0; m < lineTransfers[lineTo].length; m++) {
            //counter = counter + 1;
            if (lineTransfers[lineFrom][i] === lineTransfers[middleLine][k] && lineTransfers[middleLine][l] == lineTransfers[lineTo][m]) {
              singleLine(lineFrom, stopFrom, lineTransfers[lineFrom][i]);
              singleLine(middleLine, lineTransfers[middleLine][k],lineTransfers[middleLine][l]);
              singleLine(lineTo, lineTransfers[middleLine][l], stopTo);
              //console.log(lineTransfers[lineFrom][i],lineTransfers[middleLine][k], totalStops)
              if (totalStops < shortLength2) {
                shortLength2 = totalStops;
                transferStationMulti[0] = lineTransfers[lineFrom][i];
                transferStationMulti[1] = lineTransfers[middleLine][l];
                middleLineEnd = middleLine;
              }
              totalStops = 0;
            }
          }
        }
      }
    }
  }
  //console.log(counter);
};
const singleLine = function(lineName, stopFrom, stopTo) {
  let reversed = false;
  const line = allLines[lineName];
  stopsToStopAt = "";
  if (line.indexOf(stopFrom) > line.indexOf(stopTo)) {
    allLines[lineName].reverse();
  }
  let startStation = line.indexOf(stopFrom)+1;
  const endStation = line.indexOf(stopTo);
  while (startStation <= endStation) {
    stopsToStopAt += line[startStation]+", ";
    startStation += 1;
    totalStops ++;
  }
  if (!testing) {
    console.log(`Stops on line ${lineName.slice(4)}: ${stopsToStopAt.slice(0,-2)}.`);
  }
  if (finalStop === line[startStation-1] && !testing) {
    finish();
  }
};
const finish = function() {
  console.log(`Total stops: ${totalStops}`)
};
