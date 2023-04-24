const { rejects } = require("assert");
const { error } = require("console");
const { resolve } = require("path");

function sub(a,b){
    return a-b
}
function add(a,b){
    return a+b
}
const subtotal = sub(12,6)
const addtotal = add(12,6)
console.log(subtotal);
console.log(addtotal);

function mul(a,b){
    return new Promise((resolve,rejects) => {
        if(typeof a != 'number' || typeof b != 'number'){
            rejects(new Error('Both argument is not number'))
        }
       
            resolve(a*b)
        
    })
}

mul(2, 9)
.then(results => console.log(results))
.catch(error => console.log(error))

const temp = (a,b) => {
    return a + b
}
console.log(temp(5,9))


// const example = async (a,b) => {
//     return await (a+b)
// }
