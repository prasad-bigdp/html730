// https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=16a38d83af836c90ee6837bcc746a9d6&units=metric

const inputEle = document.getElementById('inp');
const outputDiv = document.getElementById('output')
document.getElementById('btn').addEventListener('click', function ()
{
    const cityName = inputEle.value
    fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=16a38d83af836c90ee6837bcc746a9d6&units=metric`,
    )
        .then((res)=>res.json())
        .then((data) =>
        {
            const p = document.createElement('p');
            p.innerHTML = "Your city temparature is :" + data.main.temp + "<sup>o</sup> c "
            outputDiv.appendChild(p);
            inputEle.value=''
        })
        .catch((err)=>console.log(err))
})