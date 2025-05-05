import React from 'react'

function Cart({ items, onRemoveItem }) {
    const totalPrice = items.reduce((acc, item) => acc + item.price, 0)
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
            <p>Total: ${totalPrice.toFixed(2)}</p>

        </div >
    )
}

export default Cart
