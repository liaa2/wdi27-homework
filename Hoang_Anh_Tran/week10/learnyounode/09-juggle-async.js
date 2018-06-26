var http = require('http');

// start from the 3rd element of the array
var urls = process.argv.slice(2);
// urls.shift();
// urls.shift();

console.log(urls);

var urlResponseData = [];
var completed = 0;


urls.forEach((url, i) => {
  // console.log(url);

  urlResponseData[i] = '';

  http.get(url, response => {
    response.setEncoding('utf8');

    response.on('data', data => {
      // console.log(data);
      urlResponseData[i] += data;

    }); // data event callback

    response.on('end', () => {
      completed++;

      if(completed >= 3){
        console.log(urlResponseData.join('\n'));
      }
      // console.log(urlResponseData[i]);
    });

  }); //end http.get callback

});



var http = require('http');

var urls = process.argv.slice(2);

// urls.shift();
// urls.shift();
// console.log(urls);

// var url1 = '';
// var url1 = '';
// var url1 = '';

var urlResponseData = [];

var completed = 0;
// we can even pass whole array
urls.forEach( (url, i) => {
  // console.log(url);
  urlResponseData[ i ] = '';
  http.get(url, response => {
    response.setEncoding('utf8');

    response.on('data', data => {
      // console.log(data);
      urlResponseData[ i ] += data;
    }); // data even callback
    response.on('end', () => {
      completed++;
      if(completed >=3){
        console.log(urlResponseData.join('\n'));
      }
      // console.log(urlResponseData[ i ]);
    });
  });// end http.get callback
});


Add CommentCollapse 
