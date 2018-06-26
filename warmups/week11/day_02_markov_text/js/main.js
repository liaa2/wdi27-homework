/*
(1) Create a page in HTML and JS -
(2) Create a text file with a bunch of text
(3) Load the text file using AJAX - $(document) etc
  TO RUN SERVER: python -m SimpleHTTPServer
---
(4) build a markov table
  - Word as key, followed by an array of words which follow the 'key' word.
(5) Generate next text - choose a random starting word, and then choose the next word from the array, and then look up that word and find the next word from it's array .....

*/

let markov = {};
let beginnings = [];

const bookFilename = './markov.txt';

const buildMarkov = function(text) {
  // split huge string into array of individual words

  // split text on " "(spaces), ;, \n(new line), ""
  let words = text.split(/[ ;\-\n\"]+/);
  // console.log(words); #=> all words

  for (let i = 0; i < words.length - 1; i++) {
    let word = words[i];
    // console.log(markov[word]);

    if (!markov[word]) { //equivalent to if( typeof markov[word] == 'undefined')
      // console.log(markov[word]); # => 3663 warmup.js:16 undefined

      markov[word] = []; // The key's value must be initialised, otherwise .push won't work
    }

    let nextWord = words[i + 1] //get the word after this word from the array of words

    markov[word].push(nextWord); // add that following word to our array of following words for this word
    // console.log('markov[word]', markov[word]);
    // console.log('nextWord', nextWord);

    // keep track of suitable sentence-starting words, by checking that their first letter is uppercase
    if (word.match(/^[A-Z][a-z]/)) {
      // console.log(word); => not perfect but most words start with uppercase
      beginnings.push(word);
    }
  }; // for
  // for every word, we'll add the next word to an array where the first word is the key
  // console.log(markov);

}; // buildMarkov

// Helper function to return a random integer between 0 and max
const randy = function(max) {
  return Math.floor(Math.random() * max);
};

// Helper function to return a random element from the given array
const choose = function(arr) {
  // console.log('choose(arr):', arr[randy(arr.length)]);
  // choose(arr): the
  // choose(arr): to
  return arr[randy(arr.length)];
};

// Generate a new string from our Markov chain, of the specified length
// We can keep using the same Markov chain lookup we created to generate as much new text as we want, and it will all have the same statistical relation to the original text
const generate = function(length) {
  debugger;

  let next = choose(beginnings); // Choose a suitable start for our generated text
  // console.log('next:', next);
  // # => This, But, King

  let output = next;
  // output = "Coburg"

  for (let i = 0; i < length; i++) {
    // Choose a new word based on the current word
    let word = choose(markov[next]);
    // console.log('word:', word);
    // word = Square
    // next: Sherlock
    // word: Holmes,
    // word: laughing

    // Apppend to the new string we're building, including a space
    output += ' ' + word
    // output = "Coburg Square"

    // Set the word to use as the key for the next lookup
    next = word;
    // console.log('next:', next);
    // next: who
    // next: were

  }; //for

  return output;
}; // generate

$(document).ready(function() {
  // Load our text file over Ajax
  // NOTE: for this to work you will have to run a server on your laptop, i.e. by typing the command 'python -m SimpleHTTPServer' in this folder

  $.ajax(bookFilename).done(function(res) {
    // console.log(res);

    // When our text is loaded, pass it to our Markov-generating function()
    buildMarkov(res);

    // Having constructed our Markov chain lookup table, use it to generate some new text
    let newText = generate(60);

    let $el = $('<p>').text(newText);
    $('#output').append($el);
  }).fail(function(err) {
    console.log('error:', err);
  });

  // Listen to keypresses and generate new text when enter is pressed
  $(document).keypress(function(e) {
    // console.log(e);
    // If we want to generate new text only when Enter is pressed, we need to check the keyCode of the keypress event.
    // If we were just checking for an alphanumeric key, we could do: if( e.key === 'g' )etc.,
    if (e.keyCode === 13) {
      let newText = generate(60);

      let $el = $('<p>').text(newText);
      $('#output').append($el);
    }
  });

});
