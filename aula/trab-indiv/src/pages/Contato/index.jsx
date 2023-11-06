import { Link } from "react-router-dom";
import "./contato.css";

const Contato = () => {
  return (
    <>
      <h1>Contato</h1>
      <div className="contato">
        <Link to="https://github.com/caiquelms" target="_blank">
          GitHub: caiquelms
        </Link>
      </div>
    </>
  );
};

export default Contato;
