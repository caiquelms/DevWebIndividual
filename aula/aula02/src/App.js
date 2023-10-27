import "./App.css";
import Bio from "./components/Bio";
import Button from "./components/Button";

function App() {
  const pessoas = [
    { nome: "Caíque", idade: 24 },
    { nome: "Jorge", idade: 37 },
    { nome: "Roger", idade: 22 },
  ];

  const title = [{ title: "Eae" }, { title: "Salve" }, { title: "Coe" }];

  return (
    <>
      <header className="App-header">
        <h1>Aula02</h1>
      </header>
      <div className="App">
        {/*<Bio nome={pessoas[0].nome} idade={pessoas[0].idade} />
        <Bio nome={pessoas[1].nome} idade={pessoas[1].idade} />
        <Bio nome={pessoas[2].nome} idade={pessoas[2].idade} />*/}

        {pessoas.map((item, index) => (
          <Bio key={index} nome={item.nome} idade={item.idade} />
        ))}

        {/*<Button title="Eae" />
        <Button title="Salve" />
        <Button title="Coe" />*/}

        {title.map((item, index) => (
          <Button key={index} contador={index} title={item.title} />
        ))}
      </div>
    </>
  );
}

export default App;
