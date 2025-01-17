// Normal printing of no.
console.log("Normal printing without any delay.");
let n=5;  
for (let i=1; i<=n; i++){
    console.log(i);
}
console.log("timeDelay.");
// Now, if we want the no in delay of some seconds then 
for (let j=1; j<=5; j++){
    setTimeout(function(){
        console.log(j);
    },j*1000)
}