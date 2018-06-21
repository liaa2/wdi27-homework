const http = require('http');

http.get(process.argv[2], (res) => {
  // console.log('response', res);

  let allData = '';
  res.setEncoding('utf8');

  res.on('data', data => {
    allData += data
  });

  // wait till the end to log out
  res.on('end', () => {
    console.log(allData.length);
    console.log(allData);
  });

  res.on('error', (err) => {
    console.log('ERR', err);
  });


});


// learnyounode solution:
// var http = require('http')
//     var bl = require('bl')
//
//     http.get(process.argv[2], function (response) {
//       response.pipe(bl(function (err, data) {
//         if (err) {
//           return console.error(err)
//         }
//         data = data.toString()
//         console.log(data.length)
//         console.log(data)
//       }))
//     })
