/* simple while loop */
let x = 25;
while (x <= 10)
{
    console.log(x);
    x++;
}
/* simple do while loop */
let y = 25;
do
{
    console.log(y);
    y++;
} while (y <= 10)
    
/* simple for loop*/
for (let z = 1; z <= 10; z++)
{
    console.log(z)
}

/* use any loop, to print name in reverse in console (PRASAD) */
let name = "PRASAD";
for (let i = name.length - 1; i >= 0; i--)
{
    console.log(name.charAt(i))
}

let arr = [5, 6, 7, 8, 9];
for (let a = 0; a < arr.length; a++)
{
    console.log(arr[a]);
}
/* for...of */
for (let x of arr)
{
    console.log(x)
}

/* for...in */
for (let x in arr)
{
    console.log(x);
}
let str=""
for (let i = 1; i <= 4; i++)
{
    str=''
    for (let j = 1; j <= i; j++)
    {
        str = str +" "+ j;
    }
    console.log(str)
}









