import Jogos from "../../components/Jogos";
import "./jogos.css";

const Home = () => {
  const jogos = [
    {
      url: "https://cdn.discordapp.com/attachments/126163920040755200/1170884781869912104/image.png?ex=655aaa6d&is=6548356d&hm=488019e22bb82920606b8eefecdfdf6f915b71eaa9d972cfc52092da39e99a3e&",
      jogo: "Valorant",
      id: "1",
    },
    {
      url: "https://cdn.discordapp.com/attachments/126163920040755200/1170884874845044807/image.png?ex=655aaa84&is=65483584&hm=dd063c2cbb04b638acad2829222065b149d675d6fce6fbe6aca13d2bf66543e5&",
      jogo: "CS2",
      id: "2",
    },
    {
      url: "https://cdn.discordapp.com/attachments/126163920040755200/1170885157767610408/image.png?ex=655aaac7&is=654835c7&hm=b7ec471970dfa49d747b0e8db18feebcb00cb6317d223fe3f5267892cc864a99&",
      jogo: "Fortnite",
      id: "3",
    },
    {
      url: "https://cdn.discordapp.com/attachments/126163920040755200/1170889226599006208/image.png?ex=655aae91&is=65483991&hm=7228a6a82b2e09d680472f1aa85128dac57997bb8d3dd311ffc03444e23f5acc&",
      jogo: "COD: Modern Warfire",
      id: "4",
    },
  ];
  return (
    <>
      <div className="container">
        <h1>Jogos</h1>
        {jogos.map((jogo) => (
          <Jogos key={jogo.id} jogo={jogo} />
        ))}
      </div>
    </>
  );
};

export default Home;
