let types = ["one","two","three","four","five","eight","ten"];
let points = {
  one: [1,"a","e","i","o","u","l","n","r","s","t"],
  two: [2,"d","g"],
  three: [3,"b","c","m","p"],
  four: [4,"f","h","v","w","y"],
  five: [5,"k"],
  eight: [8,"j","x"],
  ten: [10,"q","z"]
};
scrabble = function (word) {
  word = word.toLowerCase();
  let score = 0;
  for (var i = 0; i < word.length; i++) {
    const letter = word[i];
    for (var j = 0; j < types.length; j++) {
      for (var k = 0; k < points[types[j]].length; k++) {
        if (letter === points[types[j]][k]) {
          score += points[types[j]][0];
        }
      }
    }
  }
  return `Total score: ${score}`;
}
