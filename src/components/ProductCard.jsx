import React from 'react'

function ProductCard({ product, onAddToCart }) {
    const isDisabled = product.added
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button disabled={isDisabled} onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
    )
}

export default ProductCard
