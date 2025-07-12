const cartItems = JSON.parse(localStorage.getItem("cartItems")) ?? []
let cartCount = cartItems.length;
function addToCart (item)
{
    cartItems.push(item)
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    cartCount++;
    document.getElementById('count').textContent = cartCount
}