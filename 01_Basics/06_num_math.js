const number = 100
console.log(number);

const balance = new Number(1000)
console.log(balance);

console.log(number.toString());


const othernumber = 123.890
console.log(othernumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-PK'));



// ---------------------Math--------------------
console.log(Math.abs(-4))
console.log(Math.floor(4.3))
console.log(Math.ceil(2.3))
console.log(Math.min(1,2,3,4))
console.log(Math.max(1,2,3,4,5))
console.log(Math.floor(Math.random()*10)+1)


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min +1)) + min)