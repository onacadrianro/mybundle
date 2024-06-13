document.addEventListener('DOMContentLoaded', () => {
    const summaryList = document.getElementById('summary-list');
    const totalCostElement = document.getElementById('total-cost');

    if (!summaryList || !totalCostElement) return;

    let cartItems: { [key: string]: { quantity: number, cost: number } } = JSON.parse(localStorage.getItem('cartItems') || '{}');

    function saveCartItems() {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    function updateSummaryDisplay() {
        summaryList.innerHTML = '';
        let totalCost = 0;

        for (const item in cartItems) {
            const listItem = document.createElement('li');
            listItem.dataset.item = item;
            if (cartItems[item].quantity > 1) {
                listItem.textContent = `${item} (${cartItems[item].quantity})`;
            } else {
                listItem.textContent = item;
            }
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-item');
            listItem.appendChild(removeButton);
            summaryList.appendChild(listItem);

            totalCost += cartItems[item].cost * cartItems[item].quantity;
        }

        totalCostElement.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
    }

    function removeItemFromSummary(itemName: string) {
        if (cartItems[itemName]) {
            cartItems[itemName].quantity--;
            if (cartItems[itemName].quantity === 0) {
                delete cartItems[itemName];
            }
        }
        saveCartItems();
        updateSummaryDisplay();
    }

    summaryList.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.classList.contains('remove-item')) {
            const listItem = target.closest('li');
            const itemName = listItem?.dataset.item;
            if (itemName) {
                removeItemFromSummary(itemName);
            }
        }
    });

    // Initial display update
    updateSummaryDisplay();
});
