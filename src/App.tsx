import { useEffect, useState } from "react";
import "./App.css";
import PokemonCounter from "./components/PokemonCounter";
import PokemonDetails from "./components/PokemonDetails";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import logo from './assets/img/International_Pokémon_logo.png.png';
import PokemonCarousel from "./components/PokemonCarousel";

function App() {
  const [pokemons, setPokemons] = useState<{name: string, url: string}[]>([]);
  const [pokemon, setPokemon] = useState<string>("pikachu");
  const [pokemonName, setPokemonName] = useState<string>("");
  const [pokemonImage, setPokemonImage] = useState<string>("");
  const [pokemonSprites, setPokemonSprites] = useState({});
  const [pokemonDescription, setPokemonDescription] = useState<string>("");
  const [descripcion, setDescription] = useState<{ flavor_text: string }[]>([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => response.json())
      .then((data) => {
        
        setPokemonName(data.name);
        setPokemonImage(data.sprites.front_default);
        setPokemonSprites(data.sprites);
        setPokemonDescription(data.species.url);
      })
      .catch((error) => console.log(error));
  }, [pokemon]);

console.log(pokemonSprites);

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
        <img src={logo} alt="logo" className="logo" />
          <ul>
            <li><input type="text" name="pokemon" placeholder="Search a pokemon" /></li>
            <li><button onClick={handleClick}>Search</button></li>
            <li>
              <PokemonCounter />
            </li>
          </ul>
        </nav>
      </header>
      <div className="container">
        <main>
          <PokemonDetails alias={pokemonName} image={pokemonImage} desc={descripcion} sprites={pokemonSprites}/>
          <PokemonCarousel alias={pokemonName} sprites={pokemonSprites}/>
        </main>
        <aside>
          <ul className="lista"> 
            {
              pokemons.map((element) => {
                return <li onClick={(e) => setPokemon(e.currentTarget.innerText)} key={element.name}>{element.name} </li>
              })
            }
          </ul>
        </aside>
      </div>
      <footer>
        <ul className="social-media">
          <li>
            <a
              href="https://www.linkedin.com/in/sahernandezg/"
              className="icon-linkedin"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: 'white'}} />
            </a>
          </li>
          <li>
            <a href="https://github.com/pancakecodes/" className="icon-github">
            <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: 'white'}} />
            </a>
          </li>
        </ul>
        <h4>Copyright © 2023 pancakecodes</h4>
      </footer>
    </>
  );
}

export default App;
