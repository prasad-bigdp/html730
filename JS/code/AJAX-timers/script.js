// setTimeout(function ()
// {
//     console.log("hello world")
// }, 1)
let c = 0;
function incr ()
{
    c++;
    document.getElementById('count').textContent = c
    if (c == 5000)
    {
        clearInterval(x)
    }
}
let x =setInterval(incr,1)
for (let i = 1; i <= 10000; i++)
{
    console.log("bye world")
}