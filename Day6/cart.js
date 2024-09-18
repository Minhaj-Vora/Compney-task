document.addEventListener('DOMContentLoaded', () => {

    // Function to get cart items from localStorage
    function getCartItems() {
        const cartItems = localStorage.getItem('cart');
        return cartItems ? JSON.parse(cartItems) : [];
    }

    // Function to save cart items to localStorage
    function saveCartItems(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Function to update quantity of an item
    function updateQuantity(productId, increment) {
        let cartItems = getCartItems();
        const item = cartItems.find(item => item.id === productId);
        if (item) {
            item.quantity += increment;
            if (item.quantity <= 0) {
                removeFromCart(productId);
            } else {
                saveCartItems(cartItems);
                populateCartTable(); // Update the table
            }
        }
    }

    // Function to remove an item from the cart
    function removeFromCart(productId) {
        let cartItems = getCartItems();
        cartItems = cartItems.filter(item => item.id !== productId);
        saveCartItems(cartItems);
        populateCartTable(); // Update the table
    }

    // Function to populate table with cart items
    function populateCartTable() {
        const cartItems = getCartItems();
        const tableBody = document.querySelector('table tbody');

        // Clear existing table rows
        tableBody.innerHTML = '';

        // Add a row for each item in the cart
        cartItems.forEach(item => {
            const row = document.createElement('tr');

            // Create and append cells
            row.innerHTML = `
                <td>${item.name}</td>
                <td>
                    <button class="decrease-quantity" prod-id="${item.id}">-</button>
                    ${item.quantity}
                    <button class="increase-quantity" prod-id="${item.id}">+</button>
                </td>
                <td>${item.price}</td>
                <td>${(item.price * item.quantity)}</td>
                <td><button class="remove-item" prod-id="${item.id}">Remove</button></td>
            `;

            tableBody.appendChild(row);
        });

        // Add event listeners for remove buttons
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', () => {
                const productId = button.getAttribute('prod-id');
                removeFromCart(productId);
            });
        });

        // Add event listeners for increase and decrease buttons
        document.querySelectorAll('.increase-quantity').forEach(button => {
            button.addEventListener('click', () => {
                const productId = button.getAttribute('prod-id');
                updateQuantity(productId, 1);
            });
        });

        document.querySelectorAll('.decrease-quantity').forEach(button => {
            button.addEventListener('click', () => {
                const productId = button.getAttribute('prod-id');
                updateQuantity(productId, -1);
            });
        });
    }

    // Call the function to populate the table on page load
    populateCartTable();
});
