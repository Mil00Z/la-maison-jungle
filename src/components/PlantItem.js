import { CareScale } from './InfosContent';  
import '../styles/PlantItem.css';


const PlantItem = (props) => {

  const {planteName,planteCover,planteLight,planteWater,id} = props;

  return (
    <article key={id} className='plant-item'>

        <h3 className="plant-name">{planteName}</h3>
        <img className='plant-cover' src={`${window.location.origin}${planteCover}`} alt={`Visuel de ${planteName}`} />  
        <div className="care-type">
          <CareScale careType="water" scaleValue={planteWater}/>
          <CareScale careType="light" scaleValue={planteLight}/>
        </div>

    </article>)
  
}

export default PlantItem