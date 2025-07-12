const cartItemsDiv = document.getElementById("cartItemsDiv");
    const cartItemsArr = JSON.parse(localStorage.getItem("cartItems"))

function displayData ()
{
    cartItemsDiv.textContent = ''
		cartItemsArr.forEach((ele, ind) => {
			const cartProductDiv = document.createElement("div")
			cartProductDiv.classList.add("cartProduct")
			const productImage = document.createElement("img")
			productImage.src = ele.image
			productImage.alt = ele.title
			const productPrice = document.createElement("p")
			productPrice.textContent = "Price: ₹" + ele.price
			const produtcTitle = document.createElement("h2")
			produtcTitle.textContent = ele.title
			const productButton = document.createElement("button")
			productButton.textContent = "delete"
			productButton.addEventListener("click", function () {
				deleteEle(ind)
			})
			cartProductDiv.append(
				productImage,
				produtcTitle,
				productPrice,
				productButton,
			)
			cartItemsDiv.appendChild(cartProductDiv)
		})
}
function deleteEle (ind)
{
    console.log("hi")
    cartItemsArr.splice(ind, 1)
    localStorage.setItem("cartItems", JSON.stringify(cartItemsArr))
    displayData()
}
displayData()