// node program.js /home/duck jpeg

// /home/duck
// var myfolder = process.argv[2];
// // jpeg
// var filter = process.argv[3];

var fs = require('fs');
module.exports = fs.readdir(myfolder, duckFiltered);

// var duckFiltered = function(err,list){
//   for (var i = 0; i < list.length; i++) {
//     if (list[i].match(`.${filter}`)) {
//       console.log(list[i]);
//     }
//
//   }
// }

// fs.readdir(myfolder, duckFiltered);

// fs.readdir(myfolder, function(err, list){
//
// })
