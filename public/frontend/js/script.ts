document.addEventListener('DOMContentLoaded', () => {
    const medalCards = document.querySelectorAll('.medal-card button');
    const bundleList = document.getElementById('bundle-list');
    const checkoutButton = document.getElementById('checkout-button');
    const cartIcon = document.querySelector('.cart-icon');
    const cartDropdown = document.querySelector('.selected-bundle') as HTMLElement;

    if (!bundleList || !checkoutButton || !cartIcon || !cartDropdown) return;

    let cartItems: { [key: string]: { quantity: number, cost: number } } = JSON.parse(localStorage.getItem('cartItems') || '{}');

    function saveCartItems() {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    function addItemToBundle(itemName: string, itemCost: number) {
        if (cartItems[itemName]) {
            cartItems[itemName].quantity++;
        } else {
            cartItems[itemName] = { quantity: 1, cost: itemCost };
        }
        saveCartItems();
        updateCartDisplay();
    }

    function removeItemFromBundle(itemName: string) {
        if (cartItems[itemName]) {
            cartItems[itemName].quantity--;
            if (cartItems[itemName].quantity === 0) {
                delete cartItems[itemName];
            }
        }
        saveCartItems();
        updateCartDisplay();
    }

    function updateCartDisplay() {
        bundleList.innerHTML = '';
        let itemCount = 0;

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
            bundleList.appendChild(listItem);
            itemCount += cartItems[item].quantity;
        }

        if (itemCount > 0) {
            cartDropdown.style.display = 'block';
        } else {
            cartDropdown.style.display = 'none';
        }
    }

    medalCards.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.medal-card');
            const itemName = card?.getAttribute('data-item');
            const itemCost = card?.getAttribute('data-cost');
            if (itemName && itemCost) {
                addItemToBundle(itemName, parseFloat(itemCost));
            }
        });
    });

    bundleList.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.classList.contains('remove-item')) {
            const listItem = target.closest('li');
            const itemName = listItem?.dataset.item;
            if (itemName) {
                removeItemFromBundle(itemName);
            }
        }
    });

    checkoutButton.addEventListener('click', () => {
        window.location.href = '/summary';
    });

    // Initial display update
    updateCartDisplay();
});
