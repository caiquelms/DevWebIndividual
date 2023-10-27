import "./App.css";
import Eae from "./components/Eae";
import MeuNome from "./components/MeuNome";
import Teste from "./components/Teste";

//TODO - Criar componente externo
function App() {
  // Criar Funcoes, Estados(variaveis), etc...

  function clique() {
    console.log("Fui clicado ");
  }

  return (
    <>
      <header className="App-header">
        <h1>Aula01</h1>
      </header>
      <div className="App">
        <Eae />
        {/*Bloco de comentario*/}
        <MeuNome />
        <Teste />
        <button onClick={clique}>Clique Aqui</button>
      </div>
    </>
  );
}

export default App;
