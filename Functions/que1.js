// Write a program to genreate a random integer betwnn 0 and 9 included
let num=Math.random();
console.log(num);
// we have any random value in 'num', now, if we multiply num by '10', then it will be one point shift that will become like 3.0702504810114783,  8.838971704837508, 5.791159897619975 etc
let b=num*10;
// Now, to get only single digit, we can get "floor" of that new 'num'
console.log(Math.floor(b)); //Generate any random values between 1 to 9 including 1 and 9

//similarly,if we want to include 10 then we can use ceil func.
console.log(Math.ceil(b));

// for between 1 to 20
let num2=Math.random();
console.log(num2);
let a=num2*20;
console.log(Math.floor(a));