import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";

export default function Home() {
  const { user } = useParams();

  return (
    <>
      <h1>Home</h1>

      {user == undefined ? (
        <h2>Olá Visitante!</h2>
      ) : (
        <h2>Bem Vindo(a), {user} !</h2>
      )}
    </>
  );
}
