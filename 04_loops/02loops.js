
// ["","",""]
// [{},{},{}]

//forof → Works on arrays & gives values
//forin → Works on objects & gives keys

const num = [1, 2, 3, 4, 5, 6, 7]

for (const numbers of num) {
    // console.log(numbers);
}

const message = "hello world"

for (const msg of message) {
    if (msg == " ") {
        continue;
    }
    // console.log(`each chracter value is ${msg}`);

}

//map
const map = new Map()
map.set("pkr", "pakistan")
map.set("usd", "united state")

// console.log(map);

//for map key value access we use [pass key and value]

for (const [key, value] of map) {
    // console.log(key, "=>", value);
}



//forof loop for object is not work directly we use for in loop
const myObject = {
    js : "javascript",
    py : "python",
    cpp : "c++",
}

// for (const [key , value] of myObject) {
     //console.log(key , value); // error TypeError: myObject is not iterable
// }

for (const key in myObject) {
    // console.log(`${key} is shortCut for ${myObject[key]}`);
    
}


const languages = ["js","py","cpp","node"]
for (const key in languages) {
    console.log(languages[key]);
}
