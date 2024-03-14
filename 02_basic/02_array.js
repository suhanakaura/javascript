const arr1 = [1,2,3,4]
const arr2 = [9,0,8]

// arr1.push(arr2) //arr2 will be considered as a single element for arr1
// console.log(arr1) //existing array m hi push krega

// const arr3 = arr1.concat(arr2)
// console.log(arr3)

// spread opr
// const arr3 = [...arr1,...arr2]
// console.log(arr3)

// const arr = [1,2,3,[3,4,6],0,9,8,[3,2,[3,2]]]
// const narr = arr.flat(Infinity) //in parameter we give the depth , it will determine by itself for infinity
// console.log(narr)


// console.log(Array.isArray("histeh"))
// console.log(Array.from("histeh"))
// console.log(Array.from({name:"histeh"})) //will give empty array as it won't ne able to convert it

const score1 = 200
const score2 = 100
const score3 = 300
console.log(Array.of(score1,score2,score3))
