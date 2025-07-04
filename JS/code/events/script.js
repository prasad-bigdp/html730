document.getElementById('gp').addEventListener('click', () => console.log("gp called"),true)
document.getElementById('p').addEventListener('click', () => console.log("p called"),true)
document.getElementById('c').addEventListener('click', () => console.log("c called"),true)
document.getElementById('b').addEventListener('click', () => console.log("b called"), true)

document.getElementById('box').addEventListener('click', function (e)
{
    console.log(e.target.textContent+" is called ")
})