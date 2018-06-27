// console.log("HELLO WORLD")
// console.log(process.argv);

var myfile = process.argv[2];
var fs = require('fs');
var readFile = fs.readFileSync(myfile);
var fileAsString = readFile.toString();
var newlines = fileAsString.split('\n').length -1;
console.log(newlines);
