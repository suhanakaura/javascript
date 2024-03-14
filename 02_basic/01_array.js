// can be of same data type or can be of different data types
// is resizable
// js array copy operations create shallow copies
// shallow copy: whose property shares the same references
// deep copy: whose property doesn't share the same references

const arr1 = [1,2,3,4,5]
// console.log(arr1)
// console.log(arr1[3])

const arr2 = ["helo","heeelo"]
// console.log(arr2)

const arr3 = new Array(1,2,3,true,"hello",0.9,[1,2,3])
// console.log(arr3)
// console.log(typeof arr3[6][0])

// array methods
// arr1.push(6)
// arr1.push(0)
// console.log(arr1)
// arr1.pop()
// console.log(arr1)

// arr1.unshift(9) //adds ele at starting
// console.log(arr1)

// arr1.shift() //removes ele from starting
// console.log(arr1)

// console.log(arr1.includes(9)) //returns bool value

// console.log(arr1.indexOf(1))
// // if ele not present then returns -1
// console.log(arr1.indexOf(9))

// .join - binds the array and converts it into string
// const newarr = arr1.join()
// console.log(arr1)
// console.log(typeof arr1)
// console.log(newarr)
// console.log(typeof newarr)


// slice vs splice
console.log("A",arr1)

const new1 = arr1.slice(1,3) //doesn't manipulates the original array
console.log(new1)
console.log("B",arr1)

const new2 = arr1.splice(1,3) //includes 3rd index too ..also manipulates the original array
console.log(new2)
console.log("C",arr1)