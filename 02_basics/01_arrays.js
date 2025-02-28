//The Array object, as with arrays in other programming languages,
//enables storing a collection of multiple items under a single variable name

const arr = [1,2,3,4,5,6]
console.log(arr);

const name = ["danish","ali","haider","zaryab"]
console.log(name);


// ----------------------------------------
//second method to create and array
// ----------------------------------------

const arr2 = new Array(1,2,3,4,5)
const name2 = new Array("danish","ali","haider","zaryab")
console.log(arr2 , name2);
console.log(arr2[1]);0,1,2,3,4


// ---------Array methods----------------
arr.push(7)
console.log(arr);
arr.pop()//remove last element in array
arr.unshift(7) //add element on 0 index
arr.shift() // delete first array element


console.log(arr.includes(3))
console.log(arr.indexOf(2));

console.log(arr);
console.log(typeof arr);


const newArr = arr.join()//convert array into string
console.log(newArr);
console.log(typeof newArr);



// slice and splice 
const na1 = arr.slice(1,3)
console.log("A ",na1);
console.log(arr);


const na2 = arr.splice(1,3)
console.log("B",na2);
console.log(arr);


 



