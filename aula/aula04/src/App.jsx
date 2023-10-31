import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Contato from "./pages/Contato";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <h1>Teste</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/:user" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/:param" element={<Login />} />

        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </>
  );
}

export default App;
