document.addEventListener('DOMContentLoaded', () =>{

    function myDisplayer(something){
        document.getElementById("demo").innerHTML = something;
    }

    function myCalculator(num1 , num2,myCallback){
        let sum = sum1 + sum2;
        myCallback(sum);
    }

    myCalculator(5,5,myDisplayer)




});