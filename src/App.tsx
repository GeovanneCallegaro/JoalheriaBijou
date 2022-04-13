/* import css and icons for app */
import './App.css'
import {SiGooglemessages} from 'react-icons/si'

/* import react router dom v5 */
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

/* import layout for all pages */
import { Header } from "./components/Layout/Header";
import { SubHeader } from "./components/Layout/SubHeader";
import { FooterInformation } from "./components/Layout/FooterInformation";
import { Footer } from "./components/Layout/Footer";
import { SearchBar } from "./components/Layout/SearchBarMobile";
import { CartItem } from './components/Layout/CartItem';

/* import pages components */
import { Initial } from "./components/pages/Initial";
import { Collection } from "./components/pages/Collection";
import { Shop } from "./components/pages/Shop";
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/ContactUs";

import { useSelector } from 'react-redux';
import { selectSelectedProducts, totalPriceProducts } from './store/Products/Products.selectors';
import { useState } from 'react';
import { Login } from './components/pages/Login';

function App() {
    const productsSelected = useSelector(selectSelectedProducts)
    const totalPrice = useSelector(totalPriceProducts)

    const [dropdown, setDropdown] = useState('')

    const handleCart = () => {
      const body = document.querySelector('body') as HTMLElement
      body.style.position = 'fixed'
      body.style.width = '100%'

      console.log('handleCart')
      setDropdown('drop')
    }

    const closeCart = () => {
      const body = document.querySelector('body') as HTMLElement
      body.style.position = 'static'
      
      setDropdown('')
    }

  return (
    <Router>
    <div className="App">
      <CartItem products={productsSelected} totalPrice={totalPrice} className={dropdown} closeCart={closeCart}/>
      <SubHeader />
      <Header 
        navText={['Início', 'Coleção', 'Loja', 'Sobre', 'Contato']}
        handleCart={handleCart}
      />
      <SearchBar />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/contato">
          <Contact/>
        </Route>
        <Route path="/sobre">
          <About/>
        </Route>
        <Route path="/loja">
          <Shop />
        </Route>
        <Route path="/colecao">
          <Collection />
        </Route>
        <Route path="/">
          <Initial />
        </Route>
      </Switch>
      <FooterInformation 
        navText={['Início', 'Coleção', 'Loja', 'Sobre', 'Contato', 'FAQ', 'Envio e Devoluções', 'Metódos de Pagamento']}
      />
      <Footer />
      <div className="button-chat">
        <SiGooglemessages className="iconMessage"/>
      </div>
    </div>
    </Router>
  );
}

export default App;
