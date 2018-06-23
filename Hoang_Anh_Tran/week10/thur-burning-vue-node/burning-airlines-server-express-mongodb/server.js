const express = require('express');
const app = express();
// require('sequelize')

// to handle POST data
// body parser , post data in express server
const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use( cors() ); // set headers

const MongoClient = require('mongodb').MongoClient;
let db;

MongoClient.connect('mongodb://127.0.0.1:27017/ba', (err, client) => {
  if(err) return console.log(err);

  db = client.db('ba');

});

app.listen(3000, function(){
  console.log('Server is listening on port 3000. Ready to accept EGGS');
});

app.get('/', (req, res) => {
  console.log('Eggs have been received');
  res.send('<h1>Hello World, want to get some EGGS?</h1>');
});

app.use(express.static('public'));
// add query in URL
app.get('/dogs', (req, res) => {
  console.log('got eggs', req.query);
  // res.send(`<h1>Hello Doggo, want to get some EGGS?(roundness ${req.query.roundness})</h1>`)
  res.json({name: 'Rufus', roundness: 7.5});
});

app.get('/flights', (req, res) => {
  // Get all records, same as Flight.all
  db.collection('flights').find().toArray((err, results) => {
    console.log(results);
    res.json(results)
  });
}); // get /flights

app.get('/flights/:id', (req, res) => {
  // show page, get one record, same as Flight,find params[:id]
  db.collection('flights').findOne({ number: req.params.id}, (err, result) => {
    res.json(result);
  });

}); // flights/:id


app.get('/flights/search/:origin/:destination', (req, res) => {
  // console.log(req.params);

  // find all flights matching certain criteria,
  // same as Flight.where origin: params[:origin], destination: params[:destination]
  db.collection('flights')
  .find({origin: req.params.origin, destination: req.params.destination})
  .toArray((err, results) => {
    res.json(results);
  });

  // res.json(req.params);
});

app.post('/reservation', (req, res) => {
  console.log('POST request', req.body);

  // Update the reservations for a flight
  // no exact equivalent in ActiveRecord because the reservations are not stored
  // in a separate table( ie an association via a foreign key) - in mongoDB
  // the 'associated' data for this flight is stored in the record ('document') itself
  // as nested data in the object, ie an array of resevation objects inside the flights

  // Nearest equivalent might be Flight.find(id).reservations << {row: 10, col: 1}

  db.collection('flights').update(
    // record to modify
    {number: req.body.flight_number },
    // modifications to make:
    {
      $push: { // 2nd argument
        reservations: {
          row: req.body.row,
          col: req.body.col,
          passenger: {name: 'Ducktective', email: 'egg@here.com'}
        }
      },
    },
    // callback to run when the update is finished
    (err, result) => {
      res.json(result);
    },
  );

});
