cat = document.getElementById('cat');
cat.style.top = "0px";
cat.style.left = "0px";
dancingCat = document.getElementById('dancingCat');
dancingCat.style.position = "absolute";
dancingCat.style.left = "600px";
dancingCat.style.visibility = "hidden";

let bg = document.getElementsByTagName('div');

colours = ["red","yellow","orange","blue","green"];
let leftPixel = 0;
let direction = 1;
let counter = 0;
catWalk = function () {
  cat.style.left = leftPixel+"px";
  for (var i = 0; i < 128; i++) {
    bg[i].style.backgroundColor = colours[counter];
    counter += 1;
    if (counter === 5) {
      counter = 0;
    }
  }
  if (direction === 1) {
    leftPixel += 1;
  } else {
    leftPixel -= 1;
  }
  if (leftPixel === window.innerWidth-296) {
    direction = 0;
    cat.style.transform = "scaleX(-1)";
  }
  else if (leftPixel === 0) {
    direction = 1;
    cat.style.transform = "scaleX(1)";
  }
  else if (leftPixel === 600) {
    cat.style.visibility = "hidden";
    dancingCat.style.visibility = "visible";
    for (var i = 0; i < 1000; i++) {
    }
    window.setTimeout(pauseCat, 2000);
  }
};
danceCat = function() {
  topPx = Math.random()*600;
  leftPx = Math.random()*1000;
  dancingCat.style.top = topPx+"px";
  dancingCat.style.left = leftPx+"px";
};
pauseCat = function () {
  cat.style.visibility = "visible";
  dancingCat.style.visibility = "hidden";
  cat.style.left = "600px";
  leftPixel = 600;
};
window.setInterval(catWalk, 1);
window.setInterval(danceCat, 70);
