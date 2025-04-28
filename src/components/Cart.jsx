import React from 'react'

function Cart({ items }) {
    return (
        <div className='cart'>
            <h2>Cart</h2>
            {items.length === 0 ? (
                <p>No Items in cart. </p>
            ) : (
                <ul>
                    {items.map((item) => {
                        return <li key={item.id}>{item.name} - ${item.price}</li>
                    })}
                </ul>
            )}

        </div>
    )
}

export default Cart
