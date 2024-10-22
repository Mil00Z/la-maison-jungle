
import '../styles/Cart.css';

const Cart = () => {


  let cartItems = {
    'Monsterra': {
      price:8, 
      quantity: 1
    },
    'Lierre': {
      price:10,
       quantity: 1
    },
    'Roses': {
      price:6,
      quantity: 1
    },
    'Bouquet': {
      price:15,
      quantity: 1
    },
    'Orchidee': {
      price:20,
      quantity: 1
    }
  }

  let totalPrice = 0;


  return (<aside className="cart" data-items-available={Object.keys(cartItems).length}>

    <ul>

      {Object.keys(cartItems).map((entrie,index) => {

      totalPrice+= cartItems[entrie].price;

    return <li className="cart-item" data-quantity={cartItems[entrie].quantity} key={index}>
              <span className="item-name">{entrie} :</span>
              <span className="item-price"> {cartItems[entrie].price} euros</span>
          </li>
        }) 
      }

    </ul>
    <div className="total-price debeug-1">Total: {totalPrice} euros</div>     
</aside>)


}

export default Cart;
