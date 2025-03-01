const student = {
    username : "danish",
    price : 999,
    message : function(){
        console.log(`${this.username} , welcome to website`);
        console.log("check value of this: ",this);//refer to currect context
    }
}

student.message()
student.username = "ali"
student.message()


console.log("outside of object the value of this: ",this);


// ---------------arrow function----------------

const addNumber = (num1 , num2) => {
    //explicit returen
    return num1 + num2
}


//impilicit return
const addNumber2 = (num1 , num2) => num1 + num2
const addNumber3 = (num1 , num2) => (num1 + num2)

//return object
const objectInFunction = () => ({username : "danish"})


console.log(addNumber(2,3))
console.log(addNumber2(2,3));
console.log(addNumber3(2,3));

console.log(objectInFunction());



