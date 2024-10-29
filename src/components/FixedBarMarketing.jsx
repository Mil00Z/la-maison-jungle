import '../styles/FixedBarMarketing.css';

const FixedBarMarketing = () =>{

  let textDesc = 'Ici achetez toutes les plantes dont vous avez toujours voulu !';
  let emojis ='🌵🌱🎍';


  return( <p className="fixed-bar-bottom" data-customer-satisfaction={Math.floor(Math.random() * 100) + `%`}>{textDesc} {emojis}</p>)
}

export default FixedBarMarketing