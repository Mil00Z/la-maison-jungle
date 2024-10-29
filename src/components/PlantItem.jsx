import { useState } from 'react';
import { CareScale } from './InfosContent';  
import '../styles/PlantItem.css';


const PlantItem = (props) => {

  const {planteName,plantePrice,planteCover,planteLight,planteWater,cart, setCart} = props;

  const [wishText,setTextWish] = useState('Ajouter à mon panier');
 
  const handleClick = (event) => {

      addToCartUI(event);
      updateCart(planteName,plantePrice);
  
  }

  function addToCartUI(event){

    // Change this for better Code With React
    if(event.target.classList.contains('add-wish')){

      let targetItem = event.target.closest('.plant-item');

      targetItem.classList.add('selected');
 
      if (targetItem.classList.contains('selected')){

        // setTextWish('Retirer de mon panier');
        
      } else {

        setTextWish('Ajouter au panier');

      }

    }

  }

  function removeToCartUI(event) {

    let targetItem = event.target.closest('.plant-item');
    targetItem.classList.remove('selected');
    
  }

  

  function updateCart(name,price) { 

    let newItem = {
      name : name,
      price : price,
      quantity : 1
    }

    let itemExist = cart.find((element) => {

      return element.name === newItem.name

    });

    
    if(itemExist){

      itemExist.quantity += 1;

      setCart([...cart]);

    } else {

      setCart([...cart,newItem]);

    }

  
  }


  return (
    <article onClick={(event)=> handleClick(event)} className='plant-item'>

        <h3 className="plant-name">{planteName}</h3>
        <img className='plant-cover' src={`${planteCover}`} alt={`Visuel de ${planteName}`} />  
        <div className="care-type">
          <CareScale careType="water" scaleValue={planteWater}/>
          <CareScale careType="light" scaleValue={planteLight}/>
        </div>
        <button className='btn btn-go add-wish'>{wishText}</button>

    </article>)
  
}
export default PlantItem