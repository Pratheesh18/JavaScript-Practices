document.addEventListener('DOMContentLoaded', () =>{

function myDisplayer(some){
    document.getElementById("demo").innerHTML = some;
    
}

function myFirst(){
    myDisplayer("Hello");
};


function mySecond(){
    myDisplayer("GoodBye");
}

mySecond();
myFirst();


});