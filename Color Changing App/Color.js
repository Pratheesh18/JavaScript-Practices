document.addEventListener('DOMContentLoaded', () =>{
let colors = ['red','blue','green','orange','purple','black','yellow'];

let button = document.getElementById('btn');

button.addEventListener('click',function(){
    let index = parseInt((Math.random()*colors.length)+1);
    let canvas = document.getElementById('canvas');

    canvas.style.backgroundColor = `${colors[index]}`
})

});