import { useState } from 'react';
import { plantList } from '../datas/plantList.js';
import PlantItem from './PlantItem.jsx';
import Categories from './Categories.jsx';
import "../styles/ShoppingList.css";


const ShoppingList = (props) => {

  const {cart,setCart} = props;

  const [listing,setListing] = useState([...plantList])

  return (
  <>

    <Categories listing={listing} setListing={setListing}/>
    
    <section className='shopping-list'>
      {listing.map((plante,index) => {

        return (<PlantItem key={plante.id} planteName={plante.name} planteCover={plante.cover} plantePrice={plante.price} data-index={index} planteLight={plante.light} planteWater={plante.water} cart={cart} setCart={setCart}/>)

        })}
      </section>

    </>
  )

}

export default ShoppingList