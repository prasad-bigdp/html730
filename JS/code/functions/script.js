// // simple function
// function display ()
// {
//     console.log(" this is a simple function")
// }
// display()
// // function with parameters
// function add (a, b)
// {
//     console.log(a + b);
// }
// add(2, 3);
// // function with less arguments
// function sub (a, b)
// {
//     console.log(a-b)
// }
// sub(5);

// // function with default parameter values
// function mul(a=7, b=2) {
// 	console.log(a*b)
// }
// mul();

// // function as a variable
// function display2 ()
// {
//     console.log("simple function")
// }
// console.log(display2);
// let x = 20;
// let display3 = function ()  // function expression
// {
//     console.log("simple function")
// }
// console.log(display3)

// // convert following fn into fn expression
// function add2 (a, b)
// {
//     console.log(a+b)
// }
// let add3 = function (a, b)
// {
//     console.log(a+b)
// }
// add3(2, 3)
// let add4 = (a, b) => { console.log(a + b); } // arrow function

// // functions can also return values
// function sum (a, b)
// {
//     return a + b;
// }
// let res= sum(5,3)
// console.log(res)
// //convert above code as fn expression
// let sum2 = function (a, b)
// {
//     return a + b;
// }

// // convert to arrow
// let sum3 = (a, b) => { return a + b } 





// let str = "prasad",str2=''
// let convertString = (a) =>
// {
//     for (let j = 0; j < str.length; j++)
//     {
//         if (j % 2 == 0) {
// 					str2 = str2 + str.charAt(j).toLowerCase()
//         }
//         else
//         {
//             str2 = str2 + str.charAt(j).toUpperCase()
//         }
//     }
// }

// convertString(str)
// console.log(str2)




let ch = 5;
switch (ch)
{
    case 1: add(5,3); break;
    case 2: sub(5, 3); break;
    case 3: mul(5, 3); break;
    case 4: div(5, 3); break;
    default: console.log("enter value input");
}
const add = (a, b) => console.log(`The sum is ${a + b}`, "The sum is " + (a + b))
const sub = (a, b) =>
	console.log(`The sum is ${a - b}`, "The sum is " + (a - b))
const mul = (a, b) =>
	console.log(`The sum is ${a * b}`, "The sum is " + (a * b))
const div = (a, b) =>
	console.log(`The sum is ${a / b}`, "The sum is " + (a / b))


    

function printLength (s)
{
    console.log(s.length)
}
function sample (fun)
{
    fun("prasad") 
}
sample(printLength)




function outer ()
{
    let i = 10;
    function inner ()
    {
        console.log(++i)
    }
    return inner;
}
let res = outer();
console.log(res)

res() //11
res() //12
