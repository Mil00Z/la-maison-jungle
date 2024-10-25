import { useState } from 'react';

import Header from './Header';
import Block from './Block';
import Footer from './Footer';
import InfosContent from './InfosContent';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Description from './Description';
import FixedBarMarketing from './FixedBarMarketing';

import UncontroledForm from './UncontroledForm';
import ControledForm from './ControledForm';
import '../styles/App.css';




function App() {

//Remonter le state Local de Cart to App pour une plus grande diffusion 
let cartInit = [
  {
    name:'ficus',
    price: 5,
    quantity: 1
  },
  {
    name:'aloe',
    price: 5,
    quantity: 3
  },
  {
    name:'oilivier',
    price: 25,
    quantity: 1
  }
]

//Init Use State for Cart
const [cart,setCart] = useState(cartInit);

  return (
    <>
      <Header/>
      <Block/>
      <Cart cart={cart} setCart={setCart}/>
      <InfosContent/>
      <ShoppingList cart={cart} setCart={setCart}/>
      <Description/>
      <UncontroledForm/>
      <ControledForm/>
      <Footer/>
      <FixedBarMarketing/>
    </>
  );
}

export default App