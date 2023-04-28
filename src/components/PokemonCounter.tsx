import React, { useEffect, useState } from "react";

interface PokemonData {
  count: number;
}

const PokemonCounter: React.FC = () => {
  const [pokemonCount, setPokemonCount] = useState<number>(0);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data: PokemonData) => {
        setPokemonCount(data.count);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="pokemoncount">
      <span>pokemons:{pokemonCount}</span>
    </div>
  );
};

export default PokemonCounter;
