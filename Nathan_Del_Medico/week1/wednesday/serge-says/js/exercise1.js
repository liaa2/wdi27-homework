//Serge says
const sergeSays = function(string) {
  if (string[string.length-1] === "?") {
    console.log("Sure");
  }

  else if (!string) {
    console.log("Fine. Be that way!");
  }
  else if (string.toUpperCase() === string) {
    console.log("Woah, chill out!");
  }
  else {
    console.log("Whatever.");
  }

};

