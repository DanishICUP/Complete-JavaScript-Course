//two type of datatypes primitive and non-primitive

//primitive => string number bigint boolean undefined null symbol

let name = 'danish'
let age = 24
let money = 10000000000000
let isLoggedIn = true 
let city
let bloodGroup = null
let sys = Symbol('id')

console.log(typeof isLoggedIn);

//non-primitive => object array function

//object
const student = {
    name:"danish",
    rollno : 21,
};

console.log(student);

//function
function studentfn(){
console.log("function run");
}
//function calling
studentfn()

//arrya
const studentMarks = [22,33,44,11,44]
//map
studentMarks.map(marks =>{
    const addMarks = marks*2
    console.log(addMarks);
})
//reduce
const totalMarks = studentMarks.reduce((sum , value) => sum + value , 0)
console.log(totalMarks);
//filter
const filterMarks = studentMarks.filter(marks => marks > 22)
console.log(filterMarks);




