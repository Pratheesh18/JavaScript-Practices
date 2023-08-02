// hoistervariable = 3;
// console.log(hoistervariable);
// var hoistervariable;

// hoistedFunction();
// function hoistedFunction(){
//     console.log("Hello")
// }


// var x = 2;
// var y = "2";
// console.log(x==y); // it is comparing the values
// console.log(x===y) // it is comparing both values and types


// function foo(){
//     var x = 1;
// }
// foo();
// console.log(x);


// function foo(){
//     let y = 2;
//     const z = 3;
// }
// foo();
// console.log(y);
// console.log(z);

function greet(name="guest"){
    console.log(`Hello , ${name}`);
}

greet("Emma");
greet();

function outer(){
    var count = 0;

    function inner(){
        count++;
        console.log(count);
    }

    return inner;
}

const counter = outer();
counter()
counter()
counter()




