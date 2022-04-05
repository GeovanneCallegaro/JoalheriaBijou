import { Header } from "./components/Header";
import { SubHeader } from "./components/SubHeader";


function App() {
  return (
    <div>
      <SubHeader />
      <Header 
        navText={['Início', 'Coleção', 'Loja', 'Sobre', 'Contato']}
      />
    </div>
  );
}

export default App;
