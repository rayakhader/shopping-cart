import React from 'react'

function ProductCard({ product, cartItems, onAddToCart }) {
    function checkDisabled(product) {
        return cartItems.some((item) => item.id === product.id);
    }
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button disabled={checkDisabled(product)} onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
    )
}

export default ProductCard
