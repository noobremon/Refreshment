document.getElementById("placeOrderBtn").addEventListener("click", function() {
    const items = document.querySelectorAll("input[type='number']");
    let orderSummary = "";
    let totalPrice = 0;

    items.forEach(item => {
        const quantity = parseInt(item.value);
        const itemName = item.getAttribute("data-item");
        const itemPrice = parseFloat(item.getAttribute("data-price"));

        if (quantity > 0) {
            const itemTotal = quantity * itemPrice;
            orderSummary += `${quantity} x ${itemName} = $${itemTotal.toFixed(2)}\n`;
            totalPrice += itemTotal;
        }
    });

    if (orderSummary === "") {
        alert("Please select at least one item to order.");
    } else {
        orderSummary += `\nTotal: $${totalPrice.toFixed(2)}`;
        if (confirm("Order Summary:\n\n" + orderSummary + "\n\nPlace this order?")) {
            alert("Thank you for your order!");
            window.location.reload(); // Return to the main menu after placing the order
        }
    }
});
