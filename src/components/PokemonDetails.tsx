import PokemonCarousel from "./PokemonCarousel";
import { Props } from "../types";

function PokemonDetails({ alias, image, desc, sprites }: Props) {
  return (
    <div>
      <div className="pokemon-details">
        <div className="description-box">
          <p>
            {
              desc.map((element: any) => {
                if (element.language.name == "en") {
                  return element.flavor_text;
                }
              })[1]
            }
          </p>
        </div>
        <div className="photo-box">
          <h2>{alias}</h2>
          <img src={image} alt={alias} />
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;
