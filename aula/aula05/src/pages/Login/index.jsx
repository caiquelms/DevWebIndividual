import { useState } from "react";

const Login = () => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Faça seu login</h1>
      <input
        type="text"
        placeholder="Insira seu login"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Insira sua senha"
        value={senha}
        onChange={(e) => setLogin(e.target.value)}
      />
      <br />
      <button>Entrar</button>
    </form>
  );
};

export default Login;
