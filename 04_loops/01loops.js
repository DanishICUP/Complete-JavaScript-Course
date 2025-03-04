//A for loop is used to repeat a block of code a certain number of times. 

//santax

for (let i = 0; i < 10; i++) {
    const number = i;
    if (number == 5) {
        //console.log("print 5 number");
    }
    //console.log(number);
}



//loop inside loop

for (let i = 1; i <= 10; i++) {
    //console.log(`outer loop ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`innser loop ${j} and outer looop ${i}`);
        //console.log('inner loop ' , j);
        //console.log(`${i} * ${j} = ${i*j}`);
    }

}


const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);

}


// break and continue

for (let index = 1; index <= 10; index++) {
    const element = index;
    if (element == 5) {
        //console.log(`the 5 number is detected`);
        break;// break terminate the execution
    }
    //console.log(element);
}

for (let index = 1; index <= 10; index++) {
    const element = index;
    if (element == 5) {
        //console.log(`the 5 number is detected`);
        continue;// only ignore value and finished loop
    }
    //console.log(element);
}



// while loop

//syntax

// while (condition){

// }

let num = 0
while (num <= 10) {
    //console.log(`the value of number is ${num}`);
    num = num + 2
}


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let arr = 0
while (arr < array.length) {
    //console.log(`the value of array is ${array[arr]}`);
    arr = arr + 1
}



//do while loop
let num2 = 11
do{
    console.log(`the number is ${num2}`);
    num2++
}while(num2 <= 10){}