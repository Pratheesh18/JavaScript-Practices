const basket = [
    {
        type : "fruit",
        name : "apple"
    },
    {
        type : "vegetable",
        name : "tomato"
    },
    {
        type : "fruit",
        name : "orange"
    },
    {
        type : "vegetable",
        name : "cucumber"
    }
];

const hasFruit = basket.some((item) => item.type == "fruit");
console.log(hasFruit);

//output : true