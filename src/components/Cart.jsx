import { useState, useRef,useEffect } from 'react';

//Styles
import '../styles/Cart.css';

const Cart = (props) => {

  const {cart, setCart} = props;

  const [isOpen,setIsOpen] = useState(false);

  // Use Ref to target HTML element with React
  const cartLayout = useRef(null);

  let totalCart = cart.reduce((acc,element) => {
    return acc + (element.price * element.quantity)
  },0);


  function cleanCart() {
    setCart([]);
  }

  function showCart() {
    setIsOpen(true);
    
  // Delay car j'essayes d'accèder à la ref pdt le rendu...
    setTimeout(() => {
      cartLayout.current.classList.toggle('open');
  }, 0);

  }


  useEffect(() => {

    if(totalCart !== 0) {

      document.title = `Panier Actuel : ${totalCart} euros`;

    }
    
  },[totalCart])

  
  return isOpen ? (<aside className="cart" ref={cartLayout}>
          <button className='btn btn-closer' onClick={() => setIsOpen(false)}> ❌ Fermer ❌</button>
            <h2>Mon Panier</h2>
            {cart.map((item,index) => {
              return (
                <div key={`${item.name}-${index}`} className="cart-item" data-element={item.name}>
                  <p>{`${item.name.toUpperCase()} x ( ${item.quantity} ) :`}  <span>{item.quantity * item.price} euros </span></p>
                </div>
              )
            })}
            {/* <button className='btn btn-action' onClick={() => setCart(cart + 1)}>
                +
              </button> */}

            {/* <button className='btn btn-action' onClick={() => setCart(cart - 1)}>-</button> */}
          
            { <h3>Total : {totalCart ? totalCart : 0} {'euros'}</h3> } 

            <button className="btn btn-go" onClick={cleanCart}>Vider le panier</button>
</aside>) : (<button className="btn btn-opener" onClick={(e) => showCart()}> 🛒 Ouvrir</button>);

}

export default Cart;
