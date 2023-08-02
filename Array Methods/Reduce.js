let numbers = [5,20,100,40,32];
const maxValue = numbers.reduce((max,curr) => {
    if(curr > max){
        max = curr;

    }
    return max;
});


console.log(maxValue);


const obj1 = {a:1,b:2};
const obj2 = {c:3 , d:4};
const obj3 = {e:5 , f:6};

const mergedObj = [obj1,obj2,obj3].reduce((acc,curr) => {
    return {...acc , ...curr};
},{});
console.log(mergedObj);