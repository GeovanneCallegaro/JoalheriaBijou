import { Header } from "./components/Header";
import { SubHeader } from "./components/SubHeader";
import { Initial } from "./components/Initial";

import './App.css'

import {SiGooglemessages} from 'react-icons/si'
import { FooterInformation } from "./components/FooterInformation";
import { Footer } from "./components/Footer";
import { SearchBar } from "./components/SearchBarMobile";


function App() {
  return (
    <div className="App">
      <SubHeader />
      <Header 
        navText={['Início', 'Coleção', 'Loja', 'Sobre', 'Contato']}
      />
      <SearchBar />
      <Initial />
      <FooterInformation 
        navText={['Início', 'Coleção', 'Loja', 'Sobre', 'Contato', 'FAQ', 'Envio e Devoluções', 'Metódos de Pagamento']}
      />
      <Footer />

      <div className="button-chat">
        <SiGooglemessages className="iconMessage"/>
      </div>
    </div>
  );
}

export default App;
