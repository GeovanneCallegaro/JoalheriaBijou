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

/* import pages components */
import { Initial } from "./components/pages/Initial";
import { Collection } from "./components/pages/Collection";
import { Shop } from "./components/pages/Shop";
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/ContactUs";


function App() {
  return (
    <Router>
    <div className="App">
      <SubHeader />
      <Header 
        navText={['Início', 'Coleção', 'Loja', 'Sobre', 'Contato']}
      />
      <SearchBar />
      <Switch>
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
