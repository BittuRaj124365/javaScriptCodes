//Objects:- Object is kind of like a map/dictionary where we have key-value pairs
var details=["Bittu Raj",17,92.1,false]
console.log(details);// Normal value like name, age, marks and booleanv

//Now, if we want to describe their key 
let x={
    Name:"Bittu Raj",Age:17,Marks:94,isMarried:false
};
console.log(x); // Now, we have their value according to their keys respectively
// we can also get value of keys
console.log(x.Name);    // Bittu Raj
console.log(x.isMarried);   // false
console.log(x.Age); // 17
console.log(x.Marks);   // 94

let y={
    Name:"Bittu Raj",
    Age:18,
    Roll:84,
    isMarried:false
};
// using forIn loop
for (const key in y){
    if(Object.hasOwnProperty.call(y,key)){
        console.log(key,y[key]);
    }
}
// or 
for (const key in y){
    console.log(key,y[key]);
}