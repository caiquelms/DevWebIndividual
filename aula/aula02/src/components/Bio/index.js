export default function Bio({ nome, idade }) {
  console.log(nome, idade);

  return (
    <div>
      <h2>BIO</h2>
      <h3>Nome: {nome}</h3>
      <h3>Idade: {idade}</h3>
    </div>
  );
}
