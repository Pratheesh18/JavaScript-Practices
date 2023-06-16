function outerFunction() {
    var outerVariable = 'I am outer';

    function innerFunction(){
        var innerVariable = 'I am Inner';
        console.log(outerVariable + ' and ' + innerVariable);
    }

    return innerFunction;
}

var closure = outerFunction();
closure();