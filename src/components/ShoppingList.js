import { plantList } from '../datas/plantList.js';
import PlantItem from './PlantItem';
import "../styles/ShoppingList.css";

let dataListing = [...plantList];
console.log(dataListing);


const ShoppingList = (props) => {

  const {cart,setCart} = props;

  return (
    <section className='shopping-list'>

    {dataListing.map((plante,index) => {

      return (<PlantItem key={plante.id} planteName={plante.name} planteCover={plante.cover} plantePrice={plante.price} data-index={index} planteLight={plante.light} planteWater={plante.water} cart={cart} setCart={setCart}/>)

      })}
      
    </section>
  )

  
}

export default ShoppingList