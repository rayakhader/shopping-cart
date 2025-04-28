import Speaker from '../assets/images/Speaker.avif'
import Headphone from '../assets/images/Headphone.avif'
import SmartWatch from '../assets/images/SmartWatch.avif'
import GamingMouse from '../assets/images/GamingMouse.avif'
import CoffeeMug from '../assets/images/CoffeeMug.avif'
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    image: Headphone,
    added:false
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 120.00,
    image: SmartWatch,
    added:false

  },
  {
    id: 3,
    name: "Coffee Mug",
    price: 9.99,
    image: CoffeeMug,
    added:false

  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: 39.99,
    image: GamingMouse,
    added:false

  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 45.50,
    image: Speaker,
    added:false

  },
];

export default products;
