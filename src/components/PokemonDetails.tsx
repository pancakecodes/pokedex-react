
interface Props {
  alias: string;
  image: string;
  desc: [];
}
function PokemonDetails({ alias, image, desc }: Props) {
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
          <p>{alias}</p>
          <img src={image} alt={alias} />
        </div>
      </div>
      <div className="pokemon-carrusel">
        <p>pokemon carrusel</p>
      </div>
    </div>
  );
}

export default PokemonDetails;
