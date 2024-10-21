import Header from './Header';
import Block from './Block';
import Footer from './Footer';
import InfosContent from './InfosContent';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Description from './Description';
import FixedBarMarketing from './FixedBarMarketing';

import UncontroledForm from './UncontroledForm';
import ControledForm from './ControledForm';
import '../styles/App.css';




function App() {
  return (
    <>
      <Header/>
      <Block/>
      <Cart/>
      <InfosContent/>
      <ShoppingList/>
      <Description/>
      <UncontroledForm/>
      <ControledForm/>
      <Footer/>
      <FixedBarMarketing/>
    </>
  );
}

export default App