const Description = () => {

  let textDesc = 'Ici achetez toutes les plantes dont vous avez toujours voulu !';
  let emojis ='🌵🌱🎍';

  return (<p data-customer-satisfaction={Math.floor(Math.random() * 100) + `%`}>{textDesc} {emojis}</p>)

}

export default Description;