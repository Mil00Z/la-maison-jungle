import '../styles/Block.css'
import landscape from '../assets/plant-stand-1.jpeg';

const Block = ( ) => {

let randomMessage = "Transformez votre espace en jungle urbaine !";

  return (<section className="block first" style={{backgroundImage:`url(${landscape})`}}>
      <p className="title"><i className="fas fa-leaf"></i> {randomMessage} </p>
    </section>)
}

export default Block