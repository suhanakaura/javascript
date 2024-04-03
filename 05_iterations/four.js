// for of doesn't work for object , we can use for in
const myObj={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}
// for (const key in object) {
    
// }
// for(const key in myObj){ //will print only keys
//     console.log(key)
// } 
// to print value
// for(const key in myObj){
//     console.log(myObj[key])
// }

// for in in array will print array's keys i.e. indices
// const myarr = ["js","ruby","swift","cpp"]
// for(const ele in myarr){
//     console.log(ele)
// }

// not iteratable
const map = new Map()
map.set("IN","India")
map.set("USA","United States of America")
map.set("FR","France")
map.set("IN","India")
for(const key in map){
    console.log(key)
}
