const products = [
  {
    name: "Red Embroidered Kurta",
    price: "Rs. 4,500",
    image: "product1.jpg"
  },
  {
    name: "Elegant White Kurti",
    price: "Rs. 3,800",
    image: "product2.jpg"
  },
  {
    name: "Traditional Green Dress",
    price: "Rs. 5,200",
    image: "product3.jpg"
  }
];

function displayProducts() {
  const list = document.getElementById('product-list');
  products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
    productItem.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
    `;
    list.appendChild(productItem);
  });
}

window.onload = displayProducts;