document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const item = document.getElementById('item').value;
    const quantity = parseInt(document.getElementById('quantity').value);

    let price = 0;
    if (item === "Scone") price = 10;
    if (item === "Chocolate Cupcake") price = 12;
    if (item === "Jam Tart") price = 8;
    if (item === "Peanut Brittle") price = 5;

    const total = price * quantity;

    // Save order to localStorage
    const order = { name, item, quantity, total };
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Show confirmation
    document.getElementById('confirmation').innerText =
        `Thank you, ${name}! Your order of ${quantity} ${item}(s) totaling R${total} has been placed.`;
    
    // Reset form
    document.getElementById('orderForm').reset();
});
