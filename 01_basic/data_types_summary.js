// how the data is kept in memory and the way they are accessed , there are two tyeps of data types:
// 1. primitive(call by value):
//    string,number,boolean,null,undefined,symbol,BigInt

// 2. non-primitive/referenced types
//    array,objects,functions

// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them

// symbol:
const id1 = Symbol('123')
const id2 = Symbol('123')
console.log(id1==id2)
console.log(id1===id2)//return values are different

// big int
const bignum = 3803749384983n
console.log(typeof bignum)

// array 
let arr = [1,2,3,4]
console.log(arr)

// object
let obj = {
    name : "hitesh",
    age : 20
}

// function 
const myfunc = function(){
    console.log("hello world")
}

console.log(typeof myfunc) //object function
console.log(typeof obj)
console.log(typeof arr)
