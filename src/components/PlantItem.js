import { useState } from 'react';
import { CareScale } from './InfosContent';  
import '../styles/PlantItem.css';


const PlantItem = (props) => {

  const {planteName,planteCover,planteLight,planteWater} = props;

  const [wishText,setTextWish] = useState('Ajouter à mes envies');

 
  const handleClick = (event) => {

    // Change this for better Code With React
    if(event.target.classList.contains('add-wish')){

      let targetItem = event.target.closest('.plant-item');

      targetItem.classList.toggle('selected');
 
      if (targetItem.classList.contains('selected')){

        setTextWish('Retirer de mes envies');

      } else {

        setTextWish('Ajouter à mes envies');

      }

    }

  }

  return (
    <article onClick={(event)=> handleClick(event,planteName)} className='plant-item'>

        <h3 className="plant-name">{planteName}</h3>
        <img className='plant-cover' src={`${planteCover}`} alt={`Visuel de ${planteName}`} />  
        <div className="care-type">
          <CareScale careType="water" scaleValue={planteWater}/>
          <CareScale careType="light" scaleValue={planteLight}/>
        </div>
        <div className="add-wish">{wishText}</div>

    </article>)
  
}
export default PlantItem