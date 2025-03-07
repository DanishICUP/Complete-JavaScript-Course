//foreach loop


const programmingLanguages = ["c++", "python", "javascript", "node js", "Reactjs", "Next js"]


programmingLanguages.forEach((val) => {
    console.log(val);
})

programmingLanguages.forEach(function (val) {
    console.log(val);
})

function printValues(print) {
    console.log(print);
}
programmingLanguages.forEach(printValues)


//foreach pass these three arguments
programmingLanguages.forEach((item, index, arr) => {
    console.log(item , index , arr);
})



const Languages = [
    {
        laguageName:"javascript",
        languagetype:"js"
    },{
        laguageName:"python",
        languagetype:"py"
    },{
        laguageName:"java",
        languagetype:"java"
    }
]

Languages.forEach((item)=>{
    console.log(item.laguageName);
})
