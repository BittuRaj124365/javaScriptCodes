function oneToN(n){
    for (let i=1; i<=n; i++){
        console.log(i);
    }
    console.log();
}
function sum(a,b){
    console.log(a+b);
}
function multiply(a,b){
    return a*b;
}
function absolute(n){
    return Math.abs(n);
}
oneToN(5);
oneToN(10);
sum(19,3);
sum(42+2);
sum(-43,-3);
let x=multiply(2,4);
let y=multiply(1,-10);
console.log(x);
console.log(y);
console.log(multiply(-2,-3));
console.log(absolute(-2));  // return 2
console.log(absolute(-4+2));    // return 2