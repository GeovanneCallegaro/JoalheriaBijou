import { Header } from "./components/Header";
import { SubHeader } from "./components/SubHeader";

import './App.css'

import {SiGooglemessages} from 'react-icons/si'


function App() {
  return (
    <div>
      <SubHeader />
      <Header 
        navText={['Início', 'Coleção', 'Loja', 'Sobre', 'Contato']}
      />
      
      <div className="button-chat">
        <SiGooglemessages className="iconMessage"/>
      </div>
    </div>
  );
}

export default App;
