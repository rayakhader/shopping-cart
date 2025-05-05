
import { useState } from 'react';
import './App.css';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import CheckoutForm from './components/CheckoutForm';
import Products from './data/products.js';
function App() {
  const[cartItems, setCartItems] = useState([])
  function handleAddToCart(product){
    setCartItems([
      ...cartItems,
      product
    ])
  }
  function handleRemoveItem(product){
    setCartItems(cartItems.filter((item)=>item.id !== product.id))
  }
  
  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <div className='container'>
        <ProductGrid products={Products} cartItems={cartItems} onAddToCart={handleAddToCart}/>
        <Cart items={cartItems} onRemoveItem={handleRemoveItem} />
        <CheckoutForm />
      </div>
      
    </div>
  );
}

export default App;
