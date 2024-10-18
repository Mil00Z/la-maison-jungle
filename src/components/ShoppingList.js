import { plantList } from '../datas/plantList.js';
import "../styles/ShoppingList.css";

let plantListing = [...plantList];

async function getDatas() {

  try {

    const response = await fetch('../datas/plantList.json');
    
    const datas = await response.json();

      return datas.plantList ;

  }


  catch(error){

    console.error('Erreur de données');

  }
  

}

const result = async (path) => {


  if (path) {

    // plantListing = await getDatas(); 

  
  } else {
    console.log('else')
    plantListing = [...plantList]

  }

   return plantListing;
}


const categories = plantListing.map((plante) => plante.category);

let extractCategories = Array.from(new Set(categories));
  

const ShoppingList = () => {

  return (
    <section className='shopping-list'> 
      <div className='categories'>Catégories des plantes:

      {extractCategories.map((category,index) => {

        return (<a href={`https://google.com/search?q=plantes type ${category}`}
           className="link-category" key={`${category} - ${index}`}> {category} </a>)

        })

      }   
      </div> 
      <h2>Ma liste de courses</h2>  
      <ul className='plant-list'>
        {plantListing.map((plante) =>{

          return (<li key={plante.id}>
            {plante.name} {plante.isBestSale && '💥'}

            {plante.isSpecialOffer && (<span className='special-offer'> en Soldes !</span>)}

            <div className='category'>{plante.category}</div>
            </li>)
        })
        }
      </ul>
    </section>

  )
}

export default ShoppingList