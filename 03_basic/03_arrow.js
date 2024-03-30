// this keyword tells about the current context
const user = {
    username : "suhana",
    price :999,

    welcomeMesaage : function(){
        console.log(`hi! ${this.username} , welcome to the website`) //only works in objects
        console.log(this)
    }
}
// user.welcomeMesaage()
// user.username = "sam"
// user.welcomeMesaage()
// console.log(this) //node environment mein this refers krta h empty object 

// function one(){
//     let username = "suha"
//     console.log(this.username) //only used for objects
//     // console.log(this)
// }
// one()

// arrow function
// const hello = () => {
//     let username  = "suhana"
//     console.log(this)
//     console.log(this.username)
// }
// hello()

// const addtwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addtwo(1,2))

// implicit function :
// const addtwo = (num1,num2) => num1 + num2
// const addtwo = (num1,num2) => (num1 + num2)

// console.log(addtwo(9,1))

// returning an object:
const usern = () => ({username:"suhana"})
console.log(usern())