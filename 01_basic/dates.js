let mydate = new Date() //instance of date object
// console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toISOString())
// console.log(mydate.toJSON())
// console.log(mydate.toLocaleDateString())
// console.log(mydate.toLocaleString())
// console.log(mydate.toLocaleTimeString())
// console.log(mydate.toTimeString())

// console.log(typeof mydate)

// months start from 0 in js
let newdate = new Date(2023,2,23)
// console.log(newdate.toDateString())

let timedate = new Date(2023,4,23,23,4)
// console.log(timedate.toLocaleString())

let date1 = new Date("2023-01-09") //month starts from 1
// console.log(date1.toLocaleString())

let myTimeStamp = Date.now();
// console.log(myTimeStamp) //milliseconds
// console.log(date1.getTime())

// converts into second
// console.log(Math.floor(Date.now()/1000))

let date2 = new Date();
console.log(date2.getDay())
console.log(date2.getMonth()+1)

console.log(date2.toLocaleString('default',{
    weekday: "long"

}))