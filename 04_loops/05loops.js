//channing of map filter etc

const myarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result = myarr
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num > 50)


console.log(result);



//reduce method
const myArrResult = myarr.reduce(function (acc, curr) {
    console.log(`acc: ${acc} and curr: ${curr}`);
    return acc + curr
}, 0)

// const myArrResult = myarr.reduce((acc, curr) => acc + curr ,0)

console.log(myArrResult);



const cources = [
    {
        courceName: "python",
        price: 2000
    },
    {
        courceName: "javaScript",
        price: 3000
    },
    {
        courceName: "Data Science",
        price: 12000
    },
    {
        courceName: "Backend developement",
        price: 20000
    },
]

//if price in string use Number(item.price) 

const courcesResult = cources.reduce((acc, item) => acc + item.price, 0)
console.log(courcesResult);


