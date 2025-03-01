//singleton
const userApp = new Object()
console.log(userApp);


const app = {}

app.id = "123abc"
app.name = "game"
app.fullname = "freefire"
app.createdBy = "danish"

console.log(app);
console.log(Object.keys(app));
console.log(Object.values(app));
console.log(Object.entries(app));

console.log(app.hasOwnProperty("fullname"));



//nested object
const user = {
    name: "daish",
    username: {
        fullname: {
            firstname: "danish",
            lastname: "khan"
        }
    }
}
console.log(user.username.fullname.firstname);


//add two object

const obj1 = { 1: "1", 2: "2" }
const obj2 = { 3: "3", 4: "4" }

// const obj3 = {obj1 , obj2}
//const obj3 = Object.assign({}, obj1, obj2)//point object and gurantee of value return object

//optional channing
const obj3 = {...obj1,...obj2}
console.log(obj3);



// ---------------object destructuring---------------------

const coureces = {
    name : "js",
    instructor : "Danish",
    price : 999
}

//console.log(coureces.name)
//console.log(coureces.instructor)

//destructuring
const {name , instructor , price} = coureces

console.log(name , instructor , price);//output js Danish 999

