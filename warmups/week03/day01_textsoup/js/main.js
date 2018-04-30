$(document).ready(function() {

  // store the div with id words into a variable
  // .text() to refer to the text inside of the div
  // .split() to split each word into an array of strings
  // (/[ ;\-,.\n]+/) regular expression which looks for spaces, punctuation and newlines
  // const words = $('#words').text().split(/[ ;\-,.\n]+/);
  const words = $('#words').text().split(/[ ;\-,.\n]+/);

  // store the body in a variable to use later when appending
  const $body = $('body');

  // helper function to return a number between 0 and max,
  const random = function(max) {
    return Math.floor(Math.random() * max)
  };

  // main function to put the random words on the page
  const putWord = function() {
    // Get a random word from our array, using our random helper funcion, with the word array length as the maximum value
    const randomIndex = random(words.length);

    // select random word
    const text = words[randomIndex];

    // Insert the random word as the content of a new div
    const $div = $("<div class='word'>").html(text);

    $div.css({
      top: random(window.innerHeight) + 'px',
      left: random(window.innerWidth) + 'px',
      fontSize: ((40) + random(80)) + 'px'
    });

    // apppend the new $div to the body
    $div.appendTo($body);

    // make the text fade in and fade out of the screen
    $div.fadeIn(1000).fadeOut(2000, function() {
      $(this).remove()
    });

  };// putWord() function
  setInterval(putWord, 100)

}); // $(document).ready
