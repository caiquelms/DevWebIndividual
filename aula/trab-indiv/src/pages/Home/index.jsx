import Jogos from "../../components/Jogos";
import "./jogos.css";

const Home = () => {
  const jogos = [
    {
      url: "https://cdn.discordapp.com/attachments/126163920040755200/1170884781869912104/image.png?ex=655aaa6d&is=6548356d&hm=488019e22bb82920606b8eefecdfdf6f915b71eaa9d972cfc52092da39e99a3e&",
      jogo: "Valorant",
      desc: "Valorant é um FPS tático 5x5 que tem como objetivo plantar ou desarmar a Spike. Os jogadores têm apenas uma vida por rodada e a partida é vencida pela equipe que ganhar 13 rodadas (de 25) primeiro.",
      id: "1",
    },
    {
      url: "https://cdn.discordapp.com/attachments/126163920040755200/1170884874845044807/image.png?ex=655aaa84&is=65483584&hm=dd063c2cbb04b638acad2829222065b149d675d6fce6fbe6aca13d2bf66543e5&",
      jogo: "CS2",
      desc: "O Counter-Strike 2 (CS2) é a mais recente adição à famosa série de jogos de tiro em primeira pessoa. É uma atualização gratuita para o CS:GO e representa o maior avanço técnico na história do Counter-Strike. Os modos de jogo disponíveis incluem Mata-Mata, Premier, Competitivo e Casual.",
      id: "2",
    },
    {
      url: "https://cdn.discordapp.com/attachments/126163920040755200/1170885157767610408/image.png?ex=655aaac7&is=654835c7&hm=b7ec471970dfa49d747b0e8db18feebcb00cb6317d223fe3f5267892cc864a99&",
      jogo: "Fortnite",
      desc: "Chame seus amigos e mergulhe no Fortnite, um jogo massivo de combate entre 100 jogadores da Epic Games que combina saque, criação, tiroteio e caos. O resultado é uma experiência online competitiva e totalmente imprevisível que só fica maior e mais radical a cada temporada.",
      id: "3",
    },
    {
      url: "https://cdn.discordapp.com/attachments/126163920040755200/1170889226599006208/image.png?ex=655aae91&is=65483991&hm=7228a6a82b2e09d680472f1aa85128dac57997bb8d3dd311ffc03444e23f5acc&",
      jogo: "COD: Modern Warfire",
      desc: 'Call of Duty: Modern Warfare é um jogo eletrônico de tiro em primeira pessoa produzido pela Infinity Ward. Foi publicado pela Activision em 25 de outubro de 2019 para Microsoft Windows, PlayStation 4 e Xbox One. É o decimo sexto jogo da serie Call of Duty e actua como um "soft reboot" da sub-serie Modern Warfare.',
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
