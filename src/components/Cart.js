import { useState, useRef } from 'react';
import '../styles/Cart.css';

const Cart = (props) => {

  const {cart,setCart} = props;

  const monsteraPrice = 5 ;

  const [isOpen,setIsOpen] = useState(false);

  const cartLayout = useRef(null);
  

  function cleanCart() {
    setCart(0);
  }

  function showCart() {
    setIsOpen(true);
    
  // Delay car j'essayes d'accèder à la ref pdt le rendu...
    setTimeout(() => {
      cartLayout.current.classList.toggle('open');
  }, 0);

  }

  
  return isOpen ? (<aside className="cart" ref={cartLayout}>
          <button className='btn btn-closer' onClick={() => setIsOpen(false)}> ❌ Fermer ❌</button>
            <h2>Panier</h2>
            <div>
                Monstera : {monsteraPrice}€ (quantité : {cart >= 0 ? cart : 0})
                {/* <button className='btn btn-action' onClick={() => setCart(cart + 1)}>
                +
                </button> */}

                {/* <button className='btn btn-action' onClick={() => setCart(cart - 1)}>-</button> */}
            </div>
            <h3>Total : {cart > 0 ? monsteraPrice * cart + '€' : '0€'}</h3>
            <button className="btn btn-go" onClick={cleanCart}>Vider le panier</button>
</aside>) : (<button className="btn btn-opener" onClick={(e) => showCart()}> 🛒 Ouvrir</button>);

}

export default Cart;
