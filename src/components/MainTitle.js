import '../styles/MainTitle.css';
import logo from '../assets/logo-lmj.png';

const MainTitle = () => { 

  let storeName = 'La Maison Jungle';

  return (
  <>
    <img className='logo-lmj' src={logo} alt={`Logo de ${storeName}`}/>
    <h1 className="main-title"><a href='https://github.com/Mil00Z' className="extra-link" aria-label='lien vers le Github'>{storeName.toUpperCase()}</a></h1>
  </>
)

}

  export default MainTitle