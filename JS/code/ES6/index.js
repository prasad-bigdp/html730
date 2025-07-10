// array destructuring
let arr = [5, 6, 7];
let [a, b, c] = arr;
// let x = arr[0]
console.log(a, b, c, arr);
// object destructuring
let obj = {
    name: "shekhar",
    age: 55
}
console.log(obj.name);
let { age } = obj;
// let age = obj.age
console.log(age);

// rest operator
function sum (a, ...b)
{
    console.log(a, b) //5   [4,3,2,1]
    let c = [...[1, 2], ...[3, 4]];
    console.log(c)
}
sum(5, 4, 3, 2, 1);
let [p, q, ...r] = [1, 2, 3, 4, 5, 6];


class Fruit
{
    taste; color; shape;
    constructor(a,b,c)
    {
        this.taste = a;
        this.color = b;
        this.shape = c;
    }
    printData ()
    {
        console.log(this.taste,this.color,this.shape)
    }
}
let apple = new Fruit("sweet","red","round");
let banana = new Fruit("sweet","yellow","cylinder");
console.log(apple);
apple.printData()