// in most of the cases promises are consumed
// fetch('https://xyz.com').then().catch().finally() //if some response - then()
// if some error - catch() //if runs successfully - finally()

// a promise is an object representing the eventual completion or failure of an asynchronous operation

// creating promises
// const promiseOne = new Promise(callback)

// const promiseOne = new Promise(function(resolve,reject){
//     // do an async task
//     // DB calls, cryptography , network calls - uses
//     setTimeout(function(){
//         console.log('async task is complete');
//     },1000)
// }) //ya to resolve hoga ya to reject hoga

// consuming the promise
// .then() is directly related to resolve
// jo kaam promise create krte time hota hai usko return karte hain iske callback function mein
// promiseOne.then(function(){
//     console.log("promise consumed");
// })
// here promise consumed is not printed as , .then() and resolve ain't connected
// so we need to connect them
// we need to call resolve method inside the function of promiseOne

// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task is complete");
//         resolve();
//     },1000);
// })

// promiseOne.then(function(){
//     console.log("promise consumed");
// })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task 2 is called");
//         resolve();
//     },1000);
// }).then(function(){
//     console.log('async task 2 is resolved');
// })

// we can also pass data as a parameter in resolve method - it can be object(mostly it is) , array or function 
// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({name:"suhana",email:"sk@example.com"});
//     },1000)
    
// })
// // we can check the data in the object by passing the value as an argument in .then() function
// promiseThree.then(function(user){
//     console.log(user);
// })

// we can use as many .then()/.catch() as we want
// let's raise an error
// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         // let error = true;
//         let error = false;
//         if(!error){
//             resolve({name:"suhana",email:"sk@example.com"});
//         }
//         else{
//             reject('ERROR: something went wrong');
//         }
//     },1000)
// })

// const username = promiseFour.then((user)=>{
//     console.log(user);
//     return user.name;
// })

// console.log(username) //can't do this , promise is in pending state
// so we can do chaining: the value that is returned in previous function will be called in the next chaining

// const usename = promiseFour.then((user)=>{
//     console.log(user)
//     return user.name;
// }).then((name)=>{
//     console.log(name);
// }).catch(function(error){
//     console.log(error); //handling the errors and values properly
// })
// .finally will always run no matter what!! it's kinda default value

// const username = promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.email;
// })
// .then((email)=>{
//     console.log(email);
// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=>{
//     console.log("the promise is either resolved or rejected");
// })


// we can also handle promises using async await : async await waits for the task to happen. if the task happens then we move ahead , else it gives error there only
// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username:"sk",pass:"123"});
//         }
//         else{
//             reject("ERRRR!!!!! Something went wrong");
//         }
//     },1000);
// })

// async function consumePromiseFive(){
//     const response = await promiseFive;
//     console.log(response);
// }
// consumePromiseFive();

// async await can't handle the errors directly
// is there is ans error we'll get a suggestion to wrap the error in a catch block
// wrapping it to a try catch block
//  async function consumePromiseFive(){
//     try{
//         const response = await promiseFive;
//         console.log(response);
//     }
//     catch(error){
//         console.log("ERRR!!!!");
//     }
//  }
// consumePromiseFive();

// https://jsonplaceholder.typicode.com/users 

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users'); //data in string format
//         // console.log(response)
//         const data = await response.json(); // this conversion also takes time so we need to await
//         console.log(data);
//     } catch (error) {
//         console.log("ERR!!",error)
//     }

// }

// getAllUsers();

// writing the above same function in .then(), .catch()
fetch('https://api.github.com/users/suhanakaura')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
}) //no need to use await here as it works only when previous then's work finishes
.catch((error)=>{console.log(error)})