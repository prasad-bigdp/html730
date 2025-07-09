const inputEle = document.getElementById("inp");
document.getElementById('search').addEventListener('click',async function ()
{
    try
    {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputEle.value}`)
    const data = await res.json();
    displayData(data);
    }
    catch (err)
    {
        console.log(err)
    }
})

function displayData (data)
{
    document.getElementById("pokemon").textContent=''
    const image = document.createElement('img');
    image.src = data.sprites.front_default
    const title = document.createElement('h2');
    title.textContent = data.name
    const height = document.createElement('p');
    height.textContent = "height: "+data.height
    const weight = document.createElement('p');
    weight.textContent = "weight: " + data.weight;
    document.getElementById('pokemon').append(image, title, height, weight);
}