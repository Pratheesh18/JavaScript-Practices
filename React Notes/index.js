// 1 . Javascript function 
//This is function declaration and this can be immediately exported with export default or export
export default function App(){
    return <div> hello React </div>;
};

//This is the arrow function , and we have to use export keyword only
export const App = () => {
    return <div> Hello react </div>;
}

// 2 . Template Literals
function sayHello(text){
    return "Hello " + text + "!";
}

sayHello("React"); // Hello React

function sayHelloAgain(text){
    return `Hello again , ${text}`;
}

sayHelloAgain("React"); // Hello again , React!