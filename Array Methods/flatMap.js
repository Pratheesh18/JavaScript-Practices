const arr = [[1,2],[3,4],[5,6]];
const result = arr.flatMap(item => item.map(value => value * 5));
console.log(result);

//output : [ 5, 10, 15, 20, 25, 30 ]