// const score_1 = 10
// console.log(score_1)

// const score_2 = new Number(20)
// console.log(score_2) 

// console.log(score_2.toString().length)
// console.log(score_2.toFixed(2)) //set the precision value

// const num = 23.968
// console.log(num.toPrecision(3)) // value ranges from 1 to 21(inclusive) , returns a string (rounds off)

// const num1 = 1000000
// console.log(num1.toLocaleString())//adds commas acc to us standards
// console.log(num1.toLocaleString('en-IN')) //acc to indian standards


/*****************************    maths     ****************************/
console.log(Math) //is an object
console.log(Math.abs(-6)) //changes -ve value to positive
console.log(Math.round(4.3))
console.log(Math.round(4.5))
console.log(Math.round(4.51))
console.log(Math.round(4.54))
console.log(Math.round(4.7))
console.log(Math.ceil(5.5)) //upr vli value lega
console.log(Math.floor(5.5))//neeche vli value lega
console.log(Math.min(1,2,3,-1))
console.log(Math.max(1,2,4,10))
console.log(Math.random())// generates a random value b/w 0 and 1
console.log((Math.random()*10) + 1) //*10 shifts to next and +1 guarantees that number will not be 0
console.log(Math.floor((Math.random()*10)+1))

// generate random number between min and max
const min = 10
const max = 20
console.log(Math.floor(Math.random()* (max - min + 1)) + min)