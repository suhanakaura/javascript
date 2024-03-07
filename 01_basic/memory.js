// stack memory - (for primitive data types) original value ki ek copy banti hai .. jo changes copy mein honge vo original me reflect nhi krenge
// heap memory - (for non-primitive data types) original value ka reference pass hota hai .. jo changes honge vo original mein bhi reflect krenge

// stack memory
let myname = "suhana"
let anothername = myname
anothername = "kaura"
console.log(anothername)
console.log(myname)

// heap memory
let user_1 = {
    email:"user@google.com",
    upi :"user@xyi"
}
console.log(user_1.email)
let user_2 = user_1
user_2.email = "user@gmail.com"
console.log(user_1.email)
console.log(user_2.email)