const stackSort = (arr) => {
    const inputStack = [];
    const outputStack = [];

    for(let element of arr){
        inputStack.push(element);
    }

    while(inputStack.length > 0){
        const temp = inputStack.pop();
        while(outputStack.length > 0 && temp < outputStack[outputStack.legth -1]){
            inputStack.push(outputStack.pop());
        }
        outputStack.push(temp);
    }
    return outputStack;
}

const array = [1,2,34,54,21,10,43];
const sortedArray = stackSort(array);
console.log(sortedArray);