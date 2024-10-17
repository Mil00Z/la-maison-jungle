import Banner from './Banner';
import Footer from './Footer';
import ShoppingList from '../components/ShoppingList';
import Cart from './Cart';
import '../styles/App.css';


function App() {
  return (
    <>
      <Banner/>
      <Cart/>
      <ShoppingList/>
      <Footer/>
    </>
  );
}

export default App