import { useState } from "react";
import "./App.css";

function App() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const entrar = () => {
    const infos = {
      usuario: usuario,
      senha: senha,
    };
    console.log(infos);
    setUsuario("");
    setSenha("");

    localStorage.setItem("info", JSON.stringify(infos));
  };

  return (
    <>
      <h1>LOGIN</h1>
      <div className="usuario">
        <p>Usuário</p>
        <input
          type="text"
          placeholder="Digite seu usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
      </div>
      <div className="senha">
        <p>Senha</p>
        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>
      <div className="card">
        <button type="button" onClick={entrar}>
          Entrar
        </button>
      </div>
    </>
  );
}

export default App;
