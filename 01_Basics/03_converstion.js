let typeconverstion = '33'

console.log(typeof typeconverstion);
console.log(typeof(typeconverstion));

let convertNumber = Number(typeconverstion)

console.log(typeof convertNumber);
console.log(convertNumber);


//output
/*
'33' => 33
'33abc' => NaN
null => 0
undefined => NaN
true => 1 ; false => 0
*/


//conver boolean value
let isLogin = "123"

let BooleanValueConvert = Boolean(isLogin)
console.log(BooleanValueConvert);

//output
// "" => false
// "abc" => true
// "0" => false
// "1" => true


//convert to string
let number = 123
let convertnumber = String(number)
console.log(typeof convertnumber);


