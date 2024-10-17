import Banner from './Banner';
import Footer from './Footer';
import ShoppingList from '../components/ShoppingList';
import Cart from './Cart';
import Description from './Description';
import FixedBarMarketing from './FixedBarMarketing';
import '../styles/App.css';



function App() {
  return (
    <>
      <Banner/>
      <Cart/>
      <ShoppingList/>
      <Description/>
      <Footer/>
      <FixedBarMarketing/>
    </>
  );
}

export default App