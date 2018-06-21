// function, a result from prev module.js
var myDirListing = require('./exercise6');

myDirListing(process.argv[2], process.argv[3], function(error, data){
  if(error) {
    console.error(error);
    return;
  }
  data.forEach( el => console.log(el) );

});
