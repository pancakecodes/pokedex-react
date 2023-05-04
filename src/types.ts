export interface CarousselI{
    alias: string;
    sprites: {
      front_default?: string;
      back_default?: string;
      front_shiny?: string;
      back_shiny?: string;
    };
  }

  export interface Props {
    alias: string;
    image: string;
    desc: { flavor_text: string }[];
    sprites: {
      front_default?: string;
      back_default?: string;
      front_shiny?: string;
      back_shiny?: string;
      
    };
  }