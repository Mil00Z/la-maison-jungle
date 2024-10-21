import { plantList } from '../datas/plantList.js';
import PropTypes from 'prop-types';
import "../styles/InfosContent.css";

let plantListing = [...plantList];
let CareTypes = ['water,light'];

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

export function CareScale(props) {

const scaleValue = props.scaleValue;
const careType = props.careType;

  let range = [1,2,3,4];
  let scaleType = careType === 'light' ? '☀️' : '💧';

  return (
    <div className='care-container' data-max-value={`${range.length}`}>

      {range.map((elementRange) => {

          return  scaleValue >= elementRange && (<span className='care-scale' data-type={careType} key={elementRange}>{scaleType}</span>)
         })
      }
      </div>
    )
}

CareScale.propsTypes = {
  scaleValue: PropTypes.number.isRequired,
  // careType: PropTypes.string.oneOf(CareTypes).isRequired
}


const categories = plantListing.map((plante) => plante.category);

let extractCategories = Array.from(new Set(categories));
  

const InfosContent = () => {

  return (
    <section className='infos-content'> 
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
            <CareScale careType="water" scaleValue={plante.water}/>
            <CareScale careType="light" scaleValue={plante.light}/>
            </li>
          )
        })
        }
      </ul>
    </section>

  )
}

export default InfosContent