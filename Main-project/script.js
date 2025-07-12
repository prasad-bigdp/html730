const productsDiv = document.getElementById("products");
async function fetchData ()
{
    try
    {
        const res = await fetch(`https://fakestoreapi.com/products`);
    const data = await res.json();
    displayData(data)
    }
    catch (err)
    {
        console.log(err)
    }
}
fetchData()
function displayData (data)
{
    data.forEach((ele,ind) =>
    {
        const productDiv = document.createElement("div")
        productDiv.classList.add('product')
        const productImage = document.createElement("img")
        productImage.src = ele.image;
        productImage.alt = ele.title;
        const productPrice = document.createElement("p")
        productPrice.textContent = "Price: ₹"+ele.price
        const produtcTitle = document.createElement("h2")
        produtcTitle.textContent = ele.title
        const productButton = document.createElement("button")
        productButton.textContent = "Add to Cart"
        productButton.addEventListener("click", () => addToCart(ele))
				productDiv.append(
					productImage,
					produtcTitle,
					productPrice,
					productButton,
				)
				productsDiv.appendChild(productDiv)
   })
}

$(document).ready(function(){
  $(".slider").slick({
      dots: true,
      arrows: true,
      autoplay:true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
	})
});