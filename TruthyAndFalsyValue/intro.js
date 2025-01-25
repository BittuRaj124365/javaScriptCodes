// falsy value:- null,NaN(Not a number),undefined
// Truthy value:- Strings,all real no(ex:-0.1,0.2,1.1,1.2)etc and other than falsy value
// undefined is falsy value so else condition will be hit
if(undefined){
    console.log("Hii");
}else {
    console.log("Bii");
}
    // NaN is a falsy value so else condition will be hit
if(NaN){
        console.log("Hii");
}else {
        console.log("Bii");
}
// o is falsy value so else conditon will be hit
if(0){
    console.log("Hii");
}else {
    console.log("Bii");
}
// 0.1 is a real no that is falsy so else conditon will be hit
if(0.1){
        console.log("Hii");
}else {
        console.log("Bii");
}
 // 1.3 is also real so else condition will be hit
if(1.3){
        console.log("Hii");
}else {
        console.log("Bii");
}
  //1 is integer that is truthy value, so if conditon will hit
if(1){
    console.log("Hii");
}else {
    console.log("Bii");
}
    // null is in inverted comma that will be treated as String and String is falsy value so else condition will be hit
if("null"){
    console.log("Hii");
}else {
    console.log("Bii");
}
    // null is falsy value so else condition will be hit
if(null){
    console.log("Hii");
}else {
    console.log("Bii");
}

// Also, undefined which is not defined for example

// throw an error "a is not defined"because a is not defined in this programme

//console.log(a)  

// Now if we try to get the data type of 'a' then you will get 'undefined' that means a variable which is not defined called 'undefined' data type
console.log(typeof(a))  // Undefined