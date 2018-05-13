var maxWidth = window.innerWidth-596;
var walkingCat = document.getElementById("imgCat");
walkingCat.style.left = "0px";

const catWalk = function(){
  const left = parseInt(walkingCat.style.left);
  //console.log(walkingCat.style.right);
  if(left <= maxWidth)
  {
    walkingCat.style.left = (left+10) + 'px';
  }
  else if(left > maxWidth){
    //alert("hi");
    //console.log(left);
    //window.clearInterval(catwalkfwd);
    console.log(walkingCat.style.left);
    //walkingCat.style.webkitTransform ="scaleX(-1)";
    //walkingCat.style.msTransform="scaleX(-1)";
    walkingCat.style.transform = "scaleX(-1)";
    walkingCat.style.left = (left-10) + 'px';
    console.log(walkingCat.style.left);
    //window.setInterval(catWalk,50);
    //window.clearInterval(catwalkfwd);
  
  }
};


// if(screen.availWidth == 1440)
// {
//   clearInterval(catWalk);
// }
let catwalkfwd = window.setInterval(catWalk,50);

// if( == '900px')
// {
//   clearInterval(catWalk);
// }
//clearInterval(catWalk);

// var img = document.getElementsByTagName('img')[0];
// img.style.left = 0;
// img.style.right = 0;
// var newleft = 0
// var maxWidth = window.innerWidth -296; //296 is the length od the cat
// var newRight =maxWidth;
// var animateright;
//
// var  catWalk = function(){
//
//     newleft +=  10;
//     img.style.left = newleft + 'px';
//     if(parseInt(img.style.left) >= maxWidth)
//     {
//        // clearInterval(animate);
//         img.style.webkitTransform ="scaleX(-1)";
//         img.style.msTransform="scaleX(-1)";
//         img.style.transform = "scaleX(-1)";
//         animateright = setInterval(walkBack,100);
//         clearInterval(animate);
//     }
//
// };
//
//
// var walkBack = function() {
//  console.log('walking back')
//     newleft = newleft-10;
//     img.style.left = newleft + 'px';
//       if(parseInt(img.style.left) === 0){
//         clearInterval(animateright);
//         //clearInterval(animate);
//       }
//
//
// }
// var animate = setInterval(catWalk,100);
// // var animateright = setInterval(walkBack,30);
//
//
//
// // window.screen.availWidth
