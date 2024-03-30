// immediately invoked function expression (iife)
// to avoid global scope pollution , we create our own scope - for that we use iife .. so that 
// the function is invoked immediately . mostly while connecting the databases
(function chai(){ //named iife
    console.log("db connected")
})();
// immediately invoked function :
// (function definition)(function call)
// it doesn't know where to stop the context , so we have to end the line using ;
( ()=>{ //unnamed iife
    console.log("hello")
})();

((name)=>{
    console.log(`hello! ${name}`)
})("suhana");