// function name(){
    // function definition
// }
function saymyname(){
    console.log('H')
    console.log('E')
    console.log('L')
    console.log('L')
    console.log('O')
}

// saymyname - function ka reference
//saymyname() //- function execution

// function add_two_num_return(n1,n2){ //function definition - n1,n2 are parameters
//     return n1+n2
//   //console.log("hello") //will never be executed..return k baad function koi kaam nhi krega
// }

// function add_two_num_void(n1,n2){ 
//     console.log(n1+n2) //this fn isn't returning anything 
// }

// console.log(add_two_num_return(1,3)) //function call - n1,n2 are arguments

// const result_return = add_two_num_return(1,2)
// const result_void = add_two_num_void(1,3)
// console.log(result_return)
// console.log(result_void) //undefined as it's not returning anything 

// function user_logged(username){
//     if(username === undefined){
//         return "please enter a username"
//     }
//     return `${username}! just logged in`
// }
// or
// function user_logged(username){
//     if(!username){
//         return "please enter a username"
//     }
//     return `${username}! just logged in`
// }
// or we can give a default value
function user_logged(username = "User"){
    if(!username){
        return "please enter a username"
    }
    return `${username}! just logged in`
}


// console.log(user_logged("suhana")) //value overwritten in case default value is given 
// console.log(user_logged(""))
// console.log(user_logged()) //no arguments then - undefined


// to pass multiple parameters in a function definition we use rest operator ...
// function shoppingcart(...num){
//     return num
// }

// console.log(shoppingcart(1,2)) //array is returned 

// function shoppingCart(val1,val2,...num){
//     return num
// }
// console.log(shoppingCart(1,2,3,4,5))

// passing object to function
const obj = {
    username : "suhana",
    id : 12
}

function objectHandle(anyobject){
    console.log(`Hi! ${anyobject.username} , id = ${anyobject.id}`)
}
// objectHandle(obj)
// or 
// objectHandle({
//     username: "hell",
//     id:22
// })

// passing array 
const arr = [100,200,300]
function return_array_val(getArray,index){
    if(index>=3){
        return "error: index out of range"
    }
    return getArray[index]
}
console.log(return_array_val(arr,3))