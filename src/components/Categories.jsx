import { plantList } from "../datas/plantList";

import '../styles/Categories.css';
import '../styles/Block.css'

const Categories = (props) => {

const {listing,setListing} = props ;

const categories = plantList.map((plante) => plante.category);

let singleCategories = Array.from(new Set(categories));


function filterCategories(inputValue) {

    let filteredCategories = plantList.filter((plante) => {

      return plante.category === inputValue;
    })

    if (filteredCategories.length !== 0) {
      
      setListing([...filteredCategories])

    } else {
      setListing([...plantList])
    }

}

function clearCategories() {
  setListing([...plantList])  
}


  return(
    <div className="block categories">
        <h2 className="title">- Filtrer par Categories -</h2>
        <div className="categories-list">
          <select name="categories" id="cat" className="btn btn-go" onChange={(e) => filterCategories(e.target.value)}>
          <option value="all" defaultValue={true}>Tout</option>

          {singleCategories.map((categorie,index) =>{

            return (<option key={`${categorie}-${index}`} value={categorie} className="input-option">

              {categorie}

            </option>)
          })}

          </select>

          <button className="btn btn-action" onClick={clearCategories}>Ré-initialiser</button>
        </div>
    </div> 
  )
}

export default Categories
