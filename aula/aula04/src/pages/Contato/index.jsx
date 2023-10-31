import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Contato() {
  const navigate = useNavigate();
  const param = "eae eae eae eae";

  const irParaLogin = () => {
    navigate("/login/" + param, { state: "eu sou uma informação" });
  };

  return (
    <>
      <h1>Contato</h1>
      <button type="button" onClick={irParaLogin}>
        Ir Para Login
      </button>
    </>
  );
}
