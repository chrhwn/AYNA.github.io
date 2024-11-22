document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        let cartCount = document.querySelector('.cart-count');
        let currentCount = parseInt(cartCount.textContent);
        cartCount.textContent = currentCount + 1;
    });
});