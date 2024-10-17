import { plantList } from '../datas/plantList.js';
import "../styles/ShoppingList.css";

let plantListing;

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

    plantListing = await getDatas(); 

  
  } else {

    plantListing = [...plantList]

  }
  
}

result();


const ShoppingList = () => {

  return (
    <>  
      <h2>Ma liste de courses</h2>  
      <ul>
        { Object.keys(plantListing).map((item) =>{

          return (<li key={`${plantListing[item].id}`}>
            {plantListing[item].name}
            <span className='category'>{plantListing[item].category}</span>
            </li>)
        })
        }
      </ul>
    </>

  )
}

export default ShoppingList