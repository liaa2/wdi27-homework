const allLines = {
  line1: ["Emu Plains", "Penrith", "Kingswood", "Werrington", "St Marys", "Mount Druitt", "Rooty Hill", "Doonside", "Blacktown", "Seven Hills", "Toongabbie", "Pendle Hill", "Wentworthville", "Westmead", "Parramatta", "Clyde", "Lidcombe", "Strathfield", "Burwood", "Redfern", "Central", "Town Hall", "Wynyard", "Milsons Point", "North Sydney", "Waverton", "Wollstonecraft", "St Leonards", "Artarmon", "Chatswood", "Roseville", "Lindfield", "Killara", "Gordon", "Pymble", "Turramurra", "Warrawee", "Wahroonga", "Waitara", "Hornsby", "Asquith", "Mount Colah", "Mount Kuring-gai", "Berowra"],
  line2: ["Leppington", "Edmondson Park", "Glenfield", "Casula", "Liverpool", "Warwick Farm", "Cabramatta", "Canley Vale", "Fairfield", "Yennora", "Guildford", "Merrylands", "Granvile", "Clyde", "Auburn", "Lidcombe", "Flemington", "Homebush", "Strathfield", "Burwood", "Croydon", "Ashfield", "Summer Hill", "Lewisham", "Petersham", "Stanmore", "Newtown", "MacdonaldTown", "Redfern", "Central", "Town Hall", "Wynyard", "Circular Quay", "St James", "Museum"],
  line3: ["Liverpool", "Warwick Farm", "Cabramatta", "Carramar", "Villawood", "Leightonfield", "Chester Hill", "Sefton", "Birrong", "Yagoona", "Bankstown", "Punchbowl", "Wiley Park", "Lakemba", "Belmore", "Campsie", "Caterbury", "Hurlstone Park", "Dulwich Hill", "Marrickville", "Sydenham", "St Peters", "Erskineville", "Redfern", "Central", "Town Hall", "Wynyard", "Circuar Quay", "St James", "Museum"],
  line4: ["Helensburgh", "Waterfall", "Heathcote", "Engadine", "Loftus", "Sutherland", "Jannali", "Como", "Oatley", "Mortdale", "Penshurst", "Hurstville", "Allawah", "Carlton", "Kogarah", "Rockdale", "Banksia", "Arncliffe", "Wolli Creek", "Tempe", "Sydenham", "Redfern", "Central", "Town Hall", "Martin Place", "Kings Cross", "Edgecliff", "Bondi Junction"],
  line8: ["Macarthur", "Campbelltown", "Leaumeah", "Minto", "Ingleburn", "Macquarie Fields", "Glenfield", "Holsworthy", "East Hills", "Panania", "Revesby", "Padstow", "Riverwood", "Narwee", "Beverly Hills", "Kingsgrove", "Bexely North", "Bardwell Park", "Turrella", "Sydenham", "St Peters", "Erskineville", "Redfern", "Central", "Town Hall", "Wynyard", "Circular Quay", "St James", "Museum"]
};
let finalStop = "";
let totalStops = 0;
let stopsToStopAt = "";
let currentStop = "";
let testing = false;
let shortLength = 0;
let transferStation = "";
let testingReversed = false;
const planTrip = function (lineFrom, stopFrom, lineTo, stopTo) {
  finalStop = stopTo;
  totalStops = 0;
  stopsToStopAt = "";
  currentStop = "";
  if (lineFrom === lineTo) {
    singleLine(lineFrom, stopFrom, stopTo);
  } else {
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
    console.log(`You must travel through the following stops on the ${lineName.slice(4)} line: ${stopsToStopAt.slice(0,-2)}.`);
  }
  if (finalStop === currentStop && !testing) {
    finish();
  }
};
const finish = function() {
  console.log(`Total stops: ${totalStops}`)
};
