colours = ["red","yellow","orange","blue","green"];
let leftPixel = 0;
let direction = 1;
// let counter = 0;

$(document).ready(function() {
  const $body = $('body');
  let totalSquares = 0;
  makeSquares = function (height, width) {
    width = Math.ceil(width/100);
    height = Math.ceil(height/100);
    console.log(height, width);
    totalSquares = width*height;
    for (var i = 0; i <= totalSquares; i++) {
      const $square = $('<div class="bg"></div>');
      $body.append($square);
    }
  }
  makeSquares($(window).height(), $(window).width());
  catWalk = function () {
    $cat.css({left: leftPixel+"px"});
    for (var i = 0; i < totalSquares; i++) {
      let counter = Math.floor(Math.random()*5);
      $bg.eq(i).css({backgroundColor: colours[counter]});
      // counter += 1;
      // if (counter === 4) {
      //   counter = 0;
      // }
    }
    if (direction === 1) {
      leftPixel += 1;
    } else {
      leftPixel -= 1;
    }
    if (leftPixel === window.innerWidth-296) {
      direction = 0;
      $cat.css({transform: "scaleX(-1)"});
    }
    else if (leftPixel === 0) {
      direction = 1;
      $cat.css({transform: "scaleX(1)"});
    }
    else if (leftPixel === 600) {
      $dancingCat.css({visibility: "visible"});
      $cat.css({visibility: "hidden"});
      window.setTimeout(pauseCat, 2000);
    }
  };
  danceCat = function() {
    topPx = Math.random()*600;
    leftPx = Math.random()*1000;
    $dancingCat.css({top: topPx+"px", left: leftPx+"px"});
  };
  pauseCat = function () {
    $cat.css({visibility: "visible", left: "600px"});
    $dancingCat.css({visibility: "hidden"});
    leftPixel = 600;
  };
  const $cat = $('#cat');
  $cat.css({top: "0px", left: "0px"});
  const $dancingCat = $('#dancingCat');
  dancingCat.style.position = "absolute";
  dancingCat.style.left = "600px";
  dancingCat.style.visibility = "hidden";
  $dancingCat.css({position: "absolute", left: "600px", visibility: "hidden"});
  const $bg = $('div');
  window.setInterval(catWalk, 1);
  window.setInterval(danceCat, 70);
});
