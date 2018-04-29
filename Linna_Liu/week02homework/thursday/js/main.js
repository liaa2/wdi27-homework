







const img1= document.querySelector("img")
const source1=img1.src;

const liWidth = document.getElementsByTagName("li")[0].offsetWidth;
console.log(liWidth);
const img1Width = img1.offsetWidth;

img1.style.left="0px";

const catWalk1 = function () {
  let oldLeft = parseInt(img1.style.left);
  let newLeft = (oldLeft+20)*1;

  if (newLeft > liWidth - img1Width) {
    img1.style.transform="rotateY(-180deg)";
    newLeft = newLeft + liWidth - img1Width
    newLeft = (newLeft+20)*(-1);
  } else if (newLeft<0) {
    img1.style.transform="rotateY(180deg)"
    oldLeft = 0;
    newLeft = (oldLeft+20)*1;
  }
  img1.style.left = newLeft + "px"
}

let walking1 = window.setInterval(catWalk1,50)





// const img= document.getElementsByTagName("img")
// const img1= document.querySelector("img")
// const source1=img1.src;
//
// img1.style.left="0px";
//
// let oldLeft =0;
//
// const catWalk1 = function () {
//
//   if(oldLeft<1300) {
//   oldLeft+=20;
// } else {
//     window.clearInterval(walking1)
//     img1.style.transform="rotateY(-180deg)"
//     oldLeft-=20;
//   }
//   img1.style.left=oldLeft+"px"
  // oldLeft=parseInt(img1.style.left);
  // newLeft=oldLeft-20;
  // img1.style.left=newLeft+"px"
  // catWalkReverse()
  // const catWalkReverse = function () {
  //   let oldLeft = 1300;
  //   let newLeft = oldLeft-20;
  //   img1.style.left=newLeft+"px";
  // };
// };


// const catWalkReverse = function () {
//   img1.style.left -=-30+"px";
// };


// let walking1 = window.setInterval(catWalk1,50)
// window.setInterval(catWalkReverse,30)



const enlargeImage= function () {
  img1.width="400";
  img1.height="400";
}

img1.addEventListener("click", enlargeImage)


// ==========2nd cat===================

const img2= document.querySelectorAll("img")[1]
const source2=img2.src;

img2.style.left="0px";



const catWalk2 = function () {
  let oldLeft = parseInt(img2.style.left);
  let newLeft = oldLeft+40


  img2.style.left=newLeft+"px";
  if (newLeft > liWidth - img1Width) {
    img2.style.left=0;
  }
};


window.setInterval(catWalk2,50)


// const img2= document.querySelectorAll("img")[1]
// const source2=img2.src;
// const container=document.getElementById("container")
//
// img2.style.left="0px";
//
// // let speed = 20;
//
// const catWalk2 = function () {
//   // let oldLeft = parseInt(img2.style.left);
//   // let newLeft = oldLeft+20
//   //
//   //
//   // img2.style.left=newLeft+"px";
//   // if (img2.style.left==="1320px") {
//   //   window.clearInterval(walking2);
//   // }
//   if(container.scrollLeft>=img2.scrollWidth){
//     container.scrollLeft-=;
//   } else {
//     container.scrollLeft++;
//   }
// }
//
//
// let walking2 = window.setInterval(catWalk2,20)



//cat 3//



const img3= document.querySelectorAll("img")[2]
const source3=img3.src;

img3.style.left="0px";



const catWalk3 = function () {
  let oldLeft = parseInt(img3.style.left);
  let newLeft = oldLeft+10


  img3.style.left=newLeft+"px";
  if (img3.style.left==="1200px") {
    window. clearInterval(walking3);
  }
};


let walking3 = window.setInterval(catWalk3,50)

const changeImage3 = function () {
  img3.src="https://m.popkey.co/290975/9MOyQ.gif";
}

const returnImage3 = function () {
  img3.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
}

img3.addEventListener("mouseover", changeImage3)
img3.addEventListener("mouseout",returnImage3)
