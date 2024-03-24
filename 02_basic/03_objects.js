// 2 ways to declare objects:
// 1. as literals
// 2. as constructors (apni trh ka ek hi object h - singleton)
// (object.create)

// symbol
const mysym = Symbol("key1")
// object literals
const jsUser = {
    name : "suhana", //by default system considers name as "name"
    "full name":"suhana kaura",

    // not a symbol
    mysym:"mykey1",

    // declared as this:
    [mysym]:"mykey1",

    age :18,
    location:"himachal",
    email:"suhana@gmail.com",
    isLoggedIn:false,
    lastLoggedIn:["sunday","monday"]
}

// accessing object's elements
// console.log(jsUser.name)
// console.log(jsUser["name"])

// console.log(typeof jsUser[mysym])

// changing the values
jsUser["email"] = "suhana@google.com"
// console.log(jsUser["email"])

// freeze the object so that we can't make further changes
// Object.freeze(jsUser)
jsUser.email= "suhanak@google.com"
// console.log(jsUser["email"])
// no error but changes can't propogate

// console.log(jsUser)


// we can add a function(treated as normal variables)
// adding a property greetings function to jsUser
jsUser.greetings = function(){
    console.log("hello! js user")
}
jsUser.greetings_2 = function(){
    console.log(`hello! ${this["full name"]}`)//to reference the same object we use this
}

console.log(jsUser.greetings) //function doesn't execute , we only get its reference
console.log(jsUser.greetings())
console.log(jsUser.greetings_2())