

var fs = require('fs');
var path = require('path');


module.exports = function(folder_path, extension, callback) {

  var output = [];

  fs.readdir(folder_path, function (err, files) {
    
    if(err) {
      callback(err); // early return
      return;
    }

    files.forEach(function (file) {
      if (path.extname(file) === '.' + extension) {
        output.push(file);
      }
    }); // forEach
    callback(null, output);
  }); //readdir
  // console.log('return:', output); // return too early
  // callback(null, output); // no error, and return the list as the callback's 3nd arguement.
};
