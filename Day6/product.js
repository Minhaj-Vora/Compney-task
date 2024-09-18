document.addEventListener('DOMContentLoaded', () => {


    function addToCart(productId, productName, productPrice) {

        let existingCart = localStorage.getItem('cart');
        
        let cart = JSON.parse(existingCart) || [];
        
        const existingItem = cart.find((item) => {
            return item.id === productId
        });
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: productId,
                name: productName,
                price: productPrice,
                quantity: 1
            });
        }
        

        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Item added to cart!');
    }


    document.querySelectorAll('.add-to-cart').forEach((button) => {
        button.addEventListener('click', () => {

            const productElement = button.closest('.layout-item');
            const productId = productElement.querySelector('p#p-name').textContent; 
            const productName = productElement.querySelector('p#p-name').textContent;
            const productPrice = parseInt(productElement.querySelector('p#p-price').textContent);
            
            addToCart(productId, productName, productPrice);
        });
    });
});
