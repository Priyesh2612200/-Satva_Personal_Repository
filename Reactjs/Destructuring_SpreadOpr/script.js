let arr = [5,8,6,4,12,77,19,30]

// let a = arr[0]; no need to do this 
// let b = arr[1];

// let [a,b,c]= arr// ////Array Destructuring
// console.log(a,b,c);

// let [a,b,c,...rest]= arr// //Array Destructuring
// console.log(a,b,c,rest);

// let {a,b}={a:4,b:9}// //Obj Destructuring
// console.log(a,b);


//Spread Operators

// let arr1=[6,8,9]
// let obj1={...arr1}
// console.log(obj1);

// let arr1 =[6,8,9]
// function sum(v1,v2,v3){
//     return v1+v2+v3
// }
// console.log(sum(...arr1));

let obj2 = {
    name:"priyesh",
    company:"Satva",
    city:"Savarkundla"
}
console.log({...obj2,name:"Ram"})
