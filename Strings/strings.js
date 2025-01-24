let a="Bittu Raj";
console.log(a,a.length); // length is the method to get length
// for getting particular string of a

// using indexes
console.log("Using indexes");
console.log(a[0])   //B
console.log(a[2])   // t
console.log(a[4]);  //u
console.log(a[5]);  // will print space
console.log(a[8]);  //j
console.log(a[9]);  //undefined because no 9th index's element

// using for loop
console.log("Using for loop");
for (let i=0; i<a.length; i++){
    console.log(a[i]);
}
// using forOf loop
console.log("Using forOf loop")
for (const ele of a){
    console.log(ele);
}
// Note:- for each loop does not work for strings