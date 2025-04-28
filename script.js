function startCheckout(productName, price, sizeId) {
    document.getElementById('checkoutForm').classList.remove('hidden');
    window.scrollTo(0, document.body.scrollHeight);
}

document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Generate Random Order Number
    const orderNum = 'PK' + Math.floor(100000 + Math.random() * 900000);

    // Hide Form, Show Success
    document.getElementById('checkoutForm').classList.add('hidden');
    document.getElementById('orderSuccess').classList.remove('hidden');
    document.getElementById('orderNumber').textContent = orderNum;
});