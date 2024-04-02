// email = "hello@gmail.com" // true
// email = "" //false
// if(email){
//     console.log("got user email")
// }
// else{
//     console.log("didn't get user email")
// }

// falsy values:
// false
// 0
// -0
// BigInt 0n
// ""
// null
// undefined
// NaN


// truthy values:
// "0"
// "false"
// " "
// []
// {}
// function(){} empty function


// const arr = []
// if(arr.length === 0){
//     console.log("empty array")
// }

// const obj = {}
// if(Object.keys(obj).length===0){
//     console.log("object is empty")
// }

// true
// console.log(false==0)
// console.log(false=='')
// console.log(0=='')

// nullish coalescing operator (??) :null,undefined
let val1;
// val1 = 20??10 //first value
// val1 = null ?? 10 //2nd value as 1st is null
// val1 = undefined ?? 3
// val1 = null??undefined??2
// console.log(val1)
// while we are working with a database .. sometimes we don't get direct response. we can get null or undefined..this operator checks the safety for null value


// ternary operator
// condition?true:false;

// const price = 20
// price>30? console.log("price is greater than 80"):console.log("price is less than 30")

