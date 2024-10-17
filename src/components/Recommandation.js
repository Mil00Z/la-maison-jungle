 const Recommandation = () => {   

  const currentMonth = new Date().getMonth();
  let isInSpring = currentMonth >= 3 && currentMonth <= 5 ;
  let recomandation = isInSpring ?
(<p className="reco-spring">C'est le moment de rempoter vos plantes 🌱</p>) : (<p className="reco-another">Laissez vos plantes tranquilles, ce n'est pas la saison de rempotage</p>);

  return recomandation;
 }

 export default Recommandation