$(document).ready(function() {
  let counter = 0;

// This object will store all the variables we want the GUI controls to change;
// we need to use an object structure because that is what the dat.gui library expects
  let controller = {
    fadeInSpeed: 100,
    fadeOutSpeed: 200,
    fontSizeRange: 100,
    textColor: '#eb1313',
    addWord: '',  // This is a string, so the GUI will show a text field

    // a  method like this will cause a GUI button to be shown, which calls this function when clicked
    clearWords: function(){
      $('.word').remove(); // Just remove all elements with class="word"
    }
  }

  // create our GUI object
  const gui = new dat.GUI();

  // Add the various controller elements
  // Note that we pass our controls object as a variable, but the internal properties (variables) as a string.
  // We also need to specify a min and max range for the slider
  gui.add(controller, 'fadeInSpeed', 1, 5000);
  gui.add(controller, 'fadeOutSpeed', 1, 5000);
  gui.add(controller, 'fontSizeRange', 1, 300);
  // Note the different method name for the colour picker element
  gui.addColor(controller, 'textColor');

  // Note that the gui.add() method to show a text field or a button is the same as for
  // a number, except that there's no range values specified
  gui.add(controller, 'addWord');
  gui.add(controller, 'clearWords');

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
    // const text = words[randomIndex];
    var text = '';

    // 1. We want to check whether a word has been typed at all, so check the length; and also:
    // 2. To make sure we insert the word in between our random words, we'll use an incrementing
    // counter value, and check whether the number is even by using the modulus operator.
    // (Better remember to increment that counter at the end of this function!)
    if ( (controller.addWord.length > 0) && (counter % 2 == 0) ){
      text = controller.addWord;
    } else {
      text = words[randomIndex];
    }

    // Insert the random word as the content of a new div
    const $div = $("<div class='word'>").html(text);

    $div.css({
      top: random(window.innerHeight) + 'px',
      left: random(window.innerWidth) + 'px',
      // Use the new value from our controls object, changed by the GUI slider
      fontSize: (10 + controller.fontSizeRange) + 'px',
      // Use the new value from our controls object
      color: controller.textColor
    });

    // apppend the new $div to the body
    $div.appendTo($body);

    // Note that we use our new GUI-modified timing values from our controls object
    $div.fadeIn(controller.fadeInSpeed).fadeOut(controller.fadeOutSpeed, function() {
      $(this).remove()
    });

    // Need to increment our counter at the end of every call to putWord()
    counter++;

  };// putWord() function
  setInterval(putWord, 100)

}); // $(document).ready
