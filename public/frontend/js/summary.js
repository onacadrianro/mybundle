document.addEventListener('DOMContentLoaded', function () {
    var summaryList = document.getElementById('summary-list');
    var totalCostElement = document.getElementById('total-cost');
    if (!summaryList || !totalCostElement)
        return;
    var cartItems = JSON.parse(localStorage.getItem('cartItems') || '{}');
    function saveCartItems() {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
    function updateSummaryDisplay() {
        summaryList.innerHTML = '';
        var totalCost = 0;
        for (var item in cartItems) {
            var listItem = document.createElement('li');
            listItem.dataset.item = item;
            if (cartItems[item].quantity > 1) {
                listItem.textContent = "".concat(item, " (").concat(cartItems[item].quantity, ")");
            }
            else {
                listItem.textContent = item;
            }
            var removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-item');
            listItem.appendChild(removeButton);
            summaryList.appendChild(listItem);
            totalCost += cartItems[item].cost * cartItems[item].quantity;
        }
        totalCostElement.textContent = "Total Cost: $".concat(totalCost.toFixed(2));
    }
    function removeItemFromSummary(itemName) {
        if (cartItems[itemName]) {
            cartItems[itemName].quantity--;
            if (cartItems[itemName].quantity === 0) {
                delete cartItems[itemName];
            }
        }
        saveCartItems();
        updateSummaryDisplay();
    }
    summaryList.addEventListener('click', function (event) {
        var target = event.target;
        if (target.classList.contains('remove-item')) {
            var listItem = target.closest('li');
            var itemName = listItem === null || listItem === void 0 ? void 0 : listItem.dataset.item;
            if (itemName) {
                removeItemFromSummary(itemName);
            }
        }
    });
    // Initial display update
    updateSummaryDisplay();
});
