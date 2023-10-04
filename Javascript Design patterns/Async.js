function sayHi(){
    console.log("Hi");
}

setTimeout(sayHi , 2500)


setTimeout(() => {
    console.log("Hello");
},2000)

let timerId = setInterval(() => console.log('tick') , 2000);

setTimeout(() => {clearInterval(timerId); console.log('stop');},5000)