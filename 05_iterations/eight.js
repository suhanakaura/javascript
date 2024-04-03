// reduce
const arr = [1,2,3]
// const total = arr.reduce(function(accummulator,current_value){
//     console.log(`accumulator value = ${accummulator} and current_value = ${current_value}`)
//     return accummulator+current_value //the sum is being stored in the accumulator
// },0) //0 is the initial value given to the accumulater
// console.log(total)

// using arrow function
// const total = arr.reduce( (acc,cur)=>acc+cur,2)
// console.log(total)


const shopping_cart = [
    {
        course:"python",
        price:2000
    },
    {
        course:"js",
        price:1000
    },
    {
        course:"data science",
        price:2000
    },
    {
        course:"dsa",
        price:20000
    }
]
const total_price = shopping_cart.reduce((acc,item)=>acc+item.price,0)
console.log(total_price)