const arr = [1,2,3,4,5];

const result = arr.reduceRight((accumulator , currentvalue) => {
    return accumulator - currentvalue
} , 0);

console.log(result);

//output : -15