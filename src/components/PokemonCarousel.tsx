import { useState } from 'react';
import { CarousselI } from '../types';



function PokemonCarousel({ alias, sprites }: CarousselI) {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    sprites.front_default,
    sprites.back_default,
    sprites.front_shiny,
    sprites.back_shiny,
  ];

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div>
    <div className='box'>
      <button onClick={handlePrevClick}>Prev</button>
      <img src={images[currentImageIndex]} alt={alias} />
      <button onClick={handleNextClick}>Next</button>
    </div>
  </div>
  );
}

export default PokemonCarousel;
