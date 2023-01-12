import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import "./teamCard.css";

export default function TeamCard({ teamNumber, deleteTeam }) {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState({});
  const [pokemonList, setPokemonList] = useState([]);
  const [error, setError] = useState("");

  console.log(error);
  console.log(pokemon);
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      if (response.status === 404) {
        alert("Check spelling or try using all lowercase.");
        throw new Error("Not Found");
      }
      const data = await response.json();
      setPokemon(data);
      setPokemonList([...pokemonList, data]);
      setError("");
    } catch (error) {
      console.error(error);
      setError(
        "Pokemon not found, Please check the name and try again. Try name in all lowercase."
      );
    }
  }

  function handleInputChange(e) {
    const name = e.target.value;
    setPokemonName(name.toLowerCase());
  }

  function handleDelete() {
    deleteTeam(teamNumber);
  }

  function handleDeletePokemon(index) {
    setPokemonList(pokemonList.filter((_, i) => i !== index));
  }

  return (
    <div className="team">
      <Card className="card">
        <Card.Title>Team {teamNumber} </Card.Title>
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Enter a Pokemon name:
            <input
              className="input"
              type="text"
              value={pokemonName}
              onChange={handleInputChange}
            />
          </label>
          <Button type="submit">Add Pokemon</Button>
        </form>
        <Button onClick={handleDelete} className="deleteTeam">
          X
        </Button>
        <div>
          <ol>
            {pokemonList.map((pokemon, index) => (
              <li className="list" key={index}>
                <h3>{pokemon.name}</h3>
                {pokemon.sprites && (
                  <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                )}
                <Button
                  onClick={() => handleDeletePokemon(index)}
                  className="deletePoke"
                >
                  X
                </Button>
              </li>
            ))}
          </ol>
        </div>
      </Card>
    </div>
  );
}
