let obj = {
	run: function () {
		console.log(`${this.name} I'm running`)
	},
	name: "PRASAD",
	job: "Developer",
	email: "a@a.com",
}
console.log(obj.name, obj['name'])
obj.run();
obj.phno = 8898989;
console.log(obj.address) //undefined
// seal and freeze
// Object.seal(obj);
// console.log(obj)
// obj.fname = "raj"
// obj.name="raj"
// console.log(obj)
Object.freeze(obj);
console.log(obj)
obj.fname = "x"
obj.name = "raj"
console.log(obj)


//operators
a = 3, b = 2;
console.log(a + b, a - b, a * b, a / b, a % b, a ** b) // arithematic
console.log(a > b && a > 0, a > b || a > 0, !(a > 0)) //logical
console.log(a > b, a < b, a == b, 2 == '2', 2 === '2', 2 != '2', 2 !== '2');
// relational
console.log(++a, a++, --a, a--)  //4  4 4 4 -- incremenet, decrement
let c = (a > b) ? a : b;  // conditional or ternary operator
console.log(c); //3
console.log(2 + +'2')  //4
console.log(typeof 'prasad') //string
console.log(a ?? b) //nullish coelsion operator  -- if first value is undeind or null, it will choose second value else first value
a = 10, b = 5;
c = a ?? b;
console.log(c);





