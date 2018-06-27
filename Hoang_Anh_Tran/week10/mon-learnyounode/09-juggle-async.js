const http = require('http');
const bl = require('bl');
const count = 0;
const results = [];

const printRes = function() {
  for (let i = 0; i < 3; i++) {
    console.log(results[i]);
  }
}


for (let i = 0; i < 3; i++) {
  http.get(process.argv[2 + i], (response) => {
    response.pipe(bl(function(err,data) {
      results[count] = data.toString();
      count++;
      if (count===3){
        printRes();
      }

    }))
  });
};
