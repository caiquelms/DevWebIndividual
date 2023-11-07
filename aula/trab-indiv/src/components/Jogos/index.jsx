const Jogo = ({ jogo }) => {
  return (
    <div className="container-jogo">
      <img src={jogo.url} />
      <p className="jogos">{jogo.jogo}</p>
      <p className="desc">{jogo.desc}</p>
    </div>
  );
};

export default Jogo;
