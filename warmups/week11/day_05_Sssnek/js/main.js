var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");

// To prevent polluting the namespace, I have a massive function called app which holds all the values tied to the game.
var app = {};
app.score = 0;

app.food = {
  location: {},
  // Random food placement
  create: function(){
    this.location.x = parseInt( Math.random() * 290 );
    this.location.y = parseInt( Math.random() * 290 );
    // Renders the newly created food
    app.movement.render( this.location, "red" );
  }
}; // End food

app.snake = {
  body: {
    direction: "up",
    size: 10,
    segments: [{ x: 150, y: 150 },{ x: 150, y: 160 },{ x: 150, y: 170 }],
    alive: true,
    color: 120
  },

  partyMode: false,

  // Grows the snake by cloning the leading cell (its current head) and predicting placement ahead of that cell. It then places this new cell in the segments array.
  grow: function(){
    // Objects are tied to one another, making clones difficult. A hacky fix is to make the object a string, then save the string by converting it back to an object.
    // JSON.stringify: {"x":20,"y":0}
    // JSON.parse(..): {x: 20, y: 0}
    // var head = JSON.parse(JSON.stringify( app.snake.body.segments[0] ));
    var head = Object.assign({}, app.snake.body.segments[0])
    // var head = app.snake.body.segments[0]
    app.snake.body.segments.unshift( app.movement.directionStep( head ) );
  }
}; // End snake

app.movement = {
  // Prevents multiple inputs between frames, which can unexpectedly kill you.
  allowDirectionChange: true,

  // Responsible for movement of the snake based on its current direction
  directionStep: function( segment ){
    if( app.snake.body.direction === "up" ){
      segment.y -= 10;
    } else if ( app.snake.body.direction === "down" ){
      segment.y += 10;
    } else if ( app.snake.body.direction === "left" ){
      segment.x -= 10;
    } else {
      segment.x += 10;
    }
    return segment;
  },

  // Responsible solely for rendering any 'cell' given to it.
  render: function( segment, color ){
      context.fillStyle = color;
      // Works the same as fillrect, but only draws a stroke path -- no fill
      context.fillRect( segment.x, segment.y, app.snake.body.size, app.snake.body.size );
      context.fillStyle = "rgba(0, 0, 0, 0.1)";
      context.strokeRect( segment.x, segment.y, app.snake.body.size, app.snake.body.size );
  },

  // Used to detect collision between any cells. 9 is the pixel size -1 (otherwise the snake collides with itself as it moves)
  intersection: function( head, item ) {
    return !(item.x > head.x + 9 ||
             item.x + 9 < head.x ||
             item.y > head.y + 9 ||
             item.y + 9 < head.y);
  },

  checkBounds: function(){
    // Define which segment is the snake's head -- the first item in the array
    var head = app.snake.body.segments[0];

    // Bounds of canvas detection
    if( head.x < 0 || head.x > 290 || head.y < 0 || head.y > 290 ){
      app.snake.body.alive = false;
      return;
    }

    // Collision for snake head and any segments
    for( var i = 1; i < app.snake.body.segments.length; i++ ){
      if( this.intersection( head, app.snake.body.segments[i] ) ){
        app.snake.body.alive = false;
        return;
      }
    }

    // Collision detection for food/head of snake
    if( this.intersection( head, app.food.location ) ){
      app.score ++;
      app.snake.grow();
      app.food.create();
    }
  },

  // Responsible for most of the animation frames. it:
    // Clears the canvas with clearRect
    // Finds the food object and places it with the render method
    // Extends the snake, and removes the last block on its tail (this is how it moves)
    // Renders each segment of the snake
    // Draws the score
    // Allows the user to change the snake direction again
  step: function(){
    context.clearRect( 0, 0, 300, 300 );
    app.movement.render( app.food.location, "red" );
    app.snake.grow();
    app.snake.body.segments.pop();
    app.snake.body.segments.forEach( function( segment ){
      var color =  "hsl( "+ app.snake.body.color +", 100%, 50%)";
      app.movement.render( segment, color );
      if( app.snake.partyMode ){
        app.snake.body.color += 30
      }
    });

    // Draw the score last so it is highest in the canvas (can't be covered by snake or food)
    context.fillStyle = "black";
    context.font = "15px arial"
    context.fillText( "Score: " + app.score, 20, 30 );

    // Prevent multiple inputs between frames -- saves some unwanted deaths
    app.movement.allowDirectionChange = true;
  }
}; // End movement

// Sets all starting values to for the game -- also functions as a reset
app.init = function(){
  app.score = 0;
  clearInterval( app.counter );
  app.food.create();
  app.snake.body.alive = true;
  app.snake.body.segments = [{ x: 150, y: 150 },{ x: 150, y: 160 },{ x: 150, y: 170 }];
  app.startMovement();
};

// -------------------------------
// Responsible for beginning and ending timers (if the snake is dead)
app.startMovement = function(){
  app.counter = window.setInterval( function(){
    if( app.snake.body.alive ){
        app.movement.step();
        app.movement.checkBounds();
      } else {
      clearInterval( app.counter );
    }
  }, 150 );
};

// Works like document.ready
window.onload = function(){
  app.init();
  // Reset

  // Event listeners for buttons:
  // -------------------------------
  document.getElementById('reset').onclick = app.init;

  // Pause button
  document.getElementById('pause').onclick = function( e ){
    var btn = e.currentTarget;
    if( btn.innerText === "Pause" ){
      window.clearInterval( app.counter );
      btn.innerText = "Play";
    } else {
      app.startMovement();
      btn.innerText = "Pause";
    }
  };
  // Begin the party
  // Adds/removes the keyframe animation in the 'flash' class
  document.getElementById('party').onclick = function( e ){
    var btn = e.currentTarget;
    if( btn.innerText === "Party" ){
      canvas.classList.add('flash')
      // Tells the program whether to cycle the snake's colors
      app.snake.partyMode = true;
      btn.innerText = "Stop party";
    } else {
      canvas.classList.remove('flash')
      app.snake.partyMode = false;
      btn.innerText = "Party";
    }
  };
// -------------------------------
}; // End onload

window.onkeydown = function( e ){
  // e.key is case sensitive -- for this I don't care about case.
  var key = e.key.toLowerCase();
  // Because I am now detecting arrows keys, I have to disable the scroll effect tied to them (but not things like refresh -- so I listen for the 'arrow' keyword)
  if( key.includes("arrow") ){
    e.preventDefault();
  }

  var direction = app.snake.body.direction;
  if( ( key === "w" || key === "arrowup" ) && direction !== "down" ){
    app.snake.body.direction = "up";
    app.movement.allowDirectionChange = false;
  } else if ( ( key === "d" || key === "arrowright" ) && direction !== "left" ){
    app.snake.body.direction = "right";
    app.movement.allowDirectionChange = false;
  } else if ( ( key === "s" || key === "arrowdown" ) && direction !== "up" ){
    app.snake.body.direction = "down";
    app.movement.allowDirectionChange = false;
  } else if ( ( key === "a" || key === "arrowleft" ) && direction !== "right" ){
    app.snake.body.direction = "left";
    app.movement.allowDirectionChange = false;
  }
};
