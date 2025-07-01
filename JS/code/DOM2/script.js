const ele = document.getElementById('heading');
console.log(ele.textContent)
const image = document.getElementById('img');
const btn = document.getElementById('btn');
const inp = document.getElementById('na')
function change ()
{
    image.src = "./bulb-on.png"
    ele.style.textDecoration = "2px solid green underline"
    ele.style.color = "orange";
    btn.style.backgroundColor = "black";
    btn.style.color = "white"
    ele.style.animation = "rotate 0.5s ease infinite "
    ele.textContent = inp.value
}
let isDark = false
function dark ()
{
    if (isDark)
    {
        isDark = false;
   document.getElementById("btn2").textContent = "change to dark"
    }
    else
    {
        isDark = true;
        document.getElementById('btn2').textContent ="change to light"
    }
    document.body.classList.toggle('dark');

}