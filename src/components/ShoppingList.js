import { plantList } from '../datas/plantList.js';
import PlantItem from './PlantItem';
import "../styles/ShoppingList.css";

let dataListing = [...plantList];
console.log(dataListing);


const ShoppingList = () => {

  return (
    <section className='shopping-list'>

    {dataListing.map((plante,index) => {

      return (<PlantItem id={plante.id} planteName={plante.name} planteCover={plante.cover} data-index={index} planteLight={plante.light} planteWater={plante.water}/>)

      })}
      
    </section>
  )

  
}

export default ShoppingList