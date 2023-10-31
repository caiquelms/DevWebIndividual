import { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const dados = {
  login: "caique",
  senha: "caique123",
};

export default function Login() {
  {
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();
    const { param } = useParams();
    const location = useLocation();
    console.log(location);

    //function entrar (){}
    const entrar = () => {
      if (login == "" || senha == "") {
        console.log("Preencha todos os campos");
      } else if (login == dados.login && senha == dados.senha) {
        const info = {
          login: login,
          senha: senha,
        };
        console.log(info);
        localStorage.setItem("info", JSON.stringify(info));
        setLogin("");
        setSenha("");
        navigate("/home/" + login);
      } else {
        console.log("Login ou Senha Inválidos!");
      }
    };

    return (
      <>
        <h1>Página de Login</h1>
        <div>
          <p>Login</p>
          <input
            type="text"
            placeholder="Digite seu login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div>
          <p>Senha</p>
          <input
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <button type="button" onClick={entrar}>
          Entrar
        </button>
      </>
    );
  }
}
