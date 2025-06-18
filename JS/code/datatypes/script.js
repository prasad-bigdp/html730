let a = 2
console.log(a)
console.log(typeof a); //number
a = "prasad";
console.log(typeof a); //string
let b = 10.8145;
console.log(b.toFixed(2)) // round figure the value upto 2 digits after decimal
console.log(b.toPrecision(3)) // round figure the value upto total digits
b = 25;
console.log(b.toString(2))// converts number to string of binary

//Math Methods
console.log(Math.max(5, 6, 1, 2, 9)) // returns maximum value
console.log(Math.min(5, 6, 1, 2, 9))  // returns minimum value
console.log(Math.pow(2, 3))  // returns a power b
console.log(Math.sqrt(16)) //returns square root
console.log(Math.cbrt(27)) //returns cube root
console.log(Math.abs(-10)) //returns always positive value
console.log(Math.ceil(-1.16)) // returns nearest larger value
console.log(Math.floor(1.8)) // returns nearest lower value
console.log(Math.round(2.53)) //rounds upto nearest integer
console.log(Math.round(Math.random() * 10000)) // returns random number between 0 to 1
// generate 4 digit OTP using math random
// generate dice value in ludo
console.log(Math.ceil(Math.random() * 6))






let str = "The time is 5 o' clock";
let quote = 'The gandhi said ,"Enjoy your life"'
console.log(str, typeof str)
let p = 10, q = 20;
console.log("the sum of "+p+" and "+q+" is "+(p+q))
console.log(`The sum of ${p} and ${q} is ${p + q}`)
let cost = 5, quantity = 10;
// The total of 10 apples with each cost 5 rupees is 50 rupees
console.log(`The total of ${quantity} apples with each cost ${cost} rupees is ${cost * quantity} rupees`) //Template literal

//strings have some functions
str = "javascript";
console.log(str.toUpperCase()) //JAVASCRIPT
console.log(str) //javascript because strings are immutable
console.log(str.toLowerCase())
console.log(str.startsWith('jav')) //true
console.log(str.endsWith('jav')) //false
console.log(str.length) //10
console.log(str.indexOf('a')) //1
console.log(str.lastIndexOf('a')) //3
console.log(str.charAt(2)) //v
console.log(str.concat(" info")) //javascript info
console.log(str.replaceAll('a', 'p')) //jpvpscript
console.log("     prasad      ".trim()) //prasad
console.log("this is js strings".split(' ')) //["this","is","js","strings"]

// iii. Boolean:

let x = true
console.log(typeof x)

// undefined and null
// undefined means accidental absence of value, it means value is defined but not initialised. it expects value in future

let s;
console.log(s)

// null means intentional absense of value. there is no future value

let z = null;


































