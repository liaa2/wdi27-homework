
let $body;
let hueCounter=0;

let lastMouseX = 0;
let lastMouseY = 0;


const randRange = function (max) {
  return parseInt (Math.random() * max);
};

const createBlob = function(x,y, size=100) {
  const $blob = $('<div class="blob"></div>');

  // const r = randRange(255);
  // const g = randRange(255);
  // const b = randRange(255);
  // const colour = `rgb(${r},${g},${b})`;
  const h = hueCounter;
  const s = '100%';
  const l = '50%';
  const colour = `hsl(${h},${s},${l})`;

  // hueCounter +=0.5;
  // if(hueCounter>255){
  //   hueCounter = 0;
  // }
  //  ******** instead of above if code  **********
  hueCounter = (hueCounter +1) % 255;

  size = 10 + randRange(100);

  // calculated size based on velocity
  // const velocityX = x - lastMouseX;
  // const velocityY = y - lastMouseY;
  //
  // console.log(velocityX, velocityY);
  // velocityX = x;
  // velocityY = y;



  $blob.css({
    backgroundColor: colour,
    width: size + 'px',
    height: size + 'px',
    top: (y - size/2) + 'px',
    left : (x - size/2) + 'px'
  });
  return $blob;
};

$(document).ready(function(){
  $body = $('body');
  console.log('body: ', $body.length);
  $(document).on('mousemove',function(event){
    console.log('click!',event.pageX,event.pageY);
    const $newBlob = createBlob(event.pageX,event.pageY, 50);
    $body.append($newBlob);

    if(Math.random() > 0.5){
      $newBlob.animate({
        top: '-200px'
      }, 1000 + randRange(3000), function(){
        $(this).remove();
      });
    } else {
      $newBlob.animate({
        top: (window.innerHeight + 300) + 'px',
      }, 1000 + randRange(3000), function(){
        $(this).remove();
      });
    }


  })
});
