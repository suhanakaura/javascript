/*****************************************conversion************************************/
let score = "33"

console.log(typeof score)
console.log(typeof(score))

let scoreInNumber = Number(score) //datatype conversion
console.log(typeof scoreInNumber)



let str = "123Ab"
console.log(typeof str) 

let num = Number(str) //will convert it to number but value will be NaN
console.log(num)
console.log(typeof num)



let null_val = null
console.log(typeof null_val)

let to_num = Number(null_val)
console.log(typeof to_num)
console.log(to_num) //converts to 0



let un = undefined
console.log(typeof un)

let n = Number(un)
console.log(n) //NaN value
console.log(typeof n)



let bool_val = true
console.log(typeof bool_val)

let to_n = Number(bool_val)
console.log(to_n) //1 for true and 0 for false
console.log(typeof to_n)


// "33" => 33
// "33abc" =>NaN (not a number,but type is number)
// true => 1 and false => 0

// convert to boolean
let int_value = 1
let empty_str = ""//false
let bool_value = Boolean(int_value)
let bool_empty = Boolean(empty_str) //false
let bool_str = Boolean(score) //true
console.log(bool_value)
console.log(typeof bool_value)
console.log(bool_empty)
console.log(bool_str)

// 1 => true 
// 0 => false
// "" => false
// "string" => true



// conversion to string
let somenum =33
let stringnum = String(somenum)
console.log(typeof stringnum)
console.log(stringnum)