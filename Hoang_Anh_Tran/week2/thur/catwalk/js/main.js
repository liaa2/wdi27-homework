let img = document.getElementsByTagName('img')[0];
let hotCat = document.getElementById('flyingcat');
let danceCat = document.getElementById('dance');
//

img.style.left = "0px";

let direction = "forward"; //checking direction cat going



//
const catWalk = function () {
  // if src is not the walking cat, set it to walking cat
  if ( img.src != "http://www.anniemation.com/clip_art/images/cat-walk.gif" ) {
    img.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
  }

  // if moving forward, make sure cat doesnt run away
  if (direction === "forward" ) {
    if (parseInt(img.style.left) > (screen.width - img.width)) {
      direction = "backward"; // tell cat to walk back
    }
    //for backwards
  } else if ( direction === "backward" ) {
    if (parseInt(img.style.left) < 0) {
      direction = "forward";
    } //end of if
  }

  let oldLeft = parseInt(img.style.left);

  //if cat reaches half the screen, do a dance.
  if ( parseInt(img.style.left) == 440 ) {
    img.src="file:///Users/anh/Downloads/Dancing-cat.gif";
  }
  //move cat backward or forward
  if (direction === "forward") {
    let newLeft = oldLeft + 110;
    img.style.left = newLeft + "px";
  } else if (direction === "backward") {
    let newLeft = oldLeft - 110;
    img.style.left = newLeft + "px";
  }

}; //end of function

let catwindow = window.setInterval(catWalk, 1000);

// Set hotCat position
hotCat.style.left = 0;
hotCat.style.top = '50%';


//set corner cat position
dance.style.right = "5px";
dance.style.top = '70%';





const flyingCat = function() {
    hotCat.src="img/flying-cat.gif";
};
const curiousCat = function() {
    hotCat.src="img/giphy.gif";
};



hotCat.addEventListener("mouseover", flyingCat);
hotCat.addEventListener("mouseout", curiousCat);
