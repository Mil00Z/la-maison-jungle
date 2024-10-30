import { useState,useEffect} from 'react';

import Header from './Header';
import Block from './Block';
import Footer from './Footer';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Description from './Description';
import FixedBarMarketing from './FixedBarMarketing';
import ControledForm from './ControledForm';

//Datas
import { cartInit } from '../datas/dataTest';

// Styles
import '../styles/App.css';


function App() {

//Remonter le state Local de Cart to App pour une plus grande diffusion 
const [cart,setCart] = useState(localStorage.getItem('current-cart') ? JSON.parse(localStorage.getItem('current-cart')) : []);


useEffect(() => {

  localStorage.setItem('current-cart', JSON.stringify(cart));

},[cart]);


  return (
    <>
      <Header/>
      <Block/>
      <Cart cart={cart} setCart={setCart}/>
      <ShoppingList cart={cart} setCart={setCart}/>
      <Description/>
      <ControledForm/>
      <Footer/>
      <FixedBarMarketing/>
    </>
  );
}

export default App