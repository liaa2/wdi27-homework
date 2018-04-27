const catgif = document.getElementById("catgif");
catgif.style.position = "absolute";
catgif.style.top = "20px";
catgif.style.left = "0px";

const forwardCat = function(){
    let oldLeft = parseFloat(catgif.style.left);
    let newLeft = oldLeft + 5;
    catgif.style.left = newLeft + "px";
    if (parseInt(catgif.style.left) > window.innerWidth-catgif.width){
        window.clearInterval(stopForward);
    }
};

let stopForward = window.setInterval(forwardCat, 20);

const mjgif = document.getElementById("mjgif");
mjgif.style.position = "absolute";
mjgif.style.top = "000px";
mjgif.style.right = "0px";

const moonwalk = function(){
    let prevPosition = parseFloat(mjgif.style.right);
    let nextPosition = prevPosition + 5;
    mjgif.style.right = nextPosition + "px";
    if (parseInt(mjgif.style.right) > 1165){
        window.clearInterval(stopMoonwalk);
    }
};

let stopMoonwalk = window.setInterval(moonwalk, 20);