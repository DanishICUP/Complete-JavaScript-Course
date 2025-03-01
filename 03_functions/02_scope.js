let a = 1000//globle scope

if (true) {
    let a = 10//block scope
    const b = 20//block scop
    var c = 30
    console.log(a);//gloable value access inside scope but not access block scope value outside

}

console.log(a);


//console.log(a);//error not access outside block scope
//console.log(b);//error not access outside block scope
//console.log(c);//access 



// ---------------nested scope--------------
// in this senario the children access parent value but children value is did not access outside 
function one() {
    const name = "danish"

    function two() {
        const website = "youtube.com"
        console.log(name);
    }

    // console.log(website);
    two()
}
one()

