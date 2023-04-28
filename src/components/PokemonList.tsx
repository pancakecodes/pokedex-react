// // @flow strict

// import { useEffect, useState } from "react";

// function PokemonList() {

//     const [pokemons,setPokemons]=useState([])

//   useEffect(() => {
//     fetch("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0")
//       .then((res) => res.json())
//       .then((data) => {
//         setPokemons(data.results);
//       });
//   }, []);
//   return (
//     <div>
//       <ul className="lista"> 
      
//        {
//         pokemons.map(element=>{
//             return <li key={element.name}>{element.name} </li>
//         })
//        }
//       </ul>
//     </div>
//   );
// }

// export default PokemonList;
