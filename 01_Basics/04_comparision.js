//avoid these all type of comparision to don't use in any programe best programming language practice dont use it 

console.log("2" > 1);//true
console.log("02" > 1);//true

console.log(null > 0);
console.log(null < 0);
console.log(null == 0);
console.log(null <= 0);


console.log(undefined < 0);
console.log(undefined == 0);
console.log(undefined <= 0);


//javascript memory stack and heap 

//stack (primitive datatypes)  in stack the value is pass by value copy of value not orignal
//heap (non primitive datatypes) in heap pass by refrence orignal value when change the orignal value is chnage not copy
//example

let name = 'danish'
let anothername = 'danish khan'
anothername = 'danish khan afridi'

//there is no changes in orignal value there is pass copy of value
console.log(name);
console.log(anothername);

//exmaple of heap
let userOne = {
    email: "danishkhan@gmailcom",
    no: 211
}
let userTwo = userOne
//when change some value the origanl value is change not copy
userTwo.email = "danish@gmail.com"
userTwo.no = 222

//the console take same answer becuase the change also in orignal value
console.log(userOne);
console.log(userTwo);






