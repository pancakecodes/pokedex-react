

import './App.css'

function App() {
  

  return (
    <>
    <header>
      <nav>
        <h1>Pokedex</h1>
        <ul>
          <li><input
            type="text"
            placeholder="Search..."
          /></li>
          <li>
            contador
          </li>
        </ul>
      </nav>
    </header>
    <div className='container'>
      <main>
        <h1>pokemon details</h1>
        <div className='pokemon-details'>
        <div className='description-box'>
        <p>description</p>
        </div>
        <div className='photo-box'>
        <p>photo pokemon default</p>
        </div>
        </div>
        <div className='pokemon-carrusel'>
        <p>pokemon carrusel</p>
        </div>
      </main>
      <aside>
        <h1>pokemon list</h1>
        <ul>
          <li>pokemon 1</li>
          <li>pokemon 2</li>
          <li>pokemon 3</li>
          <li>pokemon 4</li>
          <li>pokemon 5</li>
          </ul>
      </aside>
    </div>
    <footer>
      <h1>footer</h1>
    </footer>
    </>
  )
}

export default App
