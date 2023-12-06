import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="sticky">
      <nav>
        <ul>
          <li>
            <Link className="nav-link active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link active" to="/contato">
              Contato
            </Link>
          </li>
          <li>
            <Link className="nav-link active" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
