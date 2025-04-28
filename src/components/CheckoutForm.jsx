import React, { useState } from 'react'

function CheckoutForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    function handleSubmit(e) {
        e.preventDefault();
        alert(`Order placed!\nName: ${name}\nEmail: ${email}`)
        setName('')
        setEmail('')
    }
    return (
        <form className='checkout-form' onSubmit={(e) => handleSubmit(e)}>
            <h2>Checkout</h2>
            <input type="text" name='name' placeholder='Your Name...' value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="email" name='email' placeholder='Your Email...' value={email} onChange={(e) => setEmail(e.target.value)} required />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default CheckoutForm
