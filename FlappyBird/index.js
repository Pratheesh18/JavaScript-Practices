document.addEventListener('DOMContentLoaded', () =>{
var canvas = document.getElementById("bird-canvas");
var ctx = canvas.getContext("2d");


var birdX = 800/2;
var gravity = 9.8;
var velocity = 0;


function updateBirdPosition(timeElapsed){
    velocity += gravity * (timeElapsed/1000);
    birdX += velocity * (timeElapsed/1000);
}

function drawBird(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillRect(birdX , 400,50,50);
}

setInterval(() => {
    var now = Date.now();
    var lastTime = now;
    var timeElapsed = now - lastTime;

    updateBirdPosition(timeElapsed);
    drawBird();

    lastTime = now;

}, 16);


document.addEventListener("keyup" , function(event){
    if(event.key === "ArrowUp"){
        velocity = -20;
    }
});

});