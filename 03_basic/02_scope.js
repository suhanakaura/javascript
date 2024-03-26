// { inside scope - for a function ,loop or conditional statements}

// var c = 300 //scope problem
// if(true){
//     let a = 10
//     const b = 20
//     var c = 30
// }
// // var c = 2
// // console.log(a) //error 
// // console.log(b) //error
// console.log(c) //will print c = 30

// the value declared globally will be available for block level . but the value declared at block level will not be available outside it

// let a = 200
// if(true){
//     let a = 10 //scope limited to if block only and not outside it
//     const b = 20
//     console.log("inner: ",a)
// }
// console.log("outer: ",a)


// nested function 
// function one(){
//     username = "suhana"
//     function two(){
//         website = "hello"
//         console.log(username)
//     }
//     // console.log(website)//error: out of scope

//     two() //line by line exeution , so two kbhi execute hua hi nhi
// }

// one()

// two can access the members of one but one can't

// similar in the case of if conditions
// if(true){
//     let username = "suhana"
//     if(username==="suhana"){
//         let website = " yt"
//         console.log(username + website)
//     }
//     // console.log(website) // out of scope
// }
// console.log(username)


// function addone(num){ //function
//     return num+1
// }
// addone(9)

// const exp = function(num){ //expression
//     return num+2
// }
// exp(8)


// only declaration
console.log(addone(9)) 
function addone(num){ //function
    return num+1
}


// along with declaration the value is held in a variable
// can't access exp before initialization
exp(8)
const exp = function(num){ //expression
    return num+2
}

// hoisting in js
// how fn are declared , where they are kept, what is their execution context , how variables are treated in js