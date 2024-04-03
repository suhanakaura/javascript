const myNums = [1,2,3,4,5,6,7,8,9,10]

// add 10 to all numbers
// map fn - returns value
// const newNums = myNums.map((item)=>item+10)
// console.log(newNums)

// chaining
const newNums = myNums.map((num)=>num*2).map((num)=>num+10).filter((nums)=>nums>20)
console.log(newNums)