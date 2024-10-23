import { useState } from 'react';
import '../styles/Cart.css';

const Cart = () => {

  const monsteraPrice = 5 ;

  const [cart,setCart] = useState(0);
  const [isOpen,setIsOpen] = useState(false);
  

  function cleanCart() {
    setCart(0);
  }

  
  return isOpen ? (<aside className="cart">
          <button className='btn btn-closer' onClick={() => setIsOpen(false)}> ❌ Fermer ❌</button>
            <h2>Panier</h2>
            <div>
                Monstera : {monsteraPrice}€ (quantité : {cart >= 0 ? cart : 0})
                <button onClick={() => setCart(cart + 1)}>
                  Ajouter
                </button>

                <button onClick={() => setCart(cart - 1)}>Enlever</button>
            </div>
            <h3>Total : {cart > 0 ? monsteraPrice * cart + '€' : '0€'}</h3>
            <button className="btn btn-go" onClick={cleanCart}>Vider le panier</button>
</aside>) : (<button className="btn btn-opener" onClick={() => setIsOpen(true)}> 🛒 Ouvrir</button>);

}

export default Cart;
