import { useEffect, useState } from "react";
import "./App.css";
import PokemonCounter from "./components/PokemonCounter";
import PokemonDetails from "./components/PokemonDetails";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import logo from './assets/img/International_Pokémon_logo.png.png';



function App() {
  const [pokemons, setPokemons] = useState<{name: string, url: string}[]>([]);
  const [pokemon, setPokemon] = useState<string>("pikachu");
  const [pokemonName, setPokemonName] = useState<string>("");
  const [pokemonImage, setPokemonImage] = useState<string>("");
  const [pokemonDescription, setPokemonDescription] = useState<string>("");
  const [descripcion, setDescription] = useState<{ flavor_text: string }[]>([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokemonName(data.name);
        setPokemonImage(data.sprites.front_default);
        setPokemonDescription(data.species.url);
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
        <img src={logo} alt="Logo de mi sitio web" className="logo" />
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
          <PokemonDetails alias={pokemonName} image={pokemonImage} desc={descripcion} />
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
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg> */}
              <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: 'white'}} />
            </a>
          </li>
          <li>
            <a href="https://github.com/pancakecodes/" className="icon-github">
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> */}
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
