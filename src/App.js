
import { useState } from 'react';
import './App.css';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import CheckoutForm from './components/CheckoutForm';
import Products from './data/products.js';
function App() {
  const[cartItems, setCartItems] = useState([])
  const[products,setProducts] = useState(Products)
  function handleAddToCart(product){
    setCartItems([
      ...cartItems,
      product
    ])
    const items = products.map((item)=>{
      if(item.id === product.id){
        return {
      ...item,
       added:true
      } 
    }
    return item
    })
    setProducts(items)


  }
  function handleRemoveItem(product){
    setCartItems(cartItems.filter((item)=>item.id !== product.id))
  }
 
  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <div className='container'>
        <ProductGrid products={products} onAddToCart={handleAddToCart}/>
        <Cart items={cartItems} onRemoveItem={handleRemoveItem} />
        <CheckoutForm />
      </div>
      
    </div>
  );
}

export default App;
