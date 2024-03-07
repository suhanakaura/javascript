// returns boolean value - true or false
// console.log(2>3)
// console.log(2<3)
// console.log(2>=2)
// console.log(2==2)
// console.log(2!=2)

// console.log("02">=2) //js automatically converts string "02" into number to compare it
// but the result is not predictable


// avoid these types of conversions
// console.log(null>0)
// console.log(null==0)
// console.log(null>=0)
// the reason is that == and comparison >,>= works differently . comparisons converts null to a 
// number treating it as 0. that's why null==0 is false and null>=0 is true.
// console.log(undefined==0)
// console.log(undefined>=0)
// console.log(undefined>0)


// === - strict check - not only checks the value but also checks its data type
console.log("2"==2)
console.log("2"===2)

