import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";

export default function TeamCard({ teamNumber }) {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState({});
  const [pokemonList, setPokemonList] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      const data = await response.json();
      setPokemon(data);
      setPokemonList([...pokemonList, pokemon]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Card className="card">
        <Card.Title>Team {teamNumber} </Card.Title>
        <form onSubmit={handleSubmit}>
          <label>
            Enter a Pokemon name:
            <input
              type="text"
              value={pokemonName}
              onChange={(e) => setPokemonName(e.target.value)}
            />
          </label>
          <Button type="submit">Add Pokemon</Button>
        </form>
        <div>
          <ol>
            {pokemonList.map((pokemon, index) => (
              <li key={index}>
                <h3>{pokemon.name}</h3>
                {pokemon.sprites && (
                  <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                )}
              </li>
            ))}
          </ol>
        </div>
      </Card>
    </div>
  );
}
