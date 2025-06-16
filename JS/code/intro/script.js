//This is single line comment
/* multi
 line
  comment */
console.log("bye world")

function fun()
{
    if (true)
    {
        var x = 10; let y = 10;
        var x = 15; //redeclaring
        x = 20; //reassigning
        y = 20;
    }
    console.log(x) //10
    console.log(y) //error
}