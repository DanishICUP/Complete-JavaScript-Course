//singleton
//Object.create()


const mySym = Symbol("key1")

//object letrial
const StudentName = {
    name: "Danish",
    "age": 23,
    [mySym] : "mySym1",
    "email": "abc@gmail.com",
    location: "ABC",
    isLoggedIn: true,
    LoginDays: ["Monday", "sunday"]
}
// 2way to access
console.log(StudentName.name);
//pass keys and print
console.log(StudentName["email"]);
console.log(StudentName["age"]);
console.log(typeof StudentName[mySym]);
console.log(StudentName[mySym]);



//value Changing in object

StudentName.email = "danish@gmail.com"
//freez object
// Object.freeze(StudentName)
StudentName.email = "khan@gmail.com"
console.log(StudentName);


StudentName.gretting = function(){
    console.log("hello js users");
}

StudentName.grettingtwo = function(){
    console.log(`hello js user ${this.name}`);
}

console.log(StudentName.gretting);
console.log(StudentName.gretting());
console.log(StudentName.grettingtwo());