

import './App.css'
import PokemonCounter from './components/PokemonCounter'
import PokemonDetails from './components/PokemonDetails'
import PokemonList from './components/PokemonList'
import PokemonSearch from './components/PokemonSearch'

function App() {
  

  return (
    <>
    <header>
      <nav>
        <h1>Pokedex</h1>
        <ul>
          <PokemonSearch/>
          <li>
            <PokemonCounter/>
          </li>
        </ul>
      </nav>
    </header>
    <div className='container'>
      <main>
        <h1>pokemon details</h1>
        <PokemonDetails/>
      </main>
      <aside>
        <PokemonList/>
      </aside>
    </div>
    <footer>
    <p>Copyright © 2023 pancakecodes</p>
  <ul>
    <li><a href="https://www.linkedin.com/in/sahernandezg/" className='icon-linkedin'>LinkedIn</a></li>
    <li><a href="https://github.com/pancakecodes/" className='icon-github'>Github</a></li>
  </ul>
    </footer>
    </>
  )
}

export default App
