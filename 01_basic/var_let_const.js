// constant declaration
const AccountId = 144553 //can't be changed

// variable declaration
let AccountEmail = "hello@gmail.com"
var AccountPassword = "12345" //scope problem
AccountCity = "Jaipur" //don't use

let AccountState; //undefined

/*
prefer not to use var
because of issue in block scope and functional scope
*/

// try changing them

// AccountId =2; //not allowed
console.log(AccountId);

AccountEmail = "abc@gmail.com"
AccountPassword ="22222"
AccountCity = "Bengaluru"

// to print all the variables together - use console.table()
console.table([AccountId,AccountEmail,AccountPassword,AccountCity,AccountState])