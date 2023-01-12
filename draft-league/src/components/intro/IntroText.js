import "./introText.css";

export default function IntroText() {
  return (
    <div>
      <h1>Welcome to Draft League!</h1>
      <h2>Features</h2>
      <p>
        1. Enter the amount of participating teams.
        <br />
        2. Click 'Generate Teams'.
        <br />
        3. Each team may select any Pokemon from the first 807 species.
        <br />
        4. Create and remove teams as needed.
        <br />
        5. Add and remove Pokemon as needed.
        <br />
        6. Battle in game or on{" "}
        <a href="https://pokemonshowdown.com/" target="_blank" rel="noreferrer">
          PokemonShowdown.
        </a>
      </p>
    </div>
  );
}
