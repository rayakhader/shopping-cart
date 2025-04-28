import React from 'react'
import products from '../data/products'
import ProductCard from './ProductCard'

function ProductGrid({ onAddToCart }) {
    return (
        <div>
            {
                products.map((product) => (
                    <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                ))
            }

        </div>
    )
}

export default ProductGrid
