const app = new Object() //singleton object
// const app = {} //non singleton object
// console.log(app)

app.id = "123abc"
app.name = "suhana"
app.isLoggedIn = true

// console.log(app)

const nested_obj = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            first : "suhana",
            last : "kaura"
        }
    }
}

// accesing values of nested objects
// console.log(nested_obj)
// console.log(nested_obj.fullname)
// console.log(nested_obj.fullname.userfullname)
// console.log(nested_obj.fullname.userfullname.last)

// what if fullname doesn't exist
// console.log(nested_obj.fullname?.userfullname.last)
// we use ? while fetching api requests so that it checks whether fullname exists or not 
// otherwise we need to use if else

// merging two objects
const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"c" , 4:"d"}
// const obj3 = {obj1,obj2}
// const obj3 = Object.assign(obj1,obj2) //here obj1(target) stores the value of obj2 (source)
// const obj3 = Object.assign({},obj1,obj2) //{}(here {} stores the values , is optional, it acts as a target and others as source
// console.log(obj3==obj1)

// mostly used : spread opr
const obj3 = {...obj1,...obj2}
// console.log(obj3)

// working with databases : we'll get array of objects
const users = [
    {
        id : 1,
        email : "h@google.com"
    },
    {
        id : 2,
        email : "s@google.com"
    },
    {
        id : 3,
        email : "t@google.com"
    },
    {
        id : 4,
        email : "q@google.com"
    }
]

// loop through to print the values using map or
// console.log(users[3].email)

const objj = {name:"suhana" , id :1,email:"suhana@gmail.com"}

// accessing all keys:
// console.log(Object.keys(objj)) //o/p value data type = array
// console.log(Object.values(objj))

// key value pair into array
// console.log(Object.entries(objj))

// to check for a key present
// console.log(objj.hasOwnProperty("i"))



// de-structuring of objects
const course = {
    courseName : "js",
    courseFee  : "999",
    courseInstructor : "Hitesh"
}

// instead of course.courseInstructor we can use const{jo value extract krni h} = jhn se value extract krni h
// const{courseInstructor} = course
const{courseInstructor:ins} = course
// console.log(courseInstructor)
console.log(ins)


// api - the way we use the values that come from backend - mostly in json format
// json format: (java script object notation)
// {
//     "name":"suhana",
//     "id":"1"
// }
// or sometimes api are in array format
// [
//     {},
//     {}
// ]