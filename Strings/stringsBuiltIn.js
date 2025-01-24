let a="Bittu Raj";
console.log(a.toUpperCase());   // convert whole strings to upper case letter

//Note:- There will be no change in origional string after changing to upperCase or lowerCase of Strings. for ex:-

console.log(a); /* we suppose to get UpperCase letter of string 'a', but will get no change in our string like 
Expected output:-BITTU RAJ, main ouptut:- Bittu Raj */

console.log(a.toLowerCase());// convert to lower case letter

// Now if we store the updated strings in another string then we can get the updated string thorw new created string

let b=a.toUpperCase();
console.log(b); // BITTU RAJ
let c=a.toLowerCase();
console.log(c); // bittu raj

a=b;    // b(upperCase) assigned to a
console.log(a);// BITTU RAJ
a=c;    // c(lowerCase) assigned to a
console.log(a); // bittu raj

// Trim function:- remove starting and ending spaces only, But all the size will be treated in counting the length

let d="   Bittu Raj   ";
console.log(d); //"   Bittu Raj   "
console.log(d.trim());  // Bittu Raj
console.log(d.length);  // 
// Now we can store the trimmed strng in another string
let e=d.trim();  // Now e="Bittu Raj"
console.log(e); // Bittu Raj

//And there are many functions for strings