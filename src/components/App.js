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

const [cart,setCart] = useState(0);

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