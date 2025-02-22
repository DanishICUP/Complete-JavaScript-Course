const accountId = 12345
let emailId = 'danishicp99@gmail.com';
var accpass = '112233';
city = 'pesh';
city = 'darra';//re-assigned 

// ccountId = 22331133 error because is variable type is const immutable not change

console.table([accountId, emailId, accpass, city]);



/* 

1. var (Function-scoped)
Scope: Function-scoped, meaning it is only accessible inside the function where it is declared.
Hoisting: Hoisted to the top of its scope and initialized as undefined.
Re-declaration: Allowed within the same scope.
Automatic Global Scope: If declared outside any function, it becomes a global variable.


function testVar() {
    if (true) {
        var x = 10; // Available outside the block
    }
    console.log(x); // 10 (No block scope)
}
testVar();
*/


/* 

2. let (Block-scoped)
Scope: Block-scoped, meaning it is only accessible inside the block {} where it is declared.
Hoisting: Hoisted but not initialized (Temporal Dead Zone).
Re-declaration: Not allowed within the same scope.


function testLet() {
    if (true) {
        let y = 20; // Only available inside this block
        console.log(y); // 20
    }
    console.log(y); // Error: y is not defined
}
testLet();
*/

/* 

3. const (Block-scoped, Immutable)
Scope: Block-scoped, like let.
Hoisting: Hoisted but not initialized (Temporal Dead Zone).
Re-declaration: Not allowed within the same scope.
Mutation: The reference cannot be changed, but if it’s an object or array, properties can be modified.

function testConst() {
    if (true) {
        const z = 30; // Only available inside this block
        console.log(z); // 30
    }
    console.log(z); // Error: z is not defined
}
testConst();
*/




