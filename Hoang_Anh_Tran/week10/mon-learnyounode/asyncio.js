// console.log(process.argv);
// node program.js textfile.txt

// textfile.txt
var myfile = process.argv[2];

// fs means filesystem. :3

// load the filesystem module, like requiring in ruby.
var fs = require('fs');

// utf8 is a "string" encoding.
// Read myfile asynchronously
fs.readFile(myfile, 'utf8', function(err, data) {
  console.log( data.split('\n').length -1 );
});

// err = error which occur
// data = data from the function
// function(err, data) {
// }

// var duckcall(err,data) {
// console.log( data.split('\n').length -1 );
// }

// fs.readFile(myfile, 'utf8', duckcall);
