import React from 'react'

function Cart({ items, onRemoveItem }) {
    return (
        <div className='cart'>
            <h2>Cart</h2>
            {items.length === 0 ? (
                <p>No Items in cart. </p>
            ) : (
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            {item.name} - ${item.price}
                            <button onClick={() => onRemoveItem(item)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )
            }

        </div >
    )
}

export default Cart
