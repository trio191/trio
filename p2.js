function goBack() {
    window.history.back();
}

document.getElementById('trackOrderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const phone = document.getElementById('phone').value;
    const orderId = document.getElementById('orderId').value;

    // Implement the logic to track the order here
    // For demonstration, we'll just log the values to the console
    console.log('Phone:', phone);
    console.log('Order ID:', orderId);

    // You can add code here to send these values to your server for order tracking
});
