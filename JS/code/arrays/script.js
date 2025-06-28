let arr = [5, "prasad", true, 2, 1]
console.log(arr);
console.log(arr[10])
arr[100] = 25;
console.log(arr.length);
arr = [5, 4, 3];
console.log(arr.length)

//Array methods
arr.push(10,2,1,3,4,6);
console.log(arr);
arr.pop();
console.log(arr)
arr.unshift(1, 2, 3);
console.log(arr)
arr.shift()
console.log(arr)
//splice
arr = [10, 20, 30, 40, 50];
arr.splice(3,1,25,35,45)
console.log(arr)

arr = [10, 20, 30, 40, 50]
console.log(arr)
arr.reverse()
console.log(arr);
console.log(arr.indexOf(50))

// for Each

arr.forEach(function (ele,i)
{
    console.log(ele,i)
})
// using for each print each value sqaure
arr.forEach(function (ele,i)
{
    console.log(ele*ele)
})

arr = ["prasad", "john", "raju", "seetha"];

let x= arr.forEach(function (str) {
return str.charAt(0)
})
console.log(x);
x = arr.map(function (str) {
	return str.charAt(0)
})
console.log(x);

arr = [5, 20, 3, 40, 7];
x= arr.map(function (ele)
{
    return ele%2==0 
})
console.log(x)
arr = [5, 20, 3, 40, 7]
x = arr.filter(function (ele) {
	return ele % 2 == 0
})

console.log(x)

arr = ["john cena", "nithin agarwal", "kagal agarwal", "ananya pandey"]
// return only people whose last name is agarwal
x = arr.filter(function (ele)
{
    return ele.endsWith("agarwal")
})
console.log(x)


// find
arr = [10, 20, 30, 40, 50];
x = arr.find(function (ele, ind)
{
    return ele > 30;
})
console.log(x)

console.log(arr.includes(30))
arr = [10, 20, 30, 40, 50]
x = arr.every(function (ele, ind) {
	return ele > 0
})
console.log(x)



arr = [20, 30, 50, 10, 5];
console.log(arr.sort());
console.log(arr.sort((a, b) => b-a));

arr = [10, 20, 30, 40, 50];
res=arr.reduce(function (prev,curr)
{
    return prev + curr;
},10000)
console.log(res)



















































