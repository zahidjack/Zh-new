const products = [
  {
    name: "Orchid Dress 1",
    price: "MMK 45,000",
    image: "product1.jpg"
  },
  {
    name: "Orchid Dress 2",
    price: "MMK 55,000",
    image: "product2.jpg"
  },
  {
    name: "Orchid Dress 3",
    price: "MMK 65,000",
    image: "product3.jpg"
  }
];

const list = document.getElementById('product-list');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');

products.forEach(product => {
  const item = document.createElement('div');
  item.classList.add('product-item');
  item.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.price}</p>
    <button onclick="openForm()">Buy Now</button>
  `;
  list.appendChild(item);
});

function openForm() {
  modal.style.display = "block";
}

closeModal.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Form Submit
document.getElementById('shipping-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Please scan KBZ Pay QR Code to complete your purchase.');
  window.location.href = "kbzpay.png"; // ပြပြီးမယ်၊ စိတ်ကြိုက် URL link ပြောင်းလို့ရ
});