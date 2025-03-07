// const numbers = [1,2,3,4,4,5,6]

//foreach did not return any value 
// const storeNum = numbers.forEach((item)=>{
//     return console.log(item);
// })
// console.log(storeNum);

// -----------------but way to write code and return value -------------------
const mynewarr = [1, 2, 3, 4, 5, 6, 7]
const myarr = []

mynewarr.forEach((num) => {
    if (num > 3) {
        myarr.push(num)
    }
})

console.log(myarr);



//filter
//filter method also return value


const myNumbers = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10]

const newNUmbers = myNumbers.filter((num) => {
    return num > 5
})
console.log(newNUmbers);


const numbers = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10]

numbers.filter((item) => {
    if (item % 2 == 0) {
        console.log(`the numbers ${item} are even `);
    } else {
        console.log(`the numbers ${item} are odd`);
    }
})


// -----------------example of filters------------------

const books = [{
    title: "The Alchemist",
    author: "Paulo Coelho",
    published: 1988,
    category: "Fiction",
    rating: 4.7
}, {
    title: "Atomic Habits",
    author: "James Clear",
    published: 2018,
    category: "Self-help",
    rating: 4.8
},
{
    title: "Clean Code",
    author: "Robert C. Martin",
    published: 2008,
    category: "Programming",
    rating: 4.6
},
{
    title: "The Psychology of Money",
    author: "Morgan Housel",
    published: 2020,
    category: "Finance",
    rating: 4.7
},
{
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    published: 2008,
    category: "Programming",
    rating: 4.5
},
{
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    published: 2016,
    category: "Self-help",
    rating: 4.5
}
];


// let filterValue = books.filter((bk) => bk.published < 2000)
// let filterValue = books.filter((bk) => {return bk.rating == 4.7})
let filterValue = books.filter((bk) => {
    if (bk.published > 2000 && bk.rating == 4.7) {
        return true
    }else{
        return false
    }
})
console.log(filterValue);

