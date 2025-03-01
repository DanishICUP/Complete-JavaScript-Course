// function as a package of reusable code that runs only when called.

//syntax
//function addTwoNumber(){
    //function name
    //function syntax
    //scope or body of sunction
    //last call outside function
//}

//first syntax
function addTwoNumber(number1 , number2){
    //let result = number1 + number2
    //return result

    return number1 + number2
}
const result = addTwoNumber(2,4)
console.log(result);

//second syntax
function addTwoNumber(number1 , number2){
    console.log(number1 + number2);
 }
addTwoNumber(2,4)


function loggedInUser(username){
    if (!username) {
        console.log("please provide username");
        return
    }
    return `${username} is just loggedIn`
}

console.log(loggedInUser("danish"));


// ---------------------use case of rest operator-----------------

function CalculateCartValue (...num){
    //without rest operator result => 100
    //when use rest operator result [100,200,300,400,500,600] resr and spread same use casese chnage 
 return num
}

console.log(CalculateCartValue(100,200,300,400,500,600))

// ----------------------handle object in function----------------------

const UserData = {
    firstName : "danish khan",
    price : "999"
}

function handleObject(anyobject){
    console.log(`the ${anyobject.firstName} who study js and price is ${anyobject.price}`);
}
//two way pass data two function both work fine

// handleObject(UserData)
handleObject({
    firstName:"Danish khan",
    price:999
})

// ----------------------handle arrays in function----------------------

const numbers = [100,200,300,400]

function handleArray(anyArray){
    return anyArray[1]
}
//two way pass data two function both work fine
console.log(handleArray(numbers))

console.log(handleArray([200,100,400,500,600]))

 
