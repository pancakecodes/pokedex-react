import { useEffect, useState } from "react";
import "./App.css";
import PokemonCounter from "./components/PokemonCounter";
import PokemonDetails from "./components/PokemonDetails";


function App() {
  const [pokemons,setPokemons]=useState([])
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonName, SetPokemonName] = useState("");
  const [pokemonImage, SetPokemonImage] = useState("");
  const [pokemonDescription, SetPokemonDescription] = useState("");
  const [descripcion,setDescription] = useState([])
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        SetPokemonName(data.name);
        SetPokemonImage(data.sprites.front_default);
        SetPokemonDescription(data.species.url);
      })
      .catch((error) => console.log(error));
  }, [pokemon]);

  useEffect(() => {
    fetch(pokemonDescription)
      .then((res) => res.json())
      .then((data) => {
        setDescription(data.flavor_text_entries);
      });
  }, [pokemonDescription]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0")
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data.results);
      });
  }, []);

  const handleClick = () => {
    const input = document.querySelector("input") as HTMLInputElement;
    setPokemon(input.value);
  };

  return (
    <>
      <header>
        <nav>
          <h1>Pokedex</h1>
          <ul>
            <li><input type="text" name="pokemon" placeholder="Search..." /></li>
            <li><button onClick={handleClick}>Search</button></li>
            <li>
              <PokemonCounter />
            </li>
          </ul>
        </nav>
      </header>
      <div className="container">
        <main>
          <PokemonDetails alias={pokemonName} image={pokemonImage} desc={descripcion} />
        </main>
        <aside>
        <ul className="lista"> 
      
      {
       pokemons.map(element=>{
           return <li onClick={(e)=>setPokemon(e.target.innerText)} key={element.name}>{element.name} </li>
       })
      }
     </ul>
        </aside>
      </div>
      <footer>
        <p>Copyright © 2023 pancakecodes</p>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/sahernandezg/"
              className="icon-linkedin"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/pancakecodes/" className="icon-github">
              Github
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
