document.addEventListener('DOMContentLoaded', function () {
    var medalCards = document.querySelectorAll('.medal-card button');
    var bundleList = document.getElementById('bundle-list');
    var checkoutButton = document.getElementById('checkout-button');
    var cartIcon = document.querySelector('.cart-icon');
    var cartDropdown = document.querySelector('.selected-bundle');
    if (!bundleList || !checkoutButton || !cartIcon || !cartDropdown)
        return;
    var cartItems = JSON.parse(localStorage.getItem('cartItems') || '{}');
    function saveCartItems() {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
    function addItemToBundle(itemName, itemCost) {
        if (cartItems[itemName]) {
            cartItems[itemName].quantity++;
        }
        else {
            cartItems[itemName] = { quantity: 1, cost: itemCost };
        }
        saveCartItems();
        updateCartDisplay();
    }
    function removeItemFromBundle(itemName) {
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
        var itemCount = 0;
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
            bundleList.appendChild(listItem);
            itemCount += cartItems[item].quantity;
        }
        if (itemCount > 0) {
            cartDropdown.style.display = 'block';
        }
        else {
            cartDropdown.style.display = 'none';
        }
    }
    medalCards.forEach(function (button) {
        button.addEventListener('click', function () {
            var card = button.closest('.medal-card');
            var itemName = card === null || card === void 0 ? void 0 : card.getAttribute('data-item');
            var itemCost = card === null || card === void 0 ? void 0 : card.getAttribute('data-cost');
            if (itemName && itemCost) {
                addItemToBundle(itemName, parseFloat(itemCost));
            }
        });
    });
    bundleList.addEventListener('click', function (event) {
        var target = event.target;
        if (target.classList.contains('remove-item')) {
            var listItem = target.closest('li');
            var itemName = listItem === null || listItem === void 0 ? void 0 : listItem.dataset.item;
            if (itemName) {
                removeItemFromBundle(itemName);
            }
        }
    });
    checkoutButton.addEventListener('click', function () {
        window.location.href = '/summary';
    });
    // Initial display update
    updateCartDisplay();
});
