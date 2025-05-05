import React from 'react'
import ProductCard from './ProductCard'

function ProductGrid({ products, cartItems, onAddToCart }) {
    return (
        <div className='product-grid'>
            {
                products.map((product) => (
                    <ProductCard key={product.id} cartItems={cartItems} product={product} onAddToCart={onAddToCart} />
                ))
            }

        </div>
    )
}

export default ProductGrid
