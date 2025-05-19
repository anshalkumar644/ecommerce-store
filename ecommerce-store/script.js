const products = [
  { id: 1, name: "T-Shirt", price: 19.99, img: "https://via.placeholder.com/200" },
  { id: 2, name: "Cap", price: 9.99, img: "https://via.placeholder.com/200" },
  { id: 3, name: "Shoes", price: 49.99, img: "https://via.placeholder.com/200" }
];

const cart = [];

function renderProducts() {
  const container = document.getElementById('products');
  container.innerHTML = '';
  products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  document.getElementById('cart-count').textContent = cart.length;
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartList.appendChild(li);
    total += item.price;
  });
  document.getElementById('total').textContent = total.toFixed(2);
}

function checkout() {
  alert('Redirecting to payment (this would be Stripe/PayPal in production).');
}

renderProducts();
