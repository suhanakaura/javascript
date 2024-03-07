const name = "suhana"
const repo_count = 50
// console.log(name + repo_count + "value")

// string interpolation - we make placeholders and we can directly inject the variables inside them using ${}
console.log(`my name is ${name} and my repo count is ${repo_count}`)


// using object
const str = new String("hello-world")
console.log(str)
// accessing the 0th letter 
console.log(str[0])

// accessing the prototype
console.log(str.__proto__) //gives an object

// methods
console.log(str.length)
console.log(str.toUpperCase())  //original value isn't changed
console.log(str.charAt(2))// char at 2nd index
console.log(str.indexOf('o'))// check index of char

// slicing
const sub = str.substring(1,6) //6 not included
console.log(sub)
// if we give negative value to substring it will not obey and start from 0

const sli_1 = str.slice(1,6)
const sli_2 = str.slice(-8,6)
console.log(sli_1)
console.log(sli_2)


// trim and replace method
const new1 = "   hitee    "
console.log(new1)
console.log(new1.trim())

const url = "https://hello.com/hello%20world"
console.log(url.replace('%20','-'))

console.log(url.includes("hello")) //true
console.log(url.includes("is")) //false

// convert string to array - split method
// split on the basis of '-'
const strr = "he-ll-o-wo-rld"
const arrr = strr.split('-')
console.log(arrr)