import { Props } from "../types";

function PokemonDetails({ alias, image, desc }: Props) {
  return (
    <div>
      <div className="pokemon-details">
        <div className="description-box">
          <p>
            {
         desc.map((element: { flavor_text: string }) => element.flavor_text).filter((element: string) => {
          return element.length > 0;
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
