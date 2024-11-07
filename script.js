let cart = [];
let totalPrice = 0;

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  totalPrice += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");

  cartItems.innerHTML = "";
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - Rp ${item.price}`;
    cartItems.appendChild(li);
  });

  totalPriceElement.textContent = totalPrice;
}




