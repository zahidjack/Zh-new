function orderNow(productName) {
  document.getElementById('order-form').scrollIntoView({ behavior: "smooth" });
}

document.getElementById('shippingForm').addEventListener('submit', function(event){
  event.preventDefault();
  
  const orderNumber = 'PK-' + Math.floor(100000 + Math.random() * 900000);
  document.getElementById('generatedOrder').textContent = orderNumber;
  document.getElementById('orderNumber').style.display = 'block';
});