export default function Button({ title, contador }) {
  console.log(title);
  function clique() {
    console.log("Tranquilo meu patrão, " + title);
  }
  return (
    <button onClick={clique} style={{ margin: 30, padding: 5 }}>
      {contador + 1} - {title}
    </button>
  );
}
