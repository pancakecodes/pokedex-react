import React, { useEffect, useState } from "react";

interface PokemonData {
  results: Array<{
    name: string;
    url: string;
  }>;
}

const PokemonList: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Array<string>>([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((response) => response.json())
      .then((data: PokemonData) => {
        const names = data.results.map((pokemon) => pokemon.name);
        setPokemonList(names);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Pokemons list:</h1>
      <ul>
        {pokemonList.map((pokemonName) => (
          <li key={pokemonName}>{pokemonName}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
