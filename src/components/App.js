import Header from './Header';
import Block from './Block';
import Footer from './Footer';
import InfosContent from './InfosContent';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Description from './Description';
import FixedBarMarketing from './FixedBarMarketing';
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
      <Footer/>
      <FixedBarMarketing/>
    </>
  );
}

export default App