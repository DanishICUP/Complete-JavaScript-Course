//string we can decleard string using '' or ""
//here i am discuss some string method but you can also learn string method use mdn

const Name = 'danish'
const SecondName = "khan"

//first method to Concatenation
console.log(Name + " " + SecondName + " " + "afridi");

//second method use Template literale
console.log(`my first name is ${Name} and second name is ${SecondName}`);

//second method to decleard string
const userName = new String("Danish khan")

console.log(userName);
console.log(userName[0]);

//string methods 
console.log(userName.length);
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(userName.charAt(3));
console.log(userName.indexOf('n'));
console.log(userName.includes('h'));
console.log(userName.substring(0, 4));
console.log(userName.slice(0 , 4));
console.log(userName.trim());


const url = 'http://danish%20khan.com'
const replaceUrl = url.replace('%20' , '-')
console.log(replaceUrl);



